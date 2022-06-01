import React from "react";

class Card extends React.Component {
  render() {
    console.log(this);
    let inlineStyle = {
      width: "16rem",
    };

    return (
      <div className="col-md-3 mr-5">
        <div className="card mb-5" style={inlineStyle}>
          <img
            src={this.props.user.img}
            class="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.user.title}</h5>
            <p className="card-text">
            {this.props.user.content}
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }s
}

export default Card;
