import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {updateFound} from './../../ducks/reducer'

class WizardFour extends Component {
    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">            
                    <p>Have you already found your new home?</p> <br />
                    
                    <div className="row">
                        <Link to="/wFive"><button onClick={(e) => this.props.updateFound(true)}>Yes</button></Link>
                        <Link to="/wFive"><button onClick={(e) => this.props.updateFound(false)}>No </button></Link>  
                    </div>         
                </div>
            </div>
        )
    }
}

function stateToProps(state){
    return {
        found: state.found
    }
}

const DispatchToProps = {
    updateFound
}

export default connect(stateToProps, DispatchToProps)(WizardFour);