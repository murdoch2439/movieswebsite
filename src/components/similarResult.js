// import React, {useState, useEffect} from "react"
// import CardSimilarResult from "./cardSimilarResult"
// import styled from "styled-components"
// import axios from "axios"

// const CardsimilarStyle = styled.div`
//         width:300px;
//         height:500px;
//         background-color:#D24545;
//         border-radius:10px;
//         overflow-y: scroll;
        
//         h3{
//             text-align:center;
//             color:white;
//             padding-top:10px;
//             text-transform:uppercase;
//         }
//         .containercard{
//             display:flex;
//             background-color:white;
//             margin:10px;
//             border-radius:10px;
//             box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.10);
//         }
// `

// const apiKey="93d65b320d0633776484d6aa29f4c92b"

// const Cardsimilar = () =>{

//     const [movies, setMovies] = useState([])
//     const getDataThroughUrl = async () =>{
//         const moviesRetrived = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
//         .then((res) => res.data.results)
//         .catch((err) => console.log(err))

//         setMovies(moviesRetrived)
//         console.log(moviesRetrived)
//     }

//     useEffect(() => {
//         getDataThroughUrl();
//       }, []);
//     return(
//         <CardsimilarStyle>
//             {/* <h3>Films populaires</h3> */}
//         {movies.map((item, i) =>(
//             <div>
//                 <CardSimilarResult key={i} image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} title={item.original_title} date={item.release_date} description={item.overview} />
//             </div>
//         ))}
            

                
//         </CardsimilarStyle>
//                 )
// }
// export default Cardsimilar