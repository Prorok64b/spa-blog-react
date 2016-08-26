import React from "react";


export default class BottomNav extends React.Component {
	
	constructor(props) {
        super(props);
        this.email = 'snitep@yandex.ru';
        this.tel = "+48 883 411 510";
    }

   
    render(){

    	const view = (
	    		<div id="bottomBar">
		    		<nav className="navbar navbar-inverse">
					  <div className="container-fluid">
					   <p>{this.email}</p>
					   <p>{this.tel}</p>
					  </div>
					</nav>
				</div>
			);


    	return view;
    }

}