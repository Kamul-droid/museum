import { render, screen } from '@testing-library/react'
import {BrowserRouter as Router} from "react-router-dom";
import AdvancedSearch from './advancedSearch'


describe('Test Advanced search page', () => {

    test('landing page display', async () => {
        render(
         <Router> 
            <AdvancedSearch />
         </Router>
        )
        const advancedSearchDisplay = screen.getByTestId('advanced-search')
        expect(advancedSearchDisplay).toBeInTheDocument()
     })
     test('Search bar input', async () => {
        render(
            <Router>        
            <AdvancedSearch />
        </Router>
        )
        const Search = screen.getByPlaceholderText('Type Keywords')
        expect(Search).toBeInTheDocument();
     })
     test('filter container display', async () => {
        render(
         <Router> 
            <AdvancedSearch />
         </Router>
        )
        const filterContainer = screen.getByTestId('filter-container')
        expect(filterContainer).toBeInTheDocument()
     })
     test('title filters container', async () => {
        render(
         <Router> 
            <AdvancedSearch />
         </Router>
        )
        const filterContainer = screen.getByTestId('title-filter-container')
        expect(filterContainer.textContent).toBe("Advanced Search");
    })    
    test('filter select', async () => {
        render(
         <Router> 
            <AdvancedSearch />
         </Router>
        )
        const filtersSelect = screen.getByTestId('select-filter-department')
        expect(filtersSelect).toBeInTheDocument()
    })
    test('category', async () => {
    render(
     <Router> 
        <AdvancedSearch />
     </Router>
    )
    const category = screen.getByTestId('category-filter')
    expect(category.textContent).toBe("Category");

    })

    test('filter highlight', async () => {
        render(
         <Router> 
            <AdvancedSearch />
         </Router>
        )
        const highlightSelect = screen.getByTestId('select-filter-highlight')
        expect(highlightSelect).toBeInTheDocument()
    })
    test('highlight', async () => {
    render(
     <Router> 
        <AdvancedSearch />
     </Router>
    )
    const highlight = screen.getByTestId('highlight-filter')
    expect(highlight.textContent).toBe("Highlight");
    })

    test('filter image', async () => {
        render(
         <Router> 
            <AdvancedSearch />
         </Router>
        )
        const imageSelect = screen.getByTestId('select-filter-image')
        expect(imageSelect).toBeInTheDocument()
    })
    test('image', async () => {
    render(
     <Router> 
        <AdvancedSearch />
     </Router>
    )
    const image = screen.getByTestId('image-filter')
    expect(image).toBeInTheDocument()
    expect(image.textContent).toBe("Image");
    })
    test('second row display', async () => {
        render(
         <Router> 
            <AdvancedSearch />
         </Router>
        )
        const rowSecond = screen.getByTestId('row-second')
        expect(rowSecond).toBeInTheDocument();
        })

        test('geolocalisation', async () => {
            render(
             <Router> 
                <AdvancedSearch />
             </Router>
            )
            const geolocalisation = screen.getByTestId('input-geolocalisation')
            expect(geolocalisation).toBeInTheDocument()
            })

    test('tag', async () => {
        render(
        <Router> 
            <AdvancedSearch />
        </Router>
            )
        const tag = screen.getByTestId('input-tag')
        expect(tag).toBeInTheDocument()
    })
    test('medium', async () => {
        render(
        <Router> 
            <AdvancedSearch />
        </Router>
            )
        const medium = screen.getByTestId('input-medium')
        expect(medium).toBeInTheDocument()
    })
    
    test('third row display', async () => {
        render(
         <Router> 
            <AdvancedSearch />
         </Router>
        )
        const rowThird = screen.getByTestId('row-third')
        expect(rowThird).toBeInTheDocument();
        })

    test('delete', async () => {
    render(
     <Router> 
        <AdvancedSearch />
     </Router>
    )
    const deleteBtn = screen.getByTestId('btn-delete')
    expect(deleteBtn).toBeInTheDocument()
    expect(deleteBtn.textContent).toBe("Reset");
    })

    test('search', async () => {
        render(
         <Router> 
            <AdvancedSearch />
         </Router>
        )
        const searchBtn = screen.getByTestId('btn-advanceSearch')
        expect(searchBtn).toBeInTheDocument()
        expect(searchBtn.textContent).toBe("Search");
    })
})