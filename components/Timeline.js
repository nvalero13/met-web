import './css/Timeline.css';
import React from "react";
import Logo from './images/LogoWhite.png';
import {Link} from 'react-router-dom';

class Timeline extends React.Component {
    render() {
    
    return(
        
        <div className="main-container-timeline">
             <Link to="/"><div className="DivLogo"><img className="LogoTimeline" src={Logo}></img></div></Link>
        <div className="container_timeline">
        <hr className="timeline"></hr>

                <Imagenes />
            
            <section id="era1" className="era1">
                <div className="eras">
                    <h1  className="h1_time">8000-2000 b.c.</h1>
                    <h3 className="Subtitle_eras">The babysteps of human arts. </h3>
                    <p className="Description_eras">Go back as far as our collections goes, explore artpieces from the Ancient Egypt to the oriental Asia. There's even some hidden jems found in South America during that time.</p> 
                    <Link to={{pathname: "/gallery", state: {department: "", fecha: "dateBegin=-8000&dateEnd=-2000&"}}}><button className="GoButton">Take me there <span className="GoFlecha">➜</span></button></Link>
                </div>
            </section>
            
            <section id="era2" className="era2">
                <div className="eras">
                    <h1 className="h1_time">2000-1000 b.c.</h1>
                    <h3 className="Subtitle_eras">The age of bronze and silver. </h3>
                    <p className="Description_eras">Precious metals such as silver, gold, and tin are getting attention as tools and decorative elements. Explore how differently each region used those materials expressing their art.  </p>
                    <Link to={{pathname: "/gallery", state: {department: "", fecha: "dateBegin=-2000&dateEnd=-1000&"}}}><button className="GoButton">Take me there <span className="GoFlecha">➜</span></button></Link>
                </div>

             
            </section>
            
            <section id="era3" className="era3">
                <div className="eras">
                    <h1  className="h1_time">1000-1 b.c.</h1>
                    <h3 className="Subtitle_eras">Art on the move. </h3>
                    <p className="Description_eras">The first millennium B.C. begins in a period of disruption and decentralization: new states form and regroup. Thus we have evidence of spread all over the world, travel to Mexico, Agypt, China and Ancient Greece.</p>
                    <Link to={{pathname: "/gallery", state: {department: "", fecha: "dateBegin=-1000&dateEnd=1&"}}}><button className="GoButton">Take me there <span className="GoFlecha">➜</span></button></Link>
                </div>
                
            </section>
            
            <section id="era4" className="era4">
                <div className="eras">
                    <h1  className="h1_time">1-500 a.d.</h1>
                    <h3 className="Subtitle_eras">The roman rule and birth of the Christian church. </h3>
                    <p className="Description_eras">By the beginning of the first millennium A.D., Rome dominates the Balkans. The Greek culture focal point attracts all the regions around. Christian Church is born in Alexandria. </p> 
                    <Link to={{pathname: "/gallery", state: {department: "", fecha: "dateBegin=1&dateEnd=500&"}}}><button className="GoButton">Take me there <span className="GoFlecha">➜</span></button></Link>
                </div>
                
            </section>
            
            <section id="era5" className="era5">
                <div className="eras">
                    <h1  className="h1_time">500-1000 a.d.</h1>
                    <h3 className="Subtitle_eras">The highness of dynasties. </h3>
                    <p className="Description_eras">All over Europe different dynasties are born and we keep the marvelous decorative items made for thee. The introduction of Buddhism in the sixth century causes momentous changes amounting to a fundamentally different way of life.</p>
                    <Link to={{pathname: "/gallery", state: {department: "", fecha: "dateBegin=500&dateEnd=1000&"}}}><button className="GoButton">Take me there <span className="GoFlecha">➜</span></button></Link>
                </div>
                
            </section>
            
            <section id="era6" className="era6">
                <div className="eras">
                    <h1  className="h1_time">1000-1400 a.d.</h1>
                    <h3 className="Subtitle_eras">The Middle ages.</h3>
                    <p className="Description_eras">The emperor and the pope, as the leading patrons of the arts in the "Dark Ages". Art produced during this time was centered around the Church. We also recommend to explore the beautiful chinesse landscapes .</p>
                    <Link to={{pathname: "/gallery", state: {department: "", fecha: "dateBegin=1000&dateEnd=1400&"}}}><button className="GoButton">Take me there <span className="GoFlecha">➜</span></button></Link>
                </div>
                
            </section>
            
            <section id="era7" className="era7">
                <div className="eras">
                    <h1  className="h1_time">1400-1600 a.d.</h1>
                    <h3 className="Subtitle_eras">La Renaissance. </h3>
                    <p className="Description_eras">In the west, artwork throughout the Renaissance was characterized by realism, attention to detail, and precise study of human anatomy. The fifteenth and sixteenth centuries are also the most turbulent period in Japanese history,leaving behind raw masterpieces.</p> 
                    <Link to={{pathname: "/gallery", state: {department: "", fecha: "dateBegin=1400&dateEnd=1600&"}}}><button className="GoButton">Take me there <span className="GoFlecha">➜</span></button></Link>
                </div>
                
            </section>
            
            <section id="era8" className="era8">
                <div className="eras">
                    <h1  className="h1_time">1600-1800 a.d.</h1>
                    <h3 className="Subtitle_eras">Contemporary social awakening. </h3>
                    <p className="Description_eras">After centuries of rulers and reigns full of delightful art around them, the Baroque style is born, followed by the Rococo, Neoclassicism and Romanticism. All sorts of the social acknowledgment and awakening of the westerns turn into art. </p> 
                    <Link to={{pathname: "/gallery", state: {department: "", fecha: "dateBegin=1600&dateEnd=1800&"}}}><button className="GoButton">Take me there <span className="GoFlecha">➜</span></button></Link>
                </div>
                
            </section>
            
            <section id="era9" className="era9">
                <div className="eras">
                    <h1  className="h1_time">1800-1900 a.d.</h1>
                    <h3 className="Subtitle_eras">The Modern Arts emerge. </h3>
                    <p className="Description_eras">The fist photographies are taken, and a need to represent our day-by-day increases. We begin with Realism, going through Art Nouveau to Impressionism, Fauvism and Expressionism, such as Van Gogh's art.</p>
                    <Link to={{pathname: "/gallery", state: {department: "", fecha: "dateBegin=1800&dateEnd=1900&"}}}><button className="GoButton">Take me there <span className="GoFlecha">➜</span></button></Link>
                </div>
                
            </section>
            
            <section id="era10" className="era10">
                <div className="eras">
                    <h1  className="h1_time">1900-present a.d.</h1>
                    <h3 className="Subtitle_eras">The birth of Contemporary Arts and our current art. </h3>
                    <p className="Description_eras">Industrialization, urbanization, modernization, globalization and digitalization. There's so much to discover and yet to be created. Do you want to take a look?</p>
                    <Link to={{pathname: "/gallery", state: {department: "", fecha: "dateBegin=1900&dateEnd=2020&"}}}><button className="GoButton">Take me there <span className="GoFlecha">➜</span></button></Link>
                </div>
                
            </section>

        </div>
        
        
        <div className="nav_Timeline">
            <div className="ul_first">
                <a className="year">8000 b.c.</a>
                <button  className="btn_era" onClick= {(e) => {e.preventDefault(); window.location.href='#era1';}}></button>
                <a  className="year">2000 b.c.</a>
                <button  className="btn_era" onClick= {(e) => {e.preventDefault(); window.location.href='#era2';}}></button>
                <a  className="year">1000 b.c.</a>
                <button className="btn_era" onClick= {(e) => {e.preventDefault(); window.location.href='#era3';}}></button>
                <a  className="year">1 a.d.</a>
                <button className="btn_era" onClick= {(e) => {e.preventDefault(); window.location.href='#era4';}}></button>
                <a  className="year">500 a.d.</a>
                <button className="btn_era" onClick= {(e) => {e.preventDefault(); window.location.href='#era5';}}></button>
                <a  className="year">1000 a.d.</a>
                <button className="btn_era" onClick= {(e) => {e.preventDefault(); window.location.href='#era6';}}></button>
                <a  className="year">1400 a.d.</a>
                <button className="btn_era" onClick= {(e) => {e.preventDefault(); window.location.href='#era7';}}></button>
                 <a  className="year">1600 a.d.</a>
                <button className="btn_era" onClick= {(e) => {e.preventDefault(); window.location.href='#era8';}}></button>
                 <a  className="year">1800 a.d.</a>
                <button className="btn_era" onClick= {(e) => {e.preventDefault(); window.location.href='#era9';}}></button>
                 <a  className="year">1900 a.d.</a>
                <button className="btn_era" onClick= {(e) => {e.preventDefault(); window.location.href='#era10';}}></button>
                 <a  className="year">PRESENT</a>
               
            </div>

        </div>
        
     </div>
    

    )
        
    }    
}

