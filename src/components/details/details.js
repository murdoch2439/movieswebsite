import React from "react"
import styled from "styled-components"

const DetailsStyle = styled.div`
            display:flex;
            height:400px;
            justify-content:space-between;
            background-color:gray;
            color:white;
            .detailphoto{
                width:180px;
                height:300px;
                border-radius:10px;
                margin:40px;
                
            }
            h1{
                margin-top:40px;
            }

`

function Details () {
    return(
        <DetailsStyle>
            <div>
                <img className="detailphoto" src="https://file1.telestar.fr/var/telestar/storage/images/3/1/1/9/3119310/the-flash.jpg?alias=original" />
            </div>
            <div className="description">
                <h1>Titre du film</h1>
                <p>Annee de sortie</p>
                <p>After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an </p>

            </div>
        </DetailsStyle>
    )
}
export default Details