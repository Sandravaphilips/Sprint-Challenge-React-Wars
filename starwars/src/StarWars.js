import React from 'react';
import styled from 'styled-components';

const StarWarsStyle = styled.div`
    border: 1px solid brown;
    margin: 25px 10%;
    padding: 5px 5%;
    background-color: #FFFDD0;

    p {
        /* text-align: start; */

        a{
            text-decoration: none;
             
            &:hover {
                color: brown
            }
        }
    }
`

export default function StarWarsComponent(props) {
    const {name, height, mass, hairColor, skinColor, eyeColor, birthYear, gender, url} = props;
    return (
        <StarWarsStyle>
            <p>Hi, my name is {name} and I am a {gender} StarWars character born in {birthYear} with {hairColor} hair,   {skinColor} skin and {eyeColor} eyes, and who weighs {mass}kg and stands about {height}cm tall . To find out more about me, <a href = {url}>click here</a>. </p>
        </StarWarsStyle>
    )
}