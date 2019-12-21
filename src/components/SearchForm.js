import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";

export default function SearchForm(props) {
  // console.log("hello", props);

  return (
    <section className="search-form">
      <label>Search Form</label>
      <form type="text">
        <input onChange={props.handleSearchChange} />
      </form>
    </section>
  );
}
