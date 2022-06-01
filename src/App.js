import React from "react";
import Header from "./Component/Header";
import Carousel from "./Component/Carousel/index";
import Footer from "./Component/Footer/index";
import {Container} from "./Component/Container";
import BoxList from "./Component/BoxList";
import data from "./data.json"

class App extends React.Component {
 render(){
  return (
    <div>
      <Header isSearchPanel />
      <Carousel />
      <Container>
      <BoxList 
      data={data}
      />
      </Container>
      <Footer />
    </div>
  );
 }
}

export default App;
