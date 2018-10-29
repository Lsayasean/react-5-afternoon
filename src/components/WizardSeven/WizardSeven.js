import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {updateCredit} from './../../ducks/reducer';

class WizardSeven extends Component {

    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>Estimate your credit score</p> <br />
                    
                    <div className="row">
                        <Link to="/wEight"><button onClick={this.props.updateCredit}>Excellent</button></Link>
                        <Link to="/wEight"><button onClick={this.props.updateCredit}>Good</button></Link>
                        <Link to="/wEight"><button onClick={this.props.updateCredit}>Fair</button></Link>
                        <Link to="/wEight"><button onClick={this.props.updateCredit}>Poor</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function stateToProps(state){
    return{
        credit: state.credit
    }
}

const DispatchToProps = {
    updateCredit
}

export default connect(stateToProps, DispatchToProps)(WizardSeven);