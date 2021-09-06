import { React, Component } from "react";
import Heders from "./components/Heders";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends Component() {
  render() {
    return (
      <>
        <Heders />
        <Main />
        <Footer />
      </>
    )
  }
}
export default App