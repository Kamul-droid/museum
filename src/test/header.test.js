import { render, screen } from '@testing-library/react'
import { add } from 'lodash';
import {BrowserRouter as Router} from "react-router-dom";
<<<<<<< HEAD:src/Containers/test/header.test.js
import Header from '../header/header'
=======
import Header from '../Containers/header/header'
>>>>>>> 66928cdd738b2c5b04d55de8fb91c74963826668:src/test/header.test.js





describe('Test header display', () => {

    test('display header ', async () => {
        render(
         <Router> 
            <Header />
         </Router>
        )
        const header = screen.getByTestId('header')
        expect(header).toBeInTheDocument()
     })

     test('display header container', () => {
        render(  <Router> 
            <Header />
         </Router>)
        const headerContainer = screen.getByTestId('container-header')
        expect(headerContainer).toBeInTheDocument() 
    })

    test('contact information container ', async () => {
        render(
            <Router>        
            <Header />
        </Router>
        )
        const  contactContainer = screen.getByTestId('contact-container')
        expect(contactContainer).toBeInTheDocument()
     })
     test('address text ', async () => {
        render(
            <Router>        
            <Header />
        </Router>
        )
        const  address = screen.getByTestId('address-text')
        expect(address).toBeInTheDocument()
        expect(address.textContent).toBe('The Metropolitan Museum of Art 20, 0150 Paris, France')

     })
     test('email text ', async () => {
        render(
            <Router>        
            <Header />
        </Router>
        )
        const  email = screen.getByTestId('mail-text')
        expect(email).toBeInTheDocument()
        expect(email.textContent).toBe('metro-museum-of-art@free.com')
     })


     test('follow container ', async () => {
        render(
            <Router>        
            <Header />
        </Router>
        )
        const  followContainer = screen.getByTestId('follow-container')
        expect(followContainer).toBeInTheDocument()
     })
     test('display follow list  ', async () => {
        render(
            <Router>        
            <Header />
        </Router>
        )
        const  listDisplay = screen.getByTestId('list-display')
        expect(listDisplay).toBeInTheDocument()
     })
     test('twitter logo ', async () => {
        render(
            <Router>        
            <Header />
        </Router>
        )
        const  twitter = screen.getByTestId('twitter-item')
        expect(twitter).toBeInTheDocument()
     })
     test('facebook logo ', async () => {
        render(
            <Router>        
            <Header />
        </Router>
        )
        const  facebook = screen.getByTestId('facebook-item')
        expect(facebook).toBeInTheDocument()
     })
     test('instagram logo ', async () => {
        render(
            <Router>        
            <Header />
        </Router>
        )
        const  instagram = screen.getByTestId('instagram-item')
        expect(instagram).toBeInTheDocument()
     })
     test('youtube logo ', async () => {
        render(
            <Router>        
            <Header />
        </Router>
        )
        const  youtube = screen.getByTestId('youtube-item')
        expect(youtube).toBeInTheDocument()
     })
     test('whatsapp logo ', async () => {
        render(
            <Router>        
            <Header />
        </Router>
        )
        const  whatsapp = screen.getByTestId('whatsapp-item')
        expect(whatsapp).toBeInTheDocument()
     })


    });
