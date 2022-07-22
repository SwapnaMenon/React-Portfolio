import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact-Me';



function App() {
  return (
    <div>
      <Nav>
      </Nav>
      <main>
        <About></About>
        <ContactForm></ContactForm>
      </main>
    </div>
);
}

export default App;