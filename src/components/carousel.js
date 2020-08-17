import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import styled from "styled-components"

const TopMoviesStyle = styled.div`
          .carousel{
            width:50%;
            height:500px;
          }
`

const items = [
  {
    src: 'https://www.nextplz.fr/wp-content/uploads/2019/11/landscape-1492100402-furious-8-poster.jpg',
    altText: '',
    caption: 'Retrouver l’essentiel selon vos préférences pour vous divertir aussi longtemps que vous en avez besoin.',
    header: 'BIENVENU DANS VOTRE MOVIESROOOM',
    key: '1'
  },
  {
    src: 'https://cdn.radiofrance.fr/s3/cruiser-production/2019/05/b3b02f3a-ca1f-43e6-a455-61369ca113d4/801x410_jumanji1.jpg',
    altText: 'Slide 2',
    caption: '',
    header: '',
    key: '2'
  }
];

const CoverCarousel = () => {
    return(
        <TopMoviesStyle>
            <div className="carousel">
                <UncontrolledCarousel className="generalcover" items={items} />
            </div>
        </TopMoviesStyle>
    )
}

export default CoverCarousel;