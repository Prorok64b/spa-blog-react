import React from "react";
import { IndexLink, Link } from "react-router";

export default class NavPanel extends React.Component {

    constructor(props) {
        super(props);
        this.displayName = '';
    }

    render() {

	    const view = (
		  	<nav className="navbar navbar-inverse">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <Link className="navbar-brand" to="home">Vadym Filipov</Link>
			    </div>
			    <ul className="nav navbar-nav">
			      <li><Link to="home">Home</Link></li>
			      <li><Link to="articles">Articles</Link></li>
			      <li><Link to="contact">Contact</Link></li>
			    </ul>
			  </div>
			</nav>
		);
		
    	return view;
    }
}
