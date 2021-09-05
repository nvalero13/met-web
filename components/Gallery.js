import videoloading from './images/MetLoading.webm';
import './css/Gallery.css';
import React from "react";
import { Route, BrowserRouter, Switch, useLocation, Link } from 'react-router-dom';

class InputField extends React.Component {
  constructor() {
    super();

    this.state = {
    filter: "*",
    loaded: false,
    resultnum: null,
    obras: [], 
    selectOption: "",
    department: "",
    pageloaded: true,
    pageloaded1: true,
    departmentoption: "",
    periodoption: "",
    error: false
    }

    this.filter1 = "*"
    this.palabra = ""
    this.limit = 15
    this.page = 1
    this.inicio = 0
    this.final = this.limit
    this.pagnum = null

    this.DoTheFetch = this.DoTheFetch.bind(this);
    this.handleDepCallback = this.handleDepCallback.bind(this);
    this.handlePeriodCallback = this.handlePeriodCallback.bind(this);
    this.handlePeriod = this.handlePeriod.bind(this);
    this.handleDepartment = this.handleDepartment.bind(this);
    
    this.optionChange = this.optionChange.bind(this);
    this.filterChange = this.filterChange.bind(this);
    this.filterSubmit = this.filterSubmit.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.backPage = this.backPage.bind(this);
  }

  componentDidMount() {
    this.handleDepartment()
    this.handlePeriod()
    this.DoTheFetch()
  }

  DoTheFetch() {
    fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?"+this.state.periodoption+this.state.department+this.state.selectOption+"q="+this.state.filter) 
    .then(response => response.json() )
    .then(json => {
      if(json.objectIDs===null) {
        this.setState({
        error: true,
        loaded:true
        });
      } else {
        this.setState({
          error: false,
          loaded: true,
          resultnum: json.total,
          obras: json.objectIDs.slice(this.inicio,this.final)
        })
      }
    });

    console.log(Math.ceil(this.pagnum))
  }

  filterSubmit(event) {
    event.preventDefault();

    this.setState ({
      loaded: false
    })

    if (this.state.filter === "") {
      this.state.filter = "*"
    }
    if (this.state.filter === "*" || this.state.filter === "") {
      this.palabra = "All"

    } else {
      this.palabra = this.state.filter
    }

    this.handleDepartment()
    this.handlePeriod()
    this.DoTheFetch()

  }

  handleDepartment(props) {
    
    if (this.state.pageloaded && this.props.location.state.department !== undefined) {
      this.state.department = "departmentId="+this.props.location.state.department+"&" 
      this.state.departmentId = this.props.location.state.department
    } else if (this.state.pageloaded && this.props.location.state.department === "") {
      this.state.department = ""
    } else if (!this.state.pageloaded && this.state.departmentoption !== "" || this.state.departmentoption !== undefined) {
      this.state.department = "departmentId="+this.state.departmentoption+"&"
      this.state.departmentId = this.state.departmentoption
    } else if (!this.state.pageloaded && this.state.departmentoption === "") {
      this.state.department = ""
    }
  }

  handlePeriod(props) {

    if(this.state.pageloaded1 && this.props.location.state.fecha === undefined || this.props.location.state.fecha === "") {
      this.state.periodoption = ""
    } else if (this.state.pageloaded1 && this.props.location.state.fecha !== undefined) {
      this.state.periodoption = this.props.location.state.fecha
    } 
    
  }

  handleDepCallback = (OptionDepId) => {
    this.setState({departmentoption: OptionDepId})
    this.handleDepartment()

    this.setState ({
      pageloaded: false
    });
  }

  handlePeriodCallback = (OptionPeriod) => {
    this.setState({periodoption: OptionPeriod})
    this.handlePeriod()

    this.setState ({
      pageloaded1: false
    });

  }
  
  filterChange(event) {

    event.preventDefault();

    this.filter1 = event.target.value
    
    this.setState ({
      filter: this.filter1
    })
  }

  optionChange(event) {
    
    event.preventDefault();

    if (event.target.value === "Title") {
     
        this.state.selectOption = "title=true&"
      
    } else if (event.target.value === "Artist" || event.target.value === "Culture") {
     
        this.state.selectOption = "artistOrCulture=true&"
   
    } else {

      this.state.selectOption = ""
      
    }
    
  }

