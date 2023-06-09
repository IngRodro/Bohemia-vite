import styled, { keyframes } from 'styled-components';
import { IconInnerShadowLeftFilled } from '@tabler/icons-react';

const rotateAnimation = keyframes`
  to {
    transform: rotate(0deg);
  }
  from {
    transform: rotate(360deg);
  }
`;

export const StyleLoading = styled.span`
  margin-right: 5px;
  font-size: 1em;

  children: {
  }
`;

export const IconLoaderAlt = styled(IconInnerShadowLeftFilled)`
  width: 1.5em;
  height: 1.5em;
  color: ${({ theme }) => theme.colors.white};
  animation: ${rotateAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;
