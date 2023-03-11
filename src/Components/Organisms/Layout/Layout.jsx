import { Container } from 'react-grid-system';
import { Helmet } from 'react-helmet';
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
      <main>
        <Container>
          {children}
        </Container>
      </main>
    </>
  );
}

export default Layout;
