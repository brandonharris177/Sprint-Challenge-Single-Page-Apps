import React, { useEffect, useState } from "react";
import axios from "axios";
import {Card} from "semantic-ui-react"

export default function LocationList() {
  // TODO: Add useState to track data from useEffect
  const [locations, setLocations] = useState([]);
  console.log(locations)

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      axios
    .get(`https://rickandmortyapi.com/api/location/`)
    .then(response => {
      console.log(`Data:`, response.data.results)
      setLocations(response.data.results);
    })
    .catch(error => {
      console.error('Server Error', error);
    });
  }, []);



  return (
    <section className="location-list grid-view">
      {locations.map(location => (
        <LocationDetails key = {location.name} location = {location} />
      ))}
    </section>
  );
}

function LocationDetails({ location }) {
  const { name, dimension, type } = location;
  return (
      <div className="name">
          <Card>
            <h2>{name}</h2>
            <div className="dimension">
            Dimension: <h2>{dimension}</h2>
            </div>
            {/* <div className="residents">
            Number of residents: <h2>{residents.lenth}</h2>
            </div> */}
            <div className="type">
            Type: <h2>{type}</h2>
            </div>
        </Card>
      </div>
  );
}
