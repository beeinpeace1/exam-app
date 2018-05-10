import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="container home-holder">
                <div className="row">
                    <div className="col m3">
                        <div className="card teal darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">MIXED</span>
                            </div>
                            <div className="card-action">
                                <Link to="/mixed" className="btn z-depth-1">Take Test</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col m3">
                        <div className="card teal darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">HTML</span>
                            </div>
                            <div className="card-action">
                                <Link className="btn z-depth-1" to="/html">Take Test</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col m3">
                        <div className="card teal darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">CSS</span>
                            </div>
                            <div className="card-action">
                                <Link className="btn z-depth-1" to="/css">Take Test</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col m3">
                        <div className="card teal darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">JavaScript</span>
                            </div>
                            <div className="card-action">
                                <Link className="btn z-depth-1" to="/js">Take Test</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
