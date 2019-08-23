import React, { useEffect, useState } from "react";
import axios from "axios";

export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect
  const [episodes, setEpisodes] = useState([]);
  console.log(episodes)

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      axios
    .get(`https://rickandmortyapi.com/api/episode/`)
    .then(response => {
      console.log(`Data:`, response.data.results)
      setEpisodes(response.data.results);
    })
    .catch(error => {
      console.error('Server Error', error);
    });
  }, []);



  return (
    <section className="episode-list grid-view">
      {episodes.map(episode => (
        <EpisodeDetails key = {episode.id} episode1 = {episode} />
      ))}
    </section>
  );
}

function EpisodeDetails({ episode1 }) {
  const { air_date, episode, name} = episode1;
  return (
      <div className="name">
        <h2>{name}</h2>
        <div className="episode">
          Episode: <h2>{episode}</h2>
        </div>
        <div className="air-date">
          Air Date: <h2>{air_date}</h2>
        </div>
      </div>
  );
}