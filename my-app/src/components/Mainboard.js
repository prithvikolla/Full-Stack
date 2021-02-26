import React from 'react'
import styled from 'styled-components'
import Pin from './Pin'

function Mainboard(props) {

let { pins } = props;
return (
            <Wrapper>
                <Container>
                    {pins.map((pin, index) => {
                        let {urls} = pin;
                        return <Pin key = {index} urls = { urls }/> //Key will help rect to keep track of the changes
                    })}
                </Container>
            </Wrapper>
        )
}

export default Mainboard

const Wrapper = styled.div`
    background-color: black;
    display: flex;
    height: 100%;
    width: 100%;
    margin-top: 15px;
    justify-content: center;
`
const Container = styled.div`
    background-color: white;
    display: flex;
    width: 80%;
`
