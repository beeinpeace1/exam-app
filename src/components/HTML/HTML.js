import React, { Component } from 'react';
import './HTML.css';
import AUX from './../Middleware/Middleware';
import sampleData from './../../sample_data.json';
import Question from './../Question/Question';

class HTML extends Component {
    constructor (props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        let localStorageData = JSON.parse(window.sessionStorage.getItem(this.props.match.path)) || {};
        this.state = localStorageData;
    }

    handleChange = (event, questionIndex, optionIndex) => {
        const target = event.target;
        var temp = this.state[questionIndex] || [];
        switch(event.target.type){
            case 'checkbox':
                if(event.target.checked){
                    temp.push(optionIndex)
                } else {
                    temp = temp.filter( o => o !== optionIndex)
                }
            break;
            case 'radio':
                temp = optionIndex
            break;
            case 'textarea':
                temp = event.target.value
            break;
            default:
                console.log(target.type)
        }

        this.setState({
            [questionIndex]: temp
        });

    }
    
    handleSubmit = (event) => {
        window.sessionStorage.setItem(this.props.match.path, JSON.stringify(this.state));
    }

    render() {
        const Questions = sampleData
        .filter(o => o.category === "html")
        .map((q, i) => {
            return <Question key={i} q={q} i={i} handleChange={this.handleChange} init={this.state[i] >= 0 || this.state[i] ? this.state[i] : null}/>
        })

        return (
            <div>
                <AUX title="HTML" questions={Questions} handleSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

export default HTML;