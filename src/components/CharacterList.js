import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";


export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect

  console.log("I am", props);

  return (
    <section className="character-list">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      {props.characters.map(character => {
        return (
          <CharacterCard character={character} />
          // <SearchForm handleSearchChange={handleSearchChange}
        );
      })}
    </section>
  );
}
