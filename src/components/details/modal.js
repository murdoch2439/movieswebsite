import React, { useState } from 'react';
import {  Modal, ModalHeader, ModalBody,  } from 'reactstrap';
import styled from "styled-components"


const ModalStyle = styled.div`
        
        .modalBody{
          display:flex;
        }
`
const Modals = (props) => {
  const {
    buttonLabel,
    className,
    modal,
    setModal,
    toggle,
    item
  } = props;

  

  return (
    <ModalStyle>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody className="modalBody">
          <div>
          <img style={{width:"200px", }}  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" />
          </div>
          <div>
            <h1>{item.original_title}</h1>
            <p>{item.release_date}</p>
            <p>{item.overview}</p>
          </div>
        </ModalBody>
      </Modal>
    </ModalStyle>
  );
}

export default Modals;



// import React from "react"
// import axios from "axios"
// import styled from "styled-components"


// const ModalStyle = styled.div`
//             background-color:blue;
//             height:700px;
//             width:500px;
// `




// const Modal = (item) => {
//     return(
//         <ModalStyle>
//             <img className="background" src={item.backdrop_path} alt ="" />
//             <img className="profil" src={item.poster_path} alt="" />
//             <h1>{item.original_title}</h1>
//             <p>{item.release_date}</p>
//             <p>{item.overview}</p>
//         </ModalStyle>
//     )
// }
// export default Modal