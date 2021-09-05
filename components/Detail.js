import './css/Detail.css'; 
import { Route, BrowserRouter, Switch, useLocation, Link } from 'react-router-dom';
import React from "react";
import Gallery from './Gallery.js';
import Header from '../App'



class Detail extends React.Component {
  constructor() {
    super()

    this.state = ({
      info: {}
    })
  }

  componentDidMount(props) {
    const idObra = this.props.id;
    fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/"+idObra) 
        .then(response => response.json() )
          .then(json => {
            
              this.setState ({
                info: json
              })
        })
  }

  render(props) {

    let info = this.state.info;
    console.log("Department: "+this.props.location.state.department)
    console.log("Fecha: "+this.props.location.state.fecha)

  return (
    <div className="App">
     <Link to={{pathname: "/gallery", state: {department: this.props.location.state.department, fecha: this.props.location.state.fecha}}}><div className="backtogallery"><div className="arrow">➜</div><div className="backtext"> Back to gallery</div></div></Link>
      <div className="detailinfo">
        <div className="imageholder">
        <img className="pieceimage" src={info.primaryImage}></img>
        <p className="portfolio">{info.portfolio}</p>
        </div>
        <div className="pieceinfo">
          <h1 className="piecetitle"> {info.title}</h1>
          <p className="pieceperiod">{info.period}</p>
          <p><b className="piecedepartment">{info.department}</b> <span className="piececountry">{info.country}</span></p>
          <hr className="divider"></hr>
          <p className="artistname"><b>{info.artistSufix} </b>{info.artistDisplayName}</p>
          <p className="artistbio">{info.artistDisplayBio}</p>
          <p className="extrainfo"><b>Medium: </b>{info.medium}</p>
          {info.dimensions === "" ? (
            <p className="extrainfo">{info.dimensions}</p>
          ) : (
            <p className="extrainfo"><b>Dimensions: </b>{info.dimensions}</p>
          )}
          </div>
        <p className="imagerights">{info.rightsAndReproduction}</p>
      </div>
    </div>
    );
  }
}

function Detalle() {
  let location = useLocation()
  console.log(useLocation())
  if (location.state.id) {
    console.log (location.state)
  }
  return(
        <Detail location={location} id={location.state.id}/>
  )
  
}

export default Detalle;
