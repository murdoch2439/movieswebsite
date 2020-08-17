import React from "react"
import Menu from "./menu"
import styled from "styled-components"

const FooterStyle = styled.footer`
            display:flex;
            justify-content:space-between;
            background-color:black;
            height:70px;
            p{
                color:white;
                padding-top:20px;
                font-size:1.0rem;
                font-weight:bold;
                margin-left:20px;
            }

`

function Footer () {
    return(
        <FooterStyle>
            <div>
                <p>Copyright 2020</p>
            </div>
            <div className="menu">
                <Menu />
            </div> 
            
        </FooterStyle>
    )
}
export default Footer