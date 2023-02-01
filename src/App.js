
import './css/App.css';
import './css/bootstrap-icons.css';
import './css/bootstrap.min.css';
import './css/landingPage.css';
import Header from './Containers/header/header';
import Menu from './Containers/header/menu';
import LandingPage from './Containers/main/landingPage';
import Footer from './Containers/footer/footer';
// import Home from './Containers/main/Pages/home';
import Views from './Containers/main/Pages/view';
import React, { useCallback,useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Description from './Containers/main/Pages/description';
import AdvancedSearch from './Containers/main/Pages/advancedSearch';
const searchContext = React.createContext('');
const artsContext = React.createContext([]);


function App() {

  let params = useParams();
  const location = useLocation();
  const objectId = params.id ? params.id :false;
  const canSeeDetails = params.d ? params.d:false;
  let currentPathName = location.pathname.split('/')[1]
  

  const [searchValue, setSearch] = useState('');
  const [arts, setArts] = useState([]);
  const [artQObjects, setArtQObjects] = useState([]);
  const [isQLoaded, setQLoaded] = useState(false);

  const isInArray = ( array, data)=>{
    let isInside =false;
    array.forEach(element => {
        
        if (element.objectID === data.objectID) {
            isInside = true;
        } 
    });
    return isInside;
}
// const reinitializeSearchValue = (arts)=>{
//   if (arts.length !==0) {
//     setSearch('');
//   }
// }
  const getArtObjectList = useCallback( (object)=>{
      setArts(object)
     console.log(arts,' arts g')
    },[arts]);

  const updateSearch = useCallback( (object)=>{
      setSearch(object)
    
    },[]);
    
  const cleanSearchValue = useCallback(()=>
   { 
    if (artQObjects !==0) {
        setSearch('');
    }
    },
    [artQObjects]
  )
  
  
  
  

  return (
    <>
      <searchContext.Provider value={{searchValue,artQObjects,setArtQObjects,getArtObjectList, updateSearch,isInArray,cleanSearchValue,isQLoaded,setQLoaded }} >
        <artsContext.Provider value={arts}>

    
          <Header></Header>
          { <Menu></Menu>}
          { 

            (searchValue ==='' || canSeeDetails !=="true" )&& currentPathName !=='advanced_research' && !objectId && <LandingPage></LandingPage>

          }
          {
           
           (!objectId || searchValue !=='') && currentPathName !=='advanced_research' && <Views searchData ={ searchValue} data = {arts}></Views>
           
          }
          

          {
             canSeeDetails ==="true" && arts.length !==0 && <Description data = {arts} listId={objectId} ></Description>
           } 
           {
            currentPathName ==='details' && canSeeDetails !=="true" && arts.length ===0 && <Description data = {arts} listId={objectId}  ></Description>
           }
           {
            currentPathName ==='advanced_research'   && <AdvancedSearch ></AdvancedSearch>
           }
          
       
          <Footer></Footer>
        </artsContext.Provider>
      </searchContext.Provider>
    </>
  );
}

export default App;
export {searchContext, artsContext};
