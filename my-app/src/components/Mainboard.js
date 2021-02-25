import React from 'react'
import styled from 'styled-components'
function Mainboard() {
    return (
        <div>
            <Wrapper>
                <Container>
                    <Pin/>
                </Container>
            </Wrapper>
        </div>
    )
}

export default Mainboard

const Wrapper = styled.div  `
    background-color: white;
    display: flex;
    height: 100%;
    width: 100%;
    margin-top: 15px;
    justify-content: center;
`
const Container = styled.div  `
    background-color: white;
    display: flex;
    width: 80%;
`
