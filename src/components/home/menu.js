import React from "react"
import styled from "styled-components"

const MenuStyle = styled.nav`

    .menu{
        display:flex;
        
    }
    ul{
        display:flex;
    }
    nav li{
        list-style-type:none;
                
        margin-top:25px;
        margin-right:90px;
        padding-right:0px;
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

function Menu(){
    return(
        <MenuStyle>
            <div className="menu">
                <nav>
                    <ul>
                        <li><a href="#accueil">Home</a></li>
                        <li><a href="#films">Movies</a></li>
                        <li><a href="#blog">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </MenuStyle>
    )
}
export default Menu