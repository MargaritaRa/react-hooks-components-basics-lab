import React from "react";

function NavBar(props) {
  return (
    <nav>
      <a href="#home">{props.link}</a>
      {props.children}
    </nav>
  );
}

function Home(props) {
  return (
    <div id="home">
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
}

function About(){
  return(
    <div id="about">
      <h2>About</h2>
    </div>
  )
}



function App() {
  return (
    <div>
      <NavBar link="I'm a link!"/>
      {/* add the <Home> component here */}
      <Home title="Home"/>
      {/* add your <About> component here */}
      <About />
    </div>
  );
}

export default App;
