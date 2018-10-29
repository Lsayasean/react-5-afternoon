import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {ad1,ad2,ad3} from './../../ducks/reducer';

class WizardNine extends Component {

    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>What is your address?</p> <br />

                    <input type="text" placeholder="Line One" onChange={(e) => this.props.ad1(e.target.value)}/>
                    <input type="text" placeholder="Line Two" onChange={(e) => this.props.ad2(e.target.value)}/>
                    <input type="text" placeholder="Line Three" onChange={(e) => this.props.ad3(e.target.value)}/>
                
                    
                    <Link to="/wTen"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

function stateToProps(state){
    return{
        addressOne: state.addressOne,
        addressTwo: state.addressTwo,
        addressThree: state.addressThree
    }
}

const DispatchToProps = {
    ad1,ad2,ad3
}

export default connect(stateToProps, DispatchToProps)(WizardNine);