import React from "react";

export class Contact extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {

    	const view = (
    		<div id="wrap">
	    		<div className="item">
	    			<div className="form-group">
					  <label for="usr">Name:</label>
					  <input type="text" class="form-control" id="usr"/>
					</div>
					<div className="form-group">
					  <label for="usr">Last Name:</label>
					  <input type="text" class="form-control" id="usr"/>
					</div>
					<div className="form-group">
					  <label for="usr">Email:</label>
					  <input type="text" class="form-control" id="usr"/>
					</div>
					<div className="form-group">
					  <label for="comment">Message:</label>
					  <textarea class="form-control" rows="5" id="comment"></textarea>
					</div>
					<button type="button" class="btn btn-primary">Send</button>
	    		</div>
    		</div>
    		);

        return view;
    }
}


