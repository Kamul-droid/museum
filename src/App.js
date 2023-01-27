
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
  // const srch = document.getElementById('search');
  // console.log(srch.,"value");
  
//   const onChange = useCallback( 
    
//     event => {
//       console.log('====================================');
//       console.log('====================================');
//         // setSearch(event.target.value)
//         console.log('====================================');
//         // console.log(event.target.value,"on change");
//         console.log('====================================');
//     },
//     [setSearch]);

// const onSubmit = useCallback(
//     event =>{
//         event.preventDefault()
//         // setSearch(event.target.value);
//         if (searchValue !== '')  {
//             console.log('====================================');
//             console.log({searchValue},"search value on submit");
//             console.log('====================================');
//         }
//     },[searchValue]);

// if (!objectId) {
//   setSearch('');
// }

  const getArtObjectList = useCallback( (object)=>{
      setArts(object)
      console.log('====================================');
      console.log("in appp");
      console.log('====================================');
    },[setArts]);

  const updateSearch = useCallback( (object)=>{
      setSearch(object)
      console.log('=========sssssssssssssssssssssssssss===========================');
      console.log(object,"in appp");
      console.log('====================================');
    },[]);
  
console.log('============       ========================');
console.log(arts,"in app");
console.log('=============     =======================');

  return (
    <>
      <searchContext.Provider value={{searchValue,getArtObjectList, updateSearch}} >
        <artsContext.Provider value={arts}>

    
          <Header></Header>
          <Menu></Menu>
          { 

            searchValue ===''  && !objectId && <Main></Main>

          }
          {
           
           !objectId  && <Views searchData ={ searchValue}></Views>
           
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
