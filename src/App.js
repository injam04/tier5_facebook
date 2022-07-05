import Navbar from './components/Navbar';
import MainContextProvider from './context/MainContext';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <MainContextProvider>
        <Navbar />
        <Home />
      </MainContextProvider>
    </>
  );
};

export default App;
