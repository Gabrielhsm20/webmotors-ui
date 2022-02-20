import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import { VehiclesProvider } from '../../contexts/VehiclesContext';

import Header from '../Header';
import Search from '../Search';
import Content from '../Content';
import Footer from '../Footer';

import '../../assets/styles/helpers/index.scss';

import { Container } from './styles';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <Container>
        <Header />
        <VehiclesProvider>
          <Search />
          <Content />
        </VehiclesProvider>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
