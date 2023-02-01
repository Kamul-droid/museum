import { render, screen } from '@testing-library/react'
import {BrowserRouter as Router} from "react-router-dom";
import LandingPage from '../Containers/main/landingPage'
import sideChair from '../../img/side-chair.jpg'
import diningRoom from '../../img/dining-room.jpg'
import fourteen from '../../img/fourteen.jpg'

describe('Test landing-page', () => {

    test('landing page display', async () => {
        render(
         <Router> 
            <LandingPage />
         </Router>
        )
        const landingPageDisplay = screen.getByTestId('landing-page')
        expect(landingPageDisplay).toBeInTheDocument()
     })
     test('landing page container', async () => {
        render(
         <Router> 
            <LandingPage />
         </Router>
        )
        const landingPageContainer = screen.getByTestId('landing-page-container')
        expect(landingPageContainer).toBeInTheDocument()
     })
     test('side-chair image', async () => {
        render(
         <Router> 
            <LandingPage />
         </Router>
        )
        const chairImage = screen.getByTestId('chair-image')
        expect(chairImage).toBeInTheDocument()
        expect(chairImage.src).toContain(sideChair);
     })
     test('side-chair title', async () => {
        render(
         <Router> 
            <LandingPage />
         </Router>
        )
        const chairTitle = screen.getByTestId('chair-title')
        expect(chairTitle).toBeInTheDocument()
        expect(chairTitle.textContent).toBe("Side chair");
     })
     test('side-chair description', async () => {
        render(
         <Router> 
            <LandingPage />
         </Router>
        )
        const chairDescription = screen.getByTestId('chair-description')
        expect(chairDescription).toBeInTheDocument()
        expect(chairDescription.textContent).toBe("Gift of The Museum of the City of New York, 2008");
     })

     test('dining-room image', async () => {
        render(
         <Router> 
            <LandingPage />
         </Router>
        )
        const diningRoomImage = screen.getByTestId('dining-room-image')
        expect(diningRoomImage).toBeInTheDocument()
        expect(diningRoomImage.src).toContain(diningRoom);
     })
     test('dining-room title', async () => {
        render(
         <Router> 
            <LandingPage />
         </Router>
        )
        const diningRoomTitle = screen.getByTestId('dining-room-title')
        expect(diningRoomTitle).toBeInTheDocument()
        expect(diningRoomTitle.textContent).toBe("Dining room from Lansdowne House");
     })
     test('dining-room description', async () => {
        render(
         <Router> 
            <LandingPage />
         </Router>
        )
        const diningRoomDescription = screen.getByTestId('dining-room-description')
        expect(diningRoomDescription).toBeInTheDocument()
        expect(diningRoomDescription.textContent).toBe("European Sculpture and Decorative Arts");
     })
     
     test('dancer fourteen image', async () => {
        render(
         <Router> 
            <LandingPage />
         </Router>
        )
        const dancerImage = screen.getByTestId('dancer-image')
        expect(dancerImage).toBeInTheDocument()
        expect(dancerImage.src).toContain(fourteen);
     })
     test('dancer title', async () => {
        render(
         <Router> 
            <LandingPage />
         </Router>
        )
        const dancerTitle = screen.getByTestId('dancer-title')
        expect(dancerTitle).toBeInTheDocument()
        expect(dancerTitle.textContent).toBe("The Little Fourteen-Year-Old Dancer");
     })
     test('dining-room description', async () => {
        render(
         <Router> 
            <LandingPage />
         </Router>
        )
        const dancerDescription = screen.getByTestId('dancer-description')
        expect(dancerDescription).toBeInTheDocument()
        expect(dancerDescription.textContent).toBe("European Sculpture and Decorative Arts");
     })
     test('previous button', async () => {
        render(
         <Router> 
            <LandingPage />
         </Router>
        )
        const previousBtn = screen.getByTestId('previous-btn')
        expect(previousBtn).toBeInTheDocument()
        expect(previousBtn.textContent).toBe("Previous");
     })
     test('next button', async () => {
        render(
         <Router> 
            <LandingPage />
         </Router>
        )
        const nextBtn = screen.getByTestId('next-btn')
        expect(nextBtn).toBeInTheDocument()
        expect(nextBtn.textContent).toBe("Next");
     })
})