class Imagenes extends React.Component {
    constructor() {
        super();

        this.state = ({
            eras: [{begin: -8000, final: -2000},{begin: -2000, final: -1000},{begin: -1000, final: 1},{begin: 1, final: 500},{begin: 500, final: 1000},{begin: 1000, final: 1400},{begin: 1400, final: 1600},{begin: 1600, final: 1800},{begin: 1800, final: 1900},{begin: 1900, final: 2020}],
            ides: [],
            photos: [],
            loaded: false
        })
        this.contador = 0
    }
    
    componentDidMount() {

        {this.state.eras.map((era,index) => ( 
        
        fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&isHighlight=true&dateBegin="+era.begin+"&dateEnd="+era.final+"&q=*") 
        .then(response => response.json() )
        .then(json => {

            let id = json.objectIDs[30]

            let fecha = era.begin
            if (json.objectIDs.length < 30) {
                id = json.objectIDs[20] 
            } 

            this.state.photos.push({id, fecha})

            id = json.objectIDs[16]
    
            this.state.photos.push({id, fecha})

            id = json.objectIDs[18]

            this.state.photos.push({id, fecha})

            this.contador++

            console.log("Index: "+index)
            console.log("Contador: "+this.contador)
            

            if(this.contador === this.state.eras.length) {
                this.setState ({
                    loaded: true
                });
            }
           
        })  
            
        ))
        
        }
        
    }
    
    render() {        
        console.log(this.state.photos)
        return !this.state.loaded ? (
            false
        ) : ( 
            <div>
            {this.state.photos.sort((a, b) => a.fecha - b.fecha).map((Obra,index) => (
                    <Imagen key={index} num={index} obra={Obra} /> 
                ))  
            }
            </div>
        );

    }
}

class Imagen extends React.Component {
    constructor(props){
        super(props);

        this.state = ({
            img: "",
            loaded: false
        })

        
        this.contador = this.props.num
        this.class = "imagen"+(this.contador+1)
    }
                    
    componentDidMount(props) {      

                    fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/"+this.props.obra.id)
                    .then(response => response.json() )
                    .then(json => {
                        this.setState({
                            img: json.primaryImage,
                            loaded: true
                        })

                })
    }       

    render() {
        return (
            <img className={this.class} src={this.state.img} />
        );
    }                
}




function Base() {
    return (
        <div>
            <Timeline />
        </div>
    )
}

export default Base


