import React from 'react'
import styled from 'styled-components'
function Pin(props) {

    let {urls} = props;

    return (
        <Wrapper>
        <Container class = 'img-hover-zoom'>
            <img src = {urls.regular} alt = 'pin'/>
        </Container>
    </Wrapper>
    )
}

export default Pin

const Wrapper = styled.div  `
display: inline-flex;
padding: 8px;
`

const Container = styled.div  `
display: flex;
align-items: center;
box-sizing: border-box;
cursor: pointer;
width: 236px;
height: 300px; 
overflow: hidden; 

img {
    display: flex;
    width: 100%;
    cursor: zoom-in;
    border-radius: 16px;
    object-fit: cover;
    transition: transform .5s ease;
}

:hover img {
    transform: scale(1.5);
  }
`