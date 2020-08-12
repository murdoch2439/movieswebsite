import React from 'react'
import styled from "styled-components"


const CardStyle = styled.div`
        display:flex;
        background-color:white;
        width:1000px;
        height:200px;
        margin-bottom:10px;
        margin-left:0px;
        box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.10);
        border-radius: 10px;
        margin-top:50px;
        justify-content:center;
        
        
        .coverImage{
          width:100px;
          height:200px;
          border-top-left-radius:10px;
          border-bottom-left-radius:10px;
        }
        .movieInformation{
            margin:5px 5px 0px 20px;
            padding-top:10px;
        }
        .movieDescription{
            text-align:justify;
            margin-left:0px;
            padding-right:10px;  
            
        }
        .dateTime{
          font-style:italic;
        }

        

`

const CardMovie = ({title, image, date, description}) => (
    
    <>
  <CardStyle>
    <div>
      <img className="coverImage" src={image}  alt="" />
    </div>
    <div className="movieInformation">
        <h3>{title}</h3>
        <p className="dateTime">{date}</p>
        
        <p className="movieDescrition">{description}</p>
    
    </div>
  </CardStyle>
  </>
)

export default CardMovie