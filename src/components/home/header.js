import React from "react"
import styled from "styled-components"
import Menu from "./menu"

const HeaderStyle = styled.div`
    background-color:black;
    
    display:flex;
    justify-content:space-between;
    
    height:70px;
    .logo{
        
        padding-top:10px;
        color:white;
        margin-left:50px;        
    }
    h1{
        font-size:2.4rem;
        
    }
    h1:hover{
        cursor:pointer;
    }

    
`

function Header(){
    return(
        <HeaderStyle>
            <div className="logo">
                <h1>MOVIESROOOM</h1>
            </div>
            <div className="menu">
                <Menu />
            </div>
        </HeaderStyle>
    )
}
export default Header