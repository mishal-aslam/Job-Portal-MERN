import React, { useState } from "react";
import Banner from '../components/Banner'

const Home = () => {
  const [query, setQuery] = useState("");
  const handleInputchange = (event) => {
    setQuery(event.target.value);
  }
  console.log(query )
  return (
  <div>
    <Banner query={query} handleInputchange={handleInputchange} />
  </div>
  )
}

export default Home