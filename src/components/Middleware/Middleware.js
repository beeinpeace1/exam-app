import React, { Component } from 'react';
import './Middleware.css';

const Aux = ( props ) => {
    return (
        <div className="container aux-holder">
            <div className="header">
                <span>{props.title}</span>
            </div>
            <div className="questions">
                {props.questions}
            </div>
            <button className="btn waves-effect waves-light" type="submit" name="action" onClick={(e)=>{
                props.handleSubmit(e);
            }}>Submit
            </button>
        </div>
    );
}

export default Aux;