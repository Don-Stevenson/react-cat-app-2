import './App.css'
import React, { useState } from "react"

const catFetch = async () => {
  try {
    const cat = await fetch(
      "https://api.thecatapi.com/v1/breeds/search?q=maine%20coon"
    )
    const catJSON = await cat.json()
    console.log(catJSON[0].description)
    return catJSON
  } catch (error) {
    console.error(error)
  }
}

catFetch() // calls and logs to console below

function App() {

  const [cat, setCat] = useState("No Cats")
  console.log("setcat =>", setCat)
  console.log("cat =>", cat)

  return (
    <div className="App">
      <h1> Cat app </h1>
      <h2>-------------</h2>
      <p> {cat} </p>
      <h2> ------------</h2>
    </div>
  )
}

export default App
