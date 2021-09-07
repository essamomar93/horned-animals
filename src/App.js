import { React, Component } from "react";
import Heders from "./components/Heders";
import Main from "./components/Main";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from "./components/SelectedBeast";
// import HornedBeast from "./components/HornedBeast ";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      src: "",
      title: "",
      description: "",
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
  render() {
    return (
      <>
        <Heders />
        <Main handleOpen={this.handleOpen} />
        {/* <HornedBeast/> */}

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
