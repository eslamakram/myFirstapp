// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

import SelectedBeast from './components/SelectedBeast ';
import { Component } from 'react';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      showModal:false,
      stateVote: 0,
      title: ' ',
    imageSrc:' ',
  description:' '

    }

  }

  handleClick = (stateVote) => {
    this.setState({stateVote: this.state.stateVote + 1 ,
      stateVote:stateVote})

  }

  handleClose = ()=>{
    this.setState({showModal: false});
  }

  handleOpen = (title, imageSrc, description )=> {
    this.setState(
      {showModal:true,
      title: title,
    imageSrc:imageSrc,
  description:description
}
    )
  }

render(){
  return (


   
    <div>
      <Header/>
      <Main   handleClick = {this.handleClick} handleOpen = {this.handleOpen}/>
      <SelectedBeast showModal   = {this.state.showModal}
                     handleClose = {this.state.handleClose}
                     title = {this.state.title}
                     imageSrc = {this.state.imageSrc}
                     description = {this.state.description}
      />
      <Footer/>
    </div>
    
  );

}
}

export default App;
