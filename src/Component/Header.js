import React from "react";
import {Nav} from "./Nav/index"

class Header extends React.Component{

    constructor(props) {
        super(props)
    }
    render(){
        return(
            <header>
            <Nav isSearchPanel = {this.props.isSearchPanel} />
          </header>
        )
    }
}

export default Header;