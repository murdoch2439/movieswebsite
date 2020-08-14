import React from "react"
import styled from "styled-components"
import Header from "./home/header"
import CoverCarousel from "./carousel"
import Footer from "./home/footer"
import SearchBar from "./searchbar"


const LayoutStyle = styled.div`
            background-color:#FCC731;

            .titleOfPopularMovies{
                margin-top:10px;
                color:white;
                margin-left:190px;
                text-transform:uppercase;
            }
        
`

function Layout (){
    return(
        <>
        <LayoutStyle>
            <div>
                <Header />
            </div>

            <div>
                <CoverCarousel />
            </div>

                <h2 className="titleOfPopularMovies">Movies</h2>
            
            <div className="ser">
                <SearchBar />
            </div> 

            <div>
                <Footer />
            </div>
        </LayoutStyle>
        </>
    )
}
export default Layout