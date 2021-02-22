import React from 'react';
import PinterestIcon from '@material-ui/icons/Pinterest';
import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';
function Header() {
    return (
            <Wrapper>
            
            <LogoWrapper> 
                 <IconButton> 
                     <PinterestIcon/>
                </IconButton>
            </LogoWrapper>
        
            <HomePageButton>
                    <a href='/'>Following</a>
            </HomePageButton>
                    
            {/* <FollowingButton>
                    <a href='/'>Following</a>
            </FollowingButton> */}

            {/* <SearchWrapper>
                <SearchBarWrapper>

                </SearchBarWrapper>
            </SearchWrapper>
            <IconsWrapper>

            </IconsWrapper> */}

            </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
    display: flex;
    align-items: center ;
    height: 56px;
    padding: 12px 4px 4px 4px;
    background-color: white;
    color: black;
`
const LogoWrapper = styled.div`
    .MuiSvgIcon-root (
        color: #e60023;
        font-size: 32px;
        cursor: pointer;
    )
`
const HomePageButton = styled.div`
    display: flex;
    height: 48px;
    min-width: 123px;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    cursor: pointer;
    background-color: rgb(17,17,17);
            
    a {
        text-decoration: none;
        color: white;
        font-weight: 700;
    }

`