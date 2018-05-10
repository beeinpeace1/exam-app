import React, { Component } from 'react';
import './Question.css';

const InputHolderRadio = ({ o, qi, handleChange, opi, init}) => {
    return (
        <div className="inputHolder">
            <label>
                <input type="radio" className="with-gap" name={"options" + qi}
                    onChange={(e) => {
                        handleChange(e, qi, opi);
                    }}
                    value={opi} 
                    defaultChecked= {init === opi ? 'checked': ''}/>
                <span>{o}</span>
            </label>
        </div>
    )
}

const InputHolderCheckbox = ({ o, qi, handleChange, opi, init}) => {
    return (
        <div className="inputHolder">
            <label>
                <input type="checkbox" className="filled-in" name={"options" + qi}
                    onChange={(e) => {
                        handleChange(e, qi, opi);
                    }}
                    value={opi}
                    defaultChecked= { init && init.indexOf(opi) >= 0 ? 'checked': ''} />
                <span>{o}</span>
            </label>
        </div>
    )
}

const Question = (props) => {
    let { type } = props.q || null;
    let { options } = props.q || [];

    const Options = (type === 'radio') ? options.map((o, i) => {
        return <InputHolderRadio key={i} o={o} qi={props.i} opi={i} handleChange={props.handleChange} init={props.init} />
    }) : (type === 'checkbox') ? options.map((o, i) => {
        return <InputHolderCheckbox key={i} o={o} qi={props.i} opi={i} handleChange={props.handleChange} init={props.init} />
    }) : (type == 'text') ?
                <div className="input-field">
                    <textarea value={props.init || ''} placeholder="Your answer here" className="materialize-textarea" onChange={(e) => {
                        props.handleChange(e, props.i, null);
                    }}></textarea>
                </div>
                : '';

    return (
        <div className="question-holder">
            <div className="question-title">
                <span>{props.i + 1}. {props.q.question}</span>
                <br />
            </div>
            <div className="question-options">
                {Options}
                {type == 'checkbox' ? <div><small className="teal-text"> Select all correct answers </small></div> : ''}
            </div>
        </div>
    );
}

export default Question;