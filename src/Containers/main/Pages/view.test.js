import { render, screen } from '@testing-library/react'
import {BrowserRouter as Router} from "react-router-dom";
import View from './view'


describe('Test view page', async() => {

    await test('view display', async () => {
        render(
         <Router> 
            <View />
         </Router>
        )
        const view = screen.getByTestId('view')
        expect(view).toBeInTheDocument()
     })

     await test('view container display', async () => {
        render(
         <Router> 
            <View />
         </Router>
        )
        const viewContainer = screen.getByTestId('view-container')
        expect(viewContainer).toBeInTheDocument()
     })
     await test('view row display', async () => {
        render(
         <Router> 
            <View />
         </Router>
        )
        const row = screen.getByTestId('row')
        expect(row).toBeInTheDocument()
     })
     await test('title container display', async () => {
        render(
         <Router> 
            <View />
         </Router>
        )
        const title = screen.getByTestId('title')
        expect(title).toBeInTheDocument()
     })
     await test('view title display', async () => {
        render(
         <Router> 
            <View />
         </Router>
        )
        const titleView = screen.getByTestId('title-view')
        expect(titleView).toBeInTheDocument()
     })
     await test('waiting view display', async () => {
        render(
         <Router> 
            <View />
         </Router>
        )
        const waitingView = screen.getByTestId('waiting-view')
        expect(waitingView).toBeInTheDocument()
     })
     await test('waiting text display', async () => {
        render(
         <Router> 
            <View />
         </Router>
        )
        const waitingText= screen.getByTestId('waiting-text')
        expect(waitingView).toBeInTheDocument()
     })
})