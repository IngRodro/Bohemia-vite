import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';
import PublicRoute from './Components/Public';
import SignPage from '../Pages/Sign/SignPage';

function Routes() {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<PublicRoute />}>
          <Route path="/" element={<SignPage />} />
        </Route>
      </ReactRoutes>
    </BrowserRouter>
  );
}

export default Routes;
