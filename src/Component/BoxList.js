import React from "react";
import Card from "./Card/index";

class BoxList extends React.Component {
  render() {
    return (
      <div className="row mt-5">
        {this.props.data.cards.map((user, index) => (
          <Card key={`card-${index}`} user={user} />
        ))}
      </div>
    );
  }
}

export default BoxList;
