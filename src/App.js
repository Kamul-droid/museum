
import './css/App.css';
import './css/bootstrap-icons.css';
import './css/bootstrap.min.css';
import './css/templatemo-kind-heart-charity.css';
import Header from './Containers/header/header';
import Menu from './Containers/header/menu';
import Main from './Containers/main/main';
import Footer from './Containers/footer/footer';
// import Home from './Containers/main/Pages/home';
import Views from './Containers/main/Pages/view';
import React, { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import Description from './Containers/main/Pages/description';
const searchContext = React.createContext('');
const artsContext = React.createContext([]);


function App() {

  let params = useParams();
  const objectId = params.id ? params.id :false;
  const objectD = params.d;


  const [searchValue, setSearch] = useState('');
  const [arts, setArts] = useState([]);
  const onChange = useCallback( 
    event => {
        setSearch(event.target.value)
        console.log('====================================');
        console.log(event.target.value,"on change");
        console.log('====================================');
    },
    [setSearch]);

const onSubmit = useCallback(
    event =>{
        event.preventDefault()
        if (searchValue !== '')  {
            console.log('====================================');
            console.log({searchValue},"search value on submit");
            console.log('====================================');
        }
    },[searchValue]);

  const getArtObjectList = useCallback( (object)=>{
      setArts(object)
      console.log('====================================');
      console.log("in appp");
      console.log('====================================');
    },[setArts]);
  
console.log('============       ========================');
console.log(arts,"in app");
console.log('=============     =======================');

  return (
    <>
      <searchContext.Provider value={{searchValue, onChange, onSubmit, getArtObjectList}} >
        <artsContext.Provider value={arts}>

    
          <Header></Header>
          <Menu></Menu>
          { 

            searchValue ===''  && !objectId && <Main></Main>

          }
          {
           
           !objectId  && <Views></Views>
           
          }

           {
            objectD ==="true" && <Description data = {arts} listId={objectId} ></Description>
           }
       
          <Footer></Footer>
        </artsContext.Provider>
      </searchContext.Provider>
    </>
  );
}

export default App;
export {searchContext, artsContext};
