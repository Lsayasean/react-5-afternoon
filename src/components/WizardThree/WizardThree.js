import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {updateProp} from './../../ducks/reducer';

class WizardThree extends Component {
    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">
                   <p> What property are you looking to use the loan on? </p><br />
                    <div className="row">
                        <Link to="/wFour"><button value="primaryHome" onClick={this.props.updateProp}>Primary Home</button></Link>
                        <Link to="/wFour"><button value="rentalProperty" onClick={this.props.updateProp}>Rental Property</button></Link>
                        <Link to="/wFour"><button value="secondaryHome" onClick={this.props.updateProp}>Secondary Home</button></Link>
                    </div>
                </div>           
            </div>
        )
    }
}

function stateToProps(reduxState){
    return{
        propToBeUsedOn: reduxState.propToBeUsedOn
    }
}

const DispatchToProps = {
    updateProp
}

export default connect(stateToProps, DispatchToProps)(WizardThree); 
