import React from 'react';
import Header from './components/home/header'
import Footer from './components/home/footer'
import SearchBar from './components/searchbar'
import Carousel from './components/carousel'
import 'semantic-ui-css/semantic.min.css'
import styled from "styled-components"


const AppStyle= styled.div`
      width:100%;
      background-color:#FCC731;
      .carousel{
        height:1%;
        width:100%;
        margin-bottom:10px;
      }
      @media screen and (min-width: 651px)
{   .caroule{


    width:100%;
    height:50%;
  }

}

`


function App() {
  return (
    <AppStyle>
    <div className="App">
      
        <Header />
        <div className="carousel"><Carousel /></div>
        <SearchBar />
        <Footer />
             
    </div>
    </AppStyle>
  );
}

export default App;
