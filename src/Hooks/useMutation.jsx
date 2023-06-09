import { useState, useCallback, useMemo } from 'react';
import axios from 'axios';
import { baseUrl } from '../Config';

const defaultOptions = {
  method: 'post', // post | put | delete,
  variables: null,
  data: null,
  headers: {},
  refresh: null,
  idDelete: null,
};

const useMutation = (url, opts = defaultOptions) => {
  const optsResolve = useMemo(() => ({
    ...defaultOptions,
    ...opts,
  }), [opts]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [headers, setHeaders] = useState(null);
  const [errors, setErrors] = useState(null);

  const mutationFunc = useCallback(
    async (optsFunc = {}) => {
      const options = {
        ...optsResolve,
        ...optsFunc,
      };

      setLoading(true);

      try {
        const config = options.method === 'delete'
          ? [
            {
              data: options.variables || options.data,
              headers: options.headers,
            },
          ]
          : [options.variables || options.data, { headers: options.headers }];

        const response = await axios[options.method](
          `${baseUrl}${url}${options?.idDelete ? `/${options.idDelete}` : ''}`,
          ...config,
        );
        setHeaders(response.headers);
        setData(response.data);
        setLoading(false);
        if (options.refresh && typeof options.refresh === 'function') {
          await options.refresh();
        }
        return {
          data, loading: false, errors: null, headers,
        };
      } catch (err) {
        setErrors(err);
        setData(null);
        setLoading(false);
        return { data: null, loading: false, errors: err };
      }
    },
    [url, optsResolve],
  );

  return [mutationFunc, {
    loading, data, headers, errors,
  }];
};

export default useMutation;
