import React from "react"
import styled from "styled-components"

const FooterStyle = styled.footer`
            display:flex;
            justify-content:space-between;
            background-color:black;
            height:60px;
            p{
                color:white;
                padding-top:20px;
                font-size:1.0rem;
                font-weight:bold;
                margin-left:20px;
            }
            .menu{
        display:flex;
        
    }
    ul{
        display:flex;
    }
    nav li{
        
        list-style-type:none;
        margin-right:50px;
        padding-top:15px;
    }
    a{
        color:#FCC731;
        text-decoration:none;
        font-weight:bold;
        font-size:1.1em;
        text-transform:uppercase;
        padding-bottom: 5px;
        
    }
    a:hover{
        color:white;
        border-bottom: 3px solid #760001;
        
    }

`

function Footer () {
    return(
        <FooterStyle>
            <div>
            <p>Copyright 2020</p>
            </div>
            <div className="menu">
                <nav>
                    <ul>
                        <li><a href="#accueil">Home</a></li>
                        <li><a href="#films">Movies</a></li>
                        <li><a href="#blog">Blog</a></li>
                    </ul>
                </nav>
            </div> 
            
        </FooterStyle>
    )
}
export default Footer