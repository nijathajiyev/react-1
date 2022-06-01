import React from "react";
import Card from "./Card/index";

class BoxList extends React.Component {

  
  render() {
    let {data}=this.props;
    return (
      <div className="row mt-5">
        {data.cards.map((user, index) => (
          <Card key={`card-${index}`} user={user} />
          // user={user} evezine {...user}-de yazmaq olar
        ))}
      </div>
    );
  }
}

export default BoxList;
