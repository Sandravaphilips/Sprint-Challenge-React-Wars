import React from 'react';

export default function StarWarsComponent(props) {
    const {name, height, mass, hairColor, skinColor, eyeColor, birthYear, gender, url} = props;
    return (
        <div>
            <p>Hi, my name is {name} and I am a {gender} StarWars character born in {birthYear} with {hairColor} hair,   {skinColor} skin and {eyeColor} eyes, and who weighs {mass}kg and stands about {height}cm tall . To find out more about me, <a href = {url}>Click here</a>. </p>
        </div>
    )
}