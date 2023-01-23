
import './css/App.css';
import './css/bootstrap-icons.css';
import './css/bootstrap.min.css';
import './css/templatemo-kind-heart-charity.css';
import Header from './Containers/header/header';
import Menu from './Containers/header/menu';
import Main from './Containers/main/main';
import Footer from './Containers/footer/footer';
import Home from './Containers/main/Pages/home';
import Views from './Containers/main/Pages/view';

function App() {
  return (
    <>
      <Header></Header>
      <Menu></Menu>
      <Main></Main>
      
      <Views></Views>
      {/* <Home></Home> */}
      <Footer></Footer>
    </>
  );
}

export default App;
