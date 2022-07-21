import React from 'react'
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {

  return (
    <section className="my-20" >
      <h1 id="about">About Me!</h1>
      <img src={coverImage} className="my-2" style={{ width: "95%" }} alt="cover" />
      <div className="my-5">
        <p>
          Welcome to my Portfolio. 
      </p>
      </div>
    </section>
  )
}

export default About