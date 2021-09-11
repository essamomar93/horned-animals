import { React, Component } from "react";
import Heders from "./components/Heders";
import Main from "./components/Main";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from "./components/SelectedBeast";
import Form from "./components/Form";
import Data from './components/data.json'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      src: "",
      title: "",
      description: "",
      selectedItem: 0,
      item:[], 

    }
  }
  handleClose = () => {
    this.setState({
      showModal: false
    })
  }
  handleOpen = (src, title, description) => {
    this.setState({
      showModal: true,
      src: src,
      title: title,
      description: description,

    })
  }

  handleSelect = (e) => {
    e.preventDefault();
    let selectedItem = parseInt(e.target.value);
    this.setState({
      selectedItem: selectedItem
    });
    this.filterFun(selectedItem) 
  }

  filterFun = (hornsNum) => {
    let filterHorns = Data.filter((element) => {
      return element.horns === hornsNum
      
    })
    this.setState({
      item:filterHorns
    })
  }

  render() {
    return (
      <>
        <Heders />
        <Form
          handleSelect={this.handleSelect}
        />
        <Main
        item={this.state.item}
        handleOpen={this.handleOpen}
        />
        <SelectedBeast
          handleClose={this.handleClose}
          showModal={this.state.showModal}
          src={this.state.src}
          description={this.state.description}
          title={this.state.title}
        />
        <Footer />
      </>
    )
  }
}
export default App
