import React from 'react'
import coverImage from "../../assets/cover/cover-images.jpg";

function About() {

  return (
    <section className="my-30" >
      <h1 id="about">About Me!</h1>
      <img src={coverImage} className="my-40" style={{ width: "95%" }} alt="cover" />
      <div className="my-5">
        <p>
          Welcome to my Portfolio. 
      </p>
      </div>
    </section>
  )
}

export default About