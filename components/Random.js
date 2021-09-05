import './css/Detail.css'; 
import React from "react";
import { Link }from 'react-router-dom';
import Logo from './images/LogoWhite.png';



class BestObras extends React.Component {
    constructor() {
        super();
       
        this.state = ({
            BestArray: []
        })
    }

    componentDidMount() {
        fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&isHighlight=true&q=*") 
        .then(response => response.json() )
          .then(json => {
            this.setState ({
             BestArray: json.objectIDs
            })
        })
    }

    render() {
        return (
            <RandomObra array={this.state.BestArray}/>
        )
    }
}

class RandomObra extends React.Component {

    constructor() {
        super();
       
        this.state = ({
            info: "",
            ObraId: null,
            RandNum: null
        })
    }

    tick(props) {

        this.setState ({
          RandNum: Math.floor(Math.random() * this.props.array.length) + 1,
          ObraId: this.props.array[this.state.RandNum]  
        });

        fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/"+this.state.ObraId) 
        .then(response => response.json() )
          .then(json => {
            this.setState ({
             info: json
            })
        })
        console.log(this.state.ObraId)
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {

        
    let info = this.state.info
    if (this.state.ObraId === null) {
        return (
        <div>
        <Link to="/"><div className="DivLogo"><img className="LogoTimeline" src={Logo}></img></div></Link>
        <div className="RandText">
            <p className="RandTitle">Fate is deciding...</p>
        </div>
        </div>
        )
    } else {
    return (
        <div>
            <div className="RandText">
                <p className="RandTitle">Fate is deciding...</p>
            </div>
        <Link to="/"><div className="DivLogo"><img className="LogoTimeline" src={Logo}></img></div></Link>
        <div className="RandDiv">
            <img className="RandImage" src={info.primaryImage}></img>
        </div>
        <Link to={{pathname: "/detalle", state:{id: this.state.ObraId}}}>
            <div className="GoToDetails">
            <p className="More">Do you want to know more?</p>
            <p className="Go">Go to details<span className="FlechaDetalles"> ➜</span></p>
            </div></Link>
        </div>
    )
    }

    }
}

function Random() {
  
    return (
    <div>
     <BestObras />
    </div>
    );
    
  }

  export default Random;