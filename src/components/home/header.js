import React from "react"
import styled from "styled-components"
import Menu from "./menu"

const HeaderStyle = styled.div`

    background-color: black;
    display:flex;
    justify-content:space-between;
    
header{
    width: 100%;
    height: 40px;
    
}
 
h1{
    margin-left: 10%;
    margin-top: 10px;
    color: #FCC731;
}
 
span{
    color: #ffffff;
}
 
    @media screen and (max-width:525px){
        h1{
            font-size:2.0vw;
        }
        height:40px;
    }
`

function Header(){
    
    return(
        <HeaderStyle>
            <div className="logo">
                <h1>MOVIES<span>ROOOM</span></h1>
            </div>
            <div className="menu">
                <Menu />
            </div>
        </HeaderStyle>
    )
}
export default Header