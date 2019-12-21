import React, { useEffect, useState } from "react";
import axios from "axios"
import LocationCard from "./LocationCard";

export default function LocationsList() {
  

  const [location, setLocation] = useState([])

   useEffect(() => {
     
     axios
       .get(`https://rickandmortyapi.com/api/location/`)
       .then(response => {
         console.log("location", response.data.results);
         
         setLocation(response.data.results)

       })
       .catch(error => console.log(error));

     //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
   }, []);

   return(
    <div>
     {location.map(location => {
      // console.log("Weee", location)
      return (
       <LocationCard location={location} />
       
      )
     })}
    </div>
   )

 
}
