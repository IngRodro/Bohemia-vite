import { Helmet } from 'react-helmet';
import Container from './style';
import Navbar from '../Navbar';

function Layout({ children, title }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <header>
        <Navbar />
      </header>
      <Container>
        {children}
      </Container>
    </>
  );
}

export default Layout;
