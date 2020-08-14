import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import styled from "styled-components"

const TopMoviesStyle = styled.div`
            width:900px;
            padding-top:10px;
            margin:auto;
            .generalcover{
                height:450px;
            }
`

const items = [
  {
    src: 'https://www.nextplz.fr/wp-content/uploads/2019/11/landscape-1492100402-furious-8-poster.jpg',
    altText: '',
    caption: 'Retrouver l’essentiel selon vos preferences pour vous divertir aussi longtemps que vous en avez besoin. Nous sommes la pour vous servir ',
    header: 'BIENVENU DANS VOTRE MOVIESROOOM',
    key: '1'
  },
  {
    src: 'https://cdn.radiofrance.fr/s3/cruiser-production/2019/05/b3b02f3a-ca1f-43e6-a455-61369ca113d4/801x410_jumanji1.jpg',
    altText: 'Slide 2',
    caption: 'Ca va vous faire rever',
    header: 'JUMANJI',
    key: '2'
  }
];

const CoverCarousel = () => {
    return(
        <TopMoviesStyle>
            <div>
                <UncontrolledCarousel className="generalcover" items={items} />
            </div>
        </TopMoviesStyle>
    )
}

export default CoverCarousel;