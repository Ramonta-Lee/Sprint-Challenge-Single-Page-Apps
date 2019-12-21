import React, { useState, useEffect } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import SearchForm from "./components/SearchForm";
import axios from "axios";
import WelcomePage from "./components/WelcomePage.js";
import LocationsList from "./components/LocationsList.js";

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${search}`)
      .then(response => {
        console.log(response.data.results);

        setCharacters(response.data.results);
        
      })
      .catch(error => console.log(error));

    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [search]);

  const handleSearchChange = event => {
    setSearch(event.target.value);
  };

  if (!characters) {
    return <h2>...loading</h2>;
  }
  return (
    <main>
      <Header />
      <NavLink to="/">Home</NavLink>
      <NavLink to="/locations">Locations</NavLink>
      <NavLink to="/characters">Characters</NavLink>
      <SearchForm
        characters={characters}
        handleSearchChange={handleSearchChange}
      />
      <Switch>
        <Route path="/characters">
          <CharacterList characters={characters} />
        </Route>
        <Route path="/locations">
          <LocationsList />
        </Route>
        <Route path="/">
          <WelcomePage />
        </Route>
      </Switch>
    </main>
  );
}
