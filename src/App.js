import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductContainer from "./containers/ProductContainer";

class App extends Component {
  render() {
    return (
      <div className="hidden-sn animated deep-purple-skin">
        <Header />
        <main id="mainContainer">
            <ProductContainer/>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
