
import './css/App.css';
import './css/bootstrap-icons.css';
import './css/bootstrap.min.css';
import './css/templatemo-kind-heart-charity.css';
import Header from './Containers/header/header';
import Menu from './Containers/header/menu';
import Main from './Containers/main/main';
import Footer from './Containers/footer/footer';
import Home from './Containers/main/Pages/home';
import Card1 from './Containers/main/Pages/card1';

function App() {
  return (
    <>
      <Header></Header>
      <Menu></Menu>
      <Main></Main>
      <Card1></Card1>
      {/* <Home></Home> */}
      <Footer></Footer>
    </>
  );
}

export default App;
