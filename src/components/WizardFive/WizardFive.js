import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {updateReal} from './../../ducks/reducer';

class WizardFive extends Component {

    render(){
        return(
            <div className="parent-div">
                    <div className="vert-align">    

                    <p>Are you currently working with a real estate agent?</p> <br />
                    <div className="row">
                        <Link to="/wSix"><button onClick={(e) => this.props.updateReal(true)}>Yes</button></Link>
                        <Link to="/wSix"><button onClick={(e) => this.props.updateReal(false)}>No </button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function stateToProps(state){
    return{
        realEstateAgent: state.realEstateAgent
    }
}

const DispatchToProps = {
    updateReal
}

export default connect(stateToProps, DispatchToProps)(WizardFive);