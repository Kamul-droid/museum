import { render, screen } from '@testing-library/react'
import {BrowserRouter as Router} from "react-router-dom";
<<<<<<< HEAD:src/Containers/test/card.test.js
import Card from '../main/Pages/card'
=======
import Card from '../Containers/main/Pages/card'
>>>>>>> 66928cdd738b2c5b04d55de8fb91c74963826668:src/test/card.test.js


describe('Test card page', () => {

    test('card display', async () => {
        render(
         <Router> 
            <Card />
         </Router>
        )
        const objects = screen.getByTestId('popular-object')
        expect(objects).toBeInTheDocument()
     })

     test('image card display', async () => {
        render(
         <Router> 
            <Card />
         </Router>
        )
        const imageObject = screen.getByTestId('image-object')
        expect(imageObject).toBeInTheDocument()
     })
     test('title card display', async () => {
        render(
         <Router> 
            <Card />
         </Router>
        )
        const titleObject = screen.getByTestId('title-object')
        expect(titleObject).toBeInTheDocument()
     })
     test('credit card display', async () => {
        render(
         <Router> 
            <Card />
         </Router>
        )
        const creditObject = screen.getByTestId('credit-object')
        expect(creditObject).toBeInTheDocument()
     })
     test('credit card display', async () => {
        render(
         <Router> 
            <Card />
         </Router>
        )
        const detailObject = screen.getByTestId('details-object')
        expect(detailObject).toBeInTheDocument()
        expect(detailObject.textContent).toBe("Details");
     })
})