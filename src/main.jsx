import React, { memo } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Styles/global';
import { themeLight, themeDark } from './Styles/theme';
import { AppThemeProvider, useAppTheme } from './Context/themeContext';
import Routes from './Routes';

const AppRenderTheme = memo(() => {
  const { theme } = useAppTheme();
  return (
    <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
});

function App() {
  return (
    <AppThemeProvider>
      <AppRenderTheme />
    </AppThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
