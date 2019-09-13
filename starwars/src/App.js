import React, {useState, useEffect} from 'react';
import './App.css';
import StarWarsComponent from "./StarWars";
import axios from "axios";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [content, setContent] = useState([]);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
    .then(response => {
      setContent(content.concat(response.data.results))
      console.log(content)
    })
    .catch(err => console.log(err))
  })

  if (!content) return <h3>Loading...</h3>
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {content.map(character => {
        if(character.gender === "n/a") {
          character.gender = null
        }
        return <StarWarsComponent name={character.name} height={character.height} hairColor={character["hair_color"]} mass={character.mass} gender={character.gender} url={character.url} eyeColor={character["eye_color"]} birthYear={character["birth_year"]} skinColor={character["skin_color"]} />
      })}
    </div>
  );
}

export default App;
