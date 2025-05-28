// Class Component - A counter that increments and decrements when clicking on the "+" and "-" buttons.


import React, {Component} from "react";

class IncrementDecrement extends Component{

    constructor(){
        super();
        this.state={
            number :1
        }

        console.log("Initializig constructor");
        
       
    }

    onClickadd(){

        console.log("Button clicked");
        

        this.setState({ 
                number : this.state.number +1
        })
    }

    onClicksub(){

        console.log("Button clicked");
        

        this.setState({ 
                number : this.state.number -1
        })
    }

    render(){
        return (
            <div>

                <h1>Result number:  {this.state.number}</h1>

                <button onClick={()=> this.onClickadd()} className="mb-2 bg-success text-white">Increse</button>

                <button onClick={()=> this.onClicksub()} className="mb-2 bg-warning text-dark text-danger">Decrease</button>

            </div>
        )
    }
}

export default IncrementDecrement