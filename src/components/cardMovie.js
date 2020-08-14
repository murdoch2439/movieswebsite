import React, {useState} from 'react'
import styled from "styled-components"
import Modals from "./details/modal"


const CardStyle = styled.div`
        background-color:white;
        width:350px;
        height:400px;      
        box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.10);
        border-radius: 10px;
        margin:90px 50px 0px 10px;
        justify-content:center;
        
        
        
        .coverImage{
          width:200px;
          height:200px;
          border-radius:10px;
          margin-top:40px;
          
          cursor:pointer;
        }
        .movieInformation{
            margin:5px 5px 0px 5px;
            
        }
        
        h5{
          cursor:pointer;
        }

        

`


const CardMovie = ({title, image, item}) => {
  const [modal, setModal] = useState(false);

  const toggle = (item) => {
    console.log(item)
    setModal(!modal)
  } ;
  return(
    <>
  <CardStyle onClick={() => toggle(item)} >
  <Modals   modal={modal} setModal={modal} toggle={toggle} item={item}/>
    
    <div className="movieInformation">
        <div><h5>{title}</h5></div>
        <img className="coverImage" src={image}  alt="" />
    </div>
    
  </CardStyle>
  </>)
}

export default CardMovie