// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import BeastsData from './data.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import SelectedBeast from './components/SelectedBeast ';
import FormHorns from './components/FormHorns';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title: ' ',
      imageSrc: ' ',
      description: ' ',
      data: BeastsData,

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

  handleSelectForm = (event) => {
    let value = event.target.value;

    if (value) {
      let filteredData = this.state.data.filter(Beast => {
        return Beast.horns == value;
      })
      this.setState({ data: filteredData });


    } else {
      this.setState({ data: BeastsData });
    }


  }








  render() {
    return (



      <div>
        <Header />
        <FormHorns handleSelectForm={this.handleSelectForm} />
        <Main BeastsData={this.state.data} handleOpen={this.handleOpen} />
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
