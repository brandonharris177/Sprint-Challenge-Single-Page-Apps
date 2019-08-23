import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import {Route} from "react-router-dom"
import CharacterList from "./components/CharacterList"
import LocationsList from "./components/LocationsList"
import EpisodeList from "./components/EpisodeList"
import SearchForm from "./components/SearchForm"


export default function App() {
  return (
    <main>
      <Header />
      <TabNav/>
      {/* <Route exact path = "/" component= {App}/> */}
      <Route path = "/character" component = {CharacterList}/>
      <Route path = "/location" component = {LocationsList}/>
      <Route path = "/episode" component = {EpisodeList}/>
      <Route path = "/search" component = {SearchForm}/>
    </main>
  );
}
