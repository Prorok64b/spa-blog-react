import React from "react";

import NavPanel from "./Navigation";
import BottomNav from "./BottomNav";

export class Layout extends React.Component {

	constructor(props) {
        super(props);
        
    }

    render() {

    	const view = (
    		<div className="main" >
        		<NavPanel/>
        		{this.props.children}
        		<BottomNav/>
        	</div>
        	);

        return view;
    }

}