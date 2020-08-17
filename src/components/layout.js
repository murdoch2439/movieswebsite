import React from "react"
import styled from "styled-components"
import Header from "./home/header"
import CoverCarousel from "./carousel"
import Footer from "./home/footer"
import SearchBar from "./searchbar"

const LayoutStyle = styled.div`
            
            background-color:rgb(156, 156, 35);
            height:100%;
            width:100%;
            .search{
                width:100%;
                height:100%;
            }
            .carousel{
                width:100%;
                height:100%;
            }


    @media screen and (min-width: 320px)
{   
    width:100%;
    .search{
        margin-top:-100px;
        height:100%;
        width:100%;
    }
     
}



        
`

function Layout (){
    return(
        <>
        <LayoutStyle>
                
            
                           
            
                
            
                <Footer />
            
        </LayoutStyle>
        </>
    )
}
export default Layout