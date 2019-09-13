import React from "react";
import styled from 'styled-components';

const NavigationStyle = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
    /* border-top: 1px solid white; */
    height: 40px;
    padding-top: 10px;

    a {
        text-decoration: none;
        border-right: 1px solid black;
        color: white;
        text-align: center;
        width: 100%;

        &:hover {
            color: brown;
        }
    }

    a:last-child {
        border-right: none;
        border-left: 1px solid white;
    }

    /* img {
        width: 100%;
    } */
`

export default  function Navigation() {
    
    return (
        <NavigationStyle>
            {/* <img src={logo} alt={alt}/> */}
            <a href='index.html'>Home</a>
            <a href>Services</a>
            <a href>About</a>
            <a href='https://swapi.co/documentation'>Get your StarWars API</a>
        </NavigationStyle>
    )
}