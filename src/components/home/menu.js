import React from "react"

import styled from "styled-components"

const MenuStyle = styled.nav`
ul{
    display:flex;    
    margin-top: 8px;
}
 
li{
    
    padding: 15px 40px;
    list-style-type:none;
}
 
a{
    text-align: center;
    color: #ffffff;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.2vw;
    text-decoration: none;
}

a:hover{
    color: #F0c330;
    transition: 0.5s;
    padding-bottom:10px;
    border-bottom:3px solid #F0c330;
}


    
    @media screen and (max-width: 570px)
{
    width:100%;
    li{
    
    padding: 0px 20px;

}


}
     
`

function Menu(){
    return(
        <MenuStyle>
            <div className="menu">
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#movies">Movies</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </MenuStyle>
    )
}
export default Menu