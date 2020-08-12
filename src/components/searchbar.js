import React, {useState, useEffect, Fragment} from 'react';
import styled from 'styled-components';
import {Input} from 'semantic-ui-react';
import axios from "axios"
import CardMovie from "./cardMovie"
// import Window from "./modal"



const SearchBarStyle = styled.div`
    
    overflow-y:scroll;
    width:1100px;
    margin:auto;
    margin-top:20px;
    height: 300px; 
    padding-left:70px;
    
    
    background-color:#FCC731;
    /* background-color:white; */
    .searchbar{
        width:1000px;
        padding:auto;
        padding-bottom:10px;
        position:absolute;
        
        
    }
    /* .searchbutton{
        
        background-color:#D24545;
        color:white;
        border-top-left-radius:0px;
        border-bottom-left-radius:0px;
        position:relative;
        right:10px;
        bottom:1px;
        height:39px;
    }
     */
    /* .dropdown{
        height:39px;
        margin-right:30px;
    } */
`

const apiKey="93d65b320d0633776484d6aa29f4c92b"

const SearchBar =  () => {
    const [searching, setSearching] = useState("")
    const [researches, setResearches] = useState([])
    const getUrl = async () =>{
        const retrived = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`).then((res) => res.data.results).catch((err) => console.log(err))

        setResearches(retrived)
        console.log(retrived)
    }

    useEffect(() => {
        getUrl();
      }, []);
      const resultOfSearch = researches.filter((item) => {
        return (
          item.original_title.toLowerCase().includes(searching.toLowerCase()) ||
          item.title.toLowerCase().includes(searching.toLowerCase())
        );
        
      });


    return (
        <SearchBarStyle>
            <div>
            <Input icon="search" onChange={(e) => setSearching(e.target.value)} className="searchbar" placeholder='Search by typing a title...' />
            </div>
            {resultOfSearch.map ((item) =>
                    <Fragment key={item.id}>
                        <CardMovie   image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} title={item.original_title} date={item.release_date} description={item.overview}/>
                    </Fragment>
            )}
            {/* <Button className="searchbutton" >Rechercher</Button> */}
            

            {/* <Dropdown className="dropdown" placeholder='Rechercher par titre' options={options} selection /> */}
        </SearchBarStyle>
    )
}

export default SearchBar
