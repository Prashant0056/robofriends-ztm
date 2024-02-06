import { render } from "@testing-library/react";
import React, {Component} from "react";

class Test extends Component{
    render(){
        return( 
            <div className="tc f1">
        <h1 >Hello world</h1>
        <p>{this.props.greeting}</p>
        </div>
        )
    }
}

export default Test