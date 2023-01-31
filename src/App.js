
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
import React, { useCallback,useEffect ,useState } from 'react';
import { Navigate, redirect, useLocation, useNavigate, useNavigation, useParams } from 'react-router-dom';
import Description from './Containers/main/Pages/description';
import NotFound from './Containers/main/Pages/notFound';
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

  const isInArray = ( array, data)=>{
    let isInside =false;
    array.forEach(element => {
        
        if (element.objectID === data.objectID) {
            isInside = true;
        } 
    });
    return isInside;
}
const reinitializeSearchValue = (arts)=>{
  if (arts.length !==0) {
    setSearch('');
  }
}
  const getArtObjectList = useCallback( (object)=>{
      setArts(object)
     
    },[setArts]);

  const updateSearch = useCallback( (object)=>{
      setSearch(object)
    
    },[]);
    
  useCallback(
    () => {
      reinitializeSearchValue(arts);
    },
    [arts],
  )
  

  return (
    <>
      <searchContext.Provider value={{searchValue,artQObjects,setArtQObjects,getArtObjectList, updateSearch,isInArray}} >
        <artsContext.Provider value={arts}>

    
          <Header></Header>
          { currentPathName !=='advanced_research' &&<Menu></Menu>}
          { 

            (searchValue ==='' || canSeeDetails !=="true") && !objectId && <LandingPage></LandingPage>

          }
          {
           
           (!objectId || searchValue !=='') && <Views searchData ={ searchValue} data = {arts}></Views>
           
          }
          

           {
            searchValue ==='' && canSeeDetails ==="true" && arts.length !==0 && <Description data = {arts} listId={objectId} ></Description>
           }
           {
            currentPathName ==='details' && canSeeDetails !=="true" && arts.length ===0 && <Description data = {arts} listId={objectId}  ></Description>
           }
          
       
          <Footer></Footer>
        </artsContext.Provider>
      </searchContext.Provider>
    </>
  );
}

export default App;
export {searchContext, artsContext};
