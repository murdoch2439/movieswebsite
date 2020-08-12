import React from 'react'
import styled from "styled-components"


const CardSearchStyle = styled.div`
        display:flex;
        background-color:white;
        width:840px;
        height:190px;
        margin-left:50px;
        margin-bottom:20px;
        box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.10);
        border-radius: 10px;
        
        .coverImage{
          width:100px;
          height:190px;
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
            padding-right:10px
        }
        .dateTime{
          position:relative;
          bottom:8px;
        }

        

`

const CardSearch = ({title, image, date, description}) => (
    
    
  <CardSearchStyle>
    <div>
      <img className="coverImage" src={image}  alt="" />
    </div>
    <div className="movieInformation">
        <h3>{title}</h3>
        <p className="dateTime">{date}</p>
        
        <p className="movieDescrition">{description}</p>
    
    </div>
  </CardSearchStyle>
)

export default CardSearch