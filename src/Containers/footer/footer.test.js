import { render, screen } from '@testing-library/react'
import {BrowserRouter as Router} from "react-router-dom";
import Footer from './footer'

describe('Test footer', () => {

    test('footer display', async () => {
        render(
         <Router> 
            <Footer />
         </Router>
        )
        const footerDisplay = screen.getByTestId('footer')
        expect(footerDisplay).toBeInTheDocument()
     })
     test('footer container', async () => {
        render(
         <Router> 
            <Footer />
         </Router>
        )
        const footerContainer = screen.getByTestId('footer-container')
        expect(footerContainer).toBeInTheDocument()
     })
     test('quick link container', async () => {
        render(
         <Router> 
            <Footer />
         </Router>
        )
        const quickLinkContainer = screen.getByTestId('quick-link-container')
        expect(quickLinkContainer).toBeInTheDocument()

     })
     test('quick link title', async () => {
        render(
         <Router> 
            <Footer />
         </Router>
        )
        const quickLinkTitle = screen.getByTestId('quick-link-title')
        expect(quickLinkTitle).toBeInTheDocument()
        expect(quickLinkTitle.textContent).toBe('Quick Links')

     })
 
     test('quick link list', async () => {
        render(
         <Router> 
            <Footer />
         </Router>
        )
        const quickLinkList = screen.getByTestId('quick-link-list')
        expect(quickLinkList).toBeInTheDocument()
     })

     test('our story item', async () => {
        render(
         <Router> 
            <Footer />
         </Router>
        )
        const ourStoryItem = screen.getByTestId('our-story-item')
        expect(ourStoryItem).toBeInTheDocument()
        expect(ourStoryItem.textContent).toBe('Our Story')
     })
     test('newsroom item', async () => {
        render(
         <Router> 
            <Footer />
         </Router>
        )
        const newsroomItem = screen.getByTestId('newsroom-item')
        expect(newsroomItem).toBeInTheDocument()
        expect(newsroomItem.textContent).toBe('Newsroom')
     })
     test('causes item', async () => {
        render(
         <Router> 
            <Footer />
         </Router>
        )
        const causesItem = screen.getByTestId('causes-item')
        expect(causesItem).toBeInTheDocument()
        expect(causesItem.textContent).toBe('Causes')
     })
     test('become a volunteer item', async () => {
        render(
         <Router> 
            <Footer />
         </Router>
        )
        const volunteerItem = screen.getByTestId('volunteer-item')
        expect(volunteerItem).toBeInTheDocument()
        expect(volunteerItem.textContent).toBe('Become a volunteer')
     })
     test('partner with us item', async () => {
        render(
         <Router> 
            <Footer />
         </Router>
        )
        const partnerItem = screen.getByTestId('partner-item')
        expect(partnerItem).toBeInTheDocument()
        expect(partnerItem.textContent).toBe('Partner with us')
     })
    
})