  nextPage() {

    if (this.final >= this.state.resultnum) {
      
    } else {
      
    this.page = this.page + 1

    this.inicio = this.inicio + this.limit
      if (this.final+this.limit >= this.state.resultnum) {
      this.final = this.state.resultnum
      } else {
      this.final = this.inicio + this.limit
    }
    
    }

    this.DoTheFetch()
   
  }

  backPage() {

    if (this.page === 1) {
      
    this.inicio = 0
    this.final = this.limit
    
    } else {

    this.page = this.page - 1

    this.inicio = this.inicio - this.limit
    this.final = this.inicio + this.limit

    }

    this.DoTheFetch()

    
  }

  render() {
    this.pagnum = this.state.resultnum/this.limit

    let galeria = ""
    if (this.state.loaded && this.state.error) {
      galeria = <div className="Error">No results</div>;
    } 
    
    if (this.state.loaded && !this.state.error) {
      galeria = <div className="Galeria">  
      {this.state.obras.map((obras,index) => (
      <Link key={index} to={{pathname: "/detalle", state: {department: this.state.departmentId, fecha: this.state.periodoption, id: obras}}}>
        <Obra key={index} obra={obras} /> 
      </Link>
      ))
    }
      </div>
    }
    
    if (!this.state.loaded) {
        galeria = <Loading />
    }

    return (
  <div>
    <div className="TextDiv">
      <div className="InputDiv">
              <h1 className="Guapo"> Search the Collection </h1>
              <form onSubmit={this.filterSubmit}>
              <input type="text" className="InputText" onChange={this.filterChange} placeholder="Search for Artist, Culture, Title, etc."></input>
              <select className="SelectButton" onChange={this.optionChange}>
                <option value="">Select</option>
                <option value="Title">Title</option>
                <option value="Artist">Artist</option>
                <option value="Culture">Culture</option>
              </select>
              <input type="reset" className="BorraButton" value="X"></input>
              <input type="submit" className="BuscaButton" value="Search" ></input>
              <div className="Pagination">
              <button className="Pages" onClick={this.backPage}>{"<"}</button>
              <span className="PagesNum">{this.page}/{Math.ceil(this.pagnum)}</span>
              <button className="Pages" onClick={this.nextPage}>{">"}</button>
              </div>
              <div className="Filtros">
                <Departments location={this.props.location} parentCallback = {this.handleDepCallback}/>
                <Periods location={this.props.location} parentCallback = {this.handlePeriodCallback}/>
              </div>
              </form>  
              
              {this.state.loaded && !this.state.error ? (
                <div className="Results">Showing ({this.inicio}-{this.final}) from {this.state.resultnum} results for <i>{this.palabra}</i></div>
                  ) : (
                null
               ) 
              }

      </div>
    
    </div>
    {galeria}
    

  </div>
    );
  }

}

class Obra extends React.Component {
  constructor(props) {
    super();
        this.state = ({
            objectinfo: {}
        })
  }
  
  componentDidMount(props) {
    const idObra = this.props.obra;
    fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/"+idObra) 
        .then(response => response.json() )
          .then(json => {
              this.setState ({
                objectinfo: json
              })
        })
  }

  componentWillUnmount() {
    this.state = ({
      objectinfo: {}
    })
  }

  render() {
    
    let info = this.state.objectinfo;

  
      return (
      <div className="Container">
      <img className="imgGaleria" src={info.primaryImage}></img>
        <div className="Overlay">
          <div className="OverlayText">
            <div className="TitleText">
              {info.title}
            </div>
            <div className="ArtistText">
              {info.artistDisplayName}
            </div>
          </div>
          
        
        </div>
      </div>
    );  
  
}
}

class Departments extends React.Component {
  constructor(props) {
    super();
        this.state = ({
            departmentslist: [],
            depId: '',
            pageloaded: true
        })
      this.handleDepOption = this.handleDepOption.bind(this);
  }

  handleDepOption(event) {
    
    this.setState ({
      depId: event.target.value,
      pageloaded: false
    }) 
    this.props.parentCallback(event.target.value);
  }
  
  componentDidMount(props) {
    fetch("https://collectionapi.metmuseum.org/public/collection/v1/departments") 
        .then(response => response.json() )
          .then(json => {
            
              this.setState ({
                departmentslist: json.departments,
                
              })
        })

      }
   
  render() {
    
    let info = this.state.departmentslist;

    

    return (
      
      <div className="FiltroDepartments">
      {this.state.pageloaded ? (
        <select value={this.props.location.state.department} id="SelectDept" className="SelectDepartment" onChange={this.handleDepOption}>
          <option value="">Departments</option>
            {info.map((depId,index) => (
          <option className="Option" key={index} value={depId.departmentId}>{depId.displayName}</option>
        ))
      }
      </select>
      ) : (
        <select id="SelectDept" className="SelectDepartment" onChange={this.handleDepOption}>
          <option value="">Departments</option>
            {info.map((depId,index) => (
        <option className="Option" key={index} value={depId.departmentId}>{depId.displayName}</option>
        ))
      }
      </select>
      )}
      </div>
    );  
    
  }
}

class Periods extends React.Component {
  constructor(props) {
    super();
        this.state = ({
            loaded1: true
        })
      this.handlePeriodOption = this.handlePeriodOption.bind(this);
  }

  handlePeriodOption(event) {  
    this.props.parentCallback(event.target.value);
    console.log("Valor:"+event.target.value)
    this.setState({
      loaded1: false
    })
  }
  
  render() {
    return (
      
      <div className="FiltroTime">
        {this.state.loaded1 ? (
        <select value={this.props.location.state.fecha} className="SelectTime" onChange={this.handlePeriodOption}>
        <option value="">Period</option>
        <option value="dateBegin=-8000&dateEnd=-2000&">8000 B.C. to 2000 B.C</option>
        <option value="dateBegin=-2000&dateEnd=-1000&">2000 B.C. to 1000 B.C.</option>
        <option value="dateBegin=-1000&dateEnd=1&">1000 B.C. to 1 A.D.</option>
        <option value="dateBegin=1&dateEnd=500&">1 A.D. to 500 A.D.</option>
        <option value="dateBegin=500&dateEnd=1000&">500 A.D. to 1000 A.D.</option>
        <option value="dateBegin=1000&dateEnd=1400&">1000 A.D. to 1400 A.D.</option>
        <option value="dateBegin=1400&dateEnd=1600&">1400 A.D. to 1600 A.D.</option>
        <option value="dateBegin=1600&dateEnd=1800&">1600 A.D. to 1800 A.D.</option>
        <option value="dateBegin=1800&dateEnd=1900&">1800 A.D. to 1900 A.D.</option>
        <option value="dateBegin=1900&dateEnd=2020&">1900 A.D. to Present</option>
      </select>
        ):(
        <select className="SelectTime" onChange={this.handlePeriodOption}>
        <option value="">Period</option>
        <option value="dateBegin=-8000&dateEnd=-2000&">8000 B.C. to 2000 B.C</option>
        <option value="dateBegin=-2000&dateEnd=-1000&">2000 B.C. to 1000 B.C.</option>
        <option value="dateBegin=-1000&dateEnd=1&">1000 B.C. to 1 A.D.</option>
        <option value="dateBegin=1&dateEnd=500&">1 A.D. to 500 A.D.</option>
        <option value="dateBegin=500&dateEnd=1000&">500 A.D. to 1000 A.D.</option>
        <option value="dateBegin=1000&dateEnd=1400&">1000 A.D. to 1400 A.D.</option>
        <option value="dateBegin=1400&dateEnd=1600&">1400 A.D. to 1600 A.D.</option>
        <option value="dateBegin=1600&dateEnd=1800&">1600 A.D. to 1800 A.D.</option>
        <option value="dateBegin=1800&dateEnd=1900&">1800 A.D. to 1900 A.D.</option>
        <option value="dateBegin=1900&dateEnd=2020&">1900 A.D. to Present</option>
      </select>
        )
        } 
    </div>
    );  
    
  }
}

class Loading extends React.Component {
  render() {
    return (
      <div className="LoadingDiv">
        <video loop autoPlay className="Loading" width="320" height="320">
        <source src={videoloading} type="video/webm"> 
        </source>
        </video>
      </div>
    );
  }
}

class Base extends React.Component {

  render(props) {
    
    return (
    
      <InputField location = {this.props.location} />     

    );
  }
}


function Gallery() {
  
  let location = useLocation()  

  return (
    <div>
      <Base location={location} />
    </div>
  );
}

export default Gallery;
