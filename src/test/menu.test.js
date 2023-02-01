import { render, screen } from '@testing-library/react'
import {BrowserRouter as Router} from "react-router-dom";
<<<<<<< HEAD:src/Containers/test/menu.test.js
import Menu from '../header/menu'
=======
import Menu from '../Containers/header/menu'
>>>>>>> 66928cdd738b2c5b04d55de8fb91c74963826668:src/test/menu.test.js
import logo from '../../img/logo.svg'


describe('Test display enseigne', () => {

    test('Affichage menu', async () => {
        render(
         <Router> 
            <Menu />
         </Router>
        )
        const divMenu = screen.getByTestId('div-menu')
        expect(divMenu).toBeInTheDocument()
     })

     test('test logo display and alt contains correct value', () => {
        render(  <Router> 
            <Menu />
         </Router>)
        const logoImg = screen.getByAltText("The Metropolitan Museum of Art")
        expect(logoImg).toBeInTheDocument();
        const testImage = document.querySelector("img");
        expect(testImage.alt).toContain("The Metropolitan Museum of Art");      
    })

    test('image logo', async () => {
        render(
         <Router> 
            <Menu />
         </Router>
        )
        const imageLogo = screen.getByTestId('image-logo')
        expect(imageLogo).toBeInTheDocument()
        expect(imageLogo.src).toContain(logo);
        })

    test('logo text ', async () => {
        render(
            <Router>        
            <Menu />
        </Router>
        )
        const  logoTxt = screen.getByTestId('text-logo')
        expect(logoTxt).toBeInTheDocument()
        expect(logoTxt.textContent).toBe("Museum of ArtOnline Museum")
        
     }
     )
    });

    describe('Test burger Menu', () => {

     test('boutton burger menu', async () => {
        render(
            <Router>        
            <Menu />
        </Router>
        )
        const  menuBtn = screen.getByTestId('btn-menu')
        expect(menuBtn).toBeInTheDocument()
        
     })
     test('div items menu', async () => {
        render(
            <Router>        
            <Menu />
        </Router>
        )
        const  divItems = screen.getByTestId('div-menu-items')
        expect(divItems).toBeInTheDocument()
        
     })
     test('list items menu', async () => {
        render(
            <Router>        
            <Menu />
        </Router>
        )
        const  listItems = screen.getByTestId('list-menu-items')
        expect(listItems).toBeInTheDocument()
        
     })

     test('home menu', async () => {
        render(
            <Router>        
            <Menu />
        </Router>
        )
        const  homeItem = screen.getByTestId('home-item')
        expect(homeItem).toBeInTheDocument()
        
     })

     test('search-box menu ', async () => {
        render(
            <Router>        
            <Menu />
        </Router>
        )
        const  searchBoxItems = screen.getByTestId('search-box-item')
        expect(searchBoxItems).toBeInTheDocument()
        
     })
     test('button search menu', async () => {
        render(
            <Router>        
            <Menu />
        </Router>
        )
        const  btnSearchBox = screen.getByTestId('btn-search-box')
        expect(btnSearchBox).toBeInTheDocument()
        
     })
     test('Search bar display', async () => {
        render(
            <Router>        
            <Menu />
        </Router>
        )
        const Search = screen.getByTestId('search')
        expect(Search).toBeInTheDocument()
        
     })
     test('Search bar input', async () => {
        render(
            <Router>        
            <Menu />
        </Router>
        )
        const Search = screen.getByPlaceholderText('Type to Search...')
        expect(Search).toBeInTheDocument();
     })


     test('button advanced-search menu', async () => {
        render(
            <Router>        
            <Menu />
        </Router>
        )
        const  btnAdvancedSearch = screen.getByTestId('advanced_search-item')
        expect(btnAdvancedSearch).toBeInTheDocument()
        
     })
     test('advanced search display', async () => {
        render(
         <Router>        
             <Menu />
         </Router>
        )
        const btnAdvancedSearch = screen.getByTestId('advSearch')
     expect(btnAdvancedSearch.textContent).toBe('Advanced search')
     })
     
});    
