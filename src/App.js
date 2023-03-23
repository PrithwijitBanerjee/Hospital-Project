//import logo from './logo.svg';
//import './App.css';
import Header from './Component/Header';
import { BrowserRouter } from 'react-router-dom';
import MyNav from "./Component/MyNav";
import MyRouter from "./Component/MyRouter";
import Footer from './Component/Footer';
function App() {
  return (
    <div>
    <BrowserRouter>
      <Header></Header>
      <MyNav></MyNav>
      <MyRouter></MyRouter>
      <Footer></Footer>
    </BrowserRouter>
    </div>
  );
}

export default App;
