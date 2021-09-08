// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import BeastsData from './data.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import SelectedBeast from './components/SelectedBeast ';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title: ' ',
      imageSrc: ' ',
      description: ' '

    }

  }

  handleOpen = (title, imageSrc, description) => {
    this.setState(
      {
        showModal: true,
        title: title,
        imageSrc: imageSrc,
        description: description
      }
    )
  }

  

  handleClose = () => {
    this.setState({ showModal: false });
  }

  render() {
    return (



      <div>
        <Header />
        <Main BeastsData={BeastsData} handleOpen={this.handleOpen} />
        <SelectedBeast showModal={this.state.showModal}
          handleClose={this.handleClose}
          title={this.state.title}
          imageSrc={this.state.imageSrc}
          description={this.state.description}
        />
        <Footer />
      </div>

    );

  }
}

export default App;
