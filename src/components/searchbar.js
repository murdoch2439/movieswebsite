import React, {useState, useEffect,getUrl, Fragment} from 'react';
import styled from 'styled-components';
import {Input} from 'semantic-ui-react';
import axios from "axios";
import CardMovie from "./cardMovie";

const SearchBarStyle = styled.div`
    display:flex;
    overflow-x:scroll;
    width:100%;
    height:450px;
    .searchbar{
        width:95%;
        margin-left:3%;
        position:absolute;        
    }

    @media all and (max-device-width: 480px){
        width:100%;
        margin:0px

    }
    
    @media screen and (max-width: 525px)
{   margin-top:2%;
    width:100%;
        padding-left:300px;
    .searchbar
    {
        width:100px;
        margin-bottom:30px;
    }
}

@media screen and (max-width: 725px)
{   
    height:500px;
    display:inline ;
    overflow-y:scroll;
    background-color:#FCC731;;
    
    .searchbar
    {
        width:300px;
        margin-left:0px;
    }
}
`

const apiKey="93d65b320d0633776484d6aa29f4c92b"

const SearchBar =  () => {
    const [searching, setSearching] = useState("")
    const [researches, setResearches] = useState([])

        const getUrl = async (e) =>{
            setSearching(e.target.value)
        
        const retrived = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en&query=${searching}`);

        setResearches(retrived.data.results)
        console.log(retrived)
    }
    useEffect(() => {
        (async function() {
          const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
          setResearches(res.data.results);
        //   setTotalPage(res.data.total_pages)
        //   setIsLoading(true)
        })();
      }, []);

    return (
        <SearchBarStyle>
            <div>
            <Input icon="search" onChange={getUrl} className="searchbar" placeholder='Search by typing a title...' />
            </div>
            {researches && researches.map ((item) =>
                
                    <Fragment key={item.id}>
                        
                        <CardMovie    image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} title={item.original_title}  item ={item}/>
                        {/* <ImgStyle src={ film.poster_path === null? defaultImg :getImageFromApi(film.poster_path)} /> */}
                    </Fragment>
            )}
                        
        </SearchBarStyle>
    )
}

export default SearchBar
