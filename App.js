import React from "react";
import './components/css/Home.css';
import Gallery from './components/Gallery.js';
import Map from './components/Mapa.js';
import Timeline from './components/Timeline.js';
import Random from './components/Random.js';
import Detail from './components/Detail.js';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Logo from './components/images/LogoWhite.png';


function App() {
    return ( 
      <div>
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path ="/gallery">
          <Header />
          <Gallery />  
        </Route>
        <Route path ="/map">
          <Header />  
          <Map />
        </Route>
        <Route path ="/timeline">
          <Timeline />
        </Route>
        <Route path ="/random"> 
          <Random />
        </Route>
        <Route path ="/detalle"> 
          <Header />
          <Detail />
        </Route>
      </Switch>
      </BrowserRouter>
      </div>
    );
}

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
          <Link to="/"><img className="NavLogo" src={Logo}></img></Link>
          <div className="NavItems">
            <Link to="/timeline"><div className="NavItem">Timeline</div></Link>
            <Link to="/map"><div className="NavItem">Map</div></Link>
            <Link to="/random"><div className="NavItem">Random</div></Link>
          </div>
      </div>
    );
  }
}

class Home extends React.Component {
  render() {
    return(
      <div className="ContainerHome">

            <div className="Primero">
            <Link to="/timeline">
                <div className="image-container">
                  <div className="TextoMenu">
                    <div className="Title">1.</div>
                    <div className="Subtitle">Feeling nostalgic?</div>
                    <div className="Description">Travel through eras to something. </div>
                    <div className="Flecha"> ➜ </div>
                    <hr className="Barras"></hr>
                  </div>  
                </div>
            </Link>
            </div>

            <div className="Segundo">
            <Link to="/map">
                <div className="image-container2">
                    <div className="Title">2.</div>
                    <div className="Subtitle">Find your new favorite spot.</div>
                    <div className="Description">Choose the artroom you want to explore. </div>
                    <div className="Flecha"> ➜ </div>
                    <hr className="Barras"></hr>
                </div>
            </Link>
            </div>

            <div className="Tercero">
            <Link to="/random">
                <div className="image-container3">
                    <div className="Title">3.</div>
                    <div className="Subtitle">You want us to choose for you?</div>
                    <div className="Description">Let fate decide your next favorite artpiece. </div>
                    <div className="Flecha"> ➜ </div>
                    <hr className="Barras"></hr>
                </div>
            </Link>
            </div> 
            </div>

    );
  }
}

export default App;