import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {updateCity} from './../../ducks/reducer';

class WizardTwo extends Component {
    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">
            
                <p>In what city will the property be located?</p><br />
                    
                        <input placeholder="city name" type="text" onChange={this.props.updateCity}/>
                
                    <Link to="/wThree"><button className="wTwo-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

function stateToProps(reduxState){
    return{
        city: reduxState.city
    }
}

const DispatchToProps = {
    updateCity
}

export default connect(stateToProps, DispatchToProps)(WizardTwo);