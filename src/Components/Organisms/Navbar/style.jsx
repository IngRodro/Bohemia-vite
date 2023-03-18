import styled from 'styled-components';

export const StyleNavbar = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 100px;
  backdrop-filter: saturate(180%) blur(10px);
  border-bottom: 5px solid ${({ theme }) => theme.colors.primary}FF;
  background: ${({ theme }) => theme.colors.primary}AA;
  z-index: ${({ theme }) => theme.zIndex.nav};
`;

export const StyleLogoWrapper = styled.div`
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100%',
`;
