import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {first, last, email} from './../../ducks/reducer';

class WizardTen extends Component {
    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>What is your name?</p> <br />

                    <input type="text" placeholder="First Name" onChange={(e) => this.props.first(e.target.value)}/>
                    <input type="text" placeholder="Last Name" onChange= {(e) => this.props.last(e.target.value)}/>
                    <input type="text" placeholder="email" onChange={(e) => this.props.email(e.target.value)}/>
                    
                    <Link to="/wEleven"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

function stateToProps(state){
    return{
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email
    }
}

const dispatchToProps = {
    first,last,email
}
export default connect(stateToProps, dispatchToProps)(WizardTen);