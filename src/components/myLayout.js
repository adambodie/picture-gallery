import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

const Layout = props => (
  <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Picture of the Week Gallery</title>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"></link>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
        </Helmet>
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default Layout;