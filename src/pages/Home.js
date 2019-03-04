import React, { Component } from 'react';
import '../assets/styles/scss/App.scss';
import { Link } from 'react-router-dom'
import Toolbar from '../components/Toolbar';


class Home extends Component {
    render() {
        return (<div className="card-deck">
            <div className="card my-3">
                <img src="http://placehold.it/560x560" class="card-img-top" />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                </div>
            </div>
            <div className="card my-3">
                <img src="http://placehold.it/560x560" class="card-img-top" />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                </div>
            </div>
            <div className="card my-3">
                <img src="http://placehold.it/560x560" class="card-img-top" />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>

                </div>
            </div>
            <div className="card my-3">
                <img src="http://placehold.it/560x560" class="card-img-top" />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>

                </div>
            </div>
            <div className="card my-3">
                <img src="http://placehold.it/560x560" class="card-img-top" />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>

                </div>
            </div>
        </div>
        );
    }
}

export default Home;