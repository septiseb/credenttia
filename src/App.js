import logo from './logo.svg';
import './App.css';
import { ChakraProvider, resetCSS } from "@chakra-ui/react"
import Navbar from './components/Navbar.tsx'
import MainPage from './components/MainPage';

function App() {
  return (
    <ChakraProvider>
    <resetCSS />
    <Navbar />
      <MainPage />      
      </ChakraProvider>
  );
}

export default App;
