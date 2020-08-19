import React from 'react';
import {  Modal, ModalHeader, ModalBody,  } from 'reactstrap';
import styled from "styled-components"


const ModalStyle = styled.div`
        width:1000px;
        .modalBody{
          display:flex;
        }
        @media all and (max-device-width: 375px){
          img{
            width:400px;
          }
        }
`
const Modals = (props) => {
  const {
    className,
    modal,
    toggle,
    item
  } = props;

  

  return (
    <ModalStyle>
      <Modal className="modalss" isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody className="modalBody">
          <div>
          <img style={{width:"100%", }}  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" />
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