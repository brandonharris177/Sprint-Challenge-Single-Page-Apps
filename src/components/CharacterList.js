import React, { useEffect, useState } from "react";
import axios from "axios";
import {Card} from "semantic-ui-react"

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  console.log(characters)

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      console.log(`Data:`, response.data.results)
      setCharacters(response.data.results);
    })
    .catch(error => {
      console.error('Server Error', error);
    });
  }, []);



  return (
    <section className="character-list grid-view">
      {characters.map(character => (
        <CharacterDetails key = {character.name} character = {character} />
      ))}
    </section>
  );
}

function CharacterDetails({ character }) {
  const { image, name, species, status } = character;
  return (
    <Card>
      <div className="name">
        <img src = {image} alt = {`a picture of ${name}`} />
        <h2>{name}</h2>
        <div className="species">
          Species: <h2>{species}</h2>
        </div>
        <div className="status">
          Status: <h2>{status}</h2>
        </div>
      </div>
      </Card>
  );
}