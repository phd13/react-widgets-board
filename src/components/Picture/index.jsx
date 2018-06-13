import React, { Component } from 'react';
import './picture.scss';

export class Picture extends Component {
    constructor() {
        super();

        this.state = {
            url: '',
            fetching: false
        }

        this.getRandomImageByURL = this.getRandomImageByURL.bind(this);
    }

    componentDidMount() {
        this.getRandomImageByURL();
    }

    getRandomImageByURL() {
        this.setState({ 
            fetching: true 
        })
        const url = 'https://picsum.photos/300/200?random';
        fetch(url, { mode: 'cors' })
          .then((response) => {
            this.setState({ 
                url: response.url, 
                fetching: false 
            })
          })
      }

    render() {
        const {url, fetching} = this.state; 
        return fetching
        ? <div className="loader"></div>
        : <a href="#" onClick={this.getRandomImageByURL}><img src={url} id="image" alt="Placeholder picture"/></a>;
    }
}
