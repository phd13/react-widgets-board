import React, { Component } from 'react';
import './picture.scss';

export class Picture extends Component {
    constructor() {
        super();

        this.state = {
            url: ''
        }

        this.getRandomImageByURL = this.getRandomImageByURL.bind(this);
    }

    componentDidMount() {
        this.getRandomImageByURL();
    }

    getRandomImageByURL() {
        const url = 'https://picsum.photos/300/200?random';
        fetch(url, { mode: 'cors' })
          .then((response) => {
            this.setState({ url: response.url })
          })
      }

    render() {
        const {url} = this.state; 
        return <a href="#" onClick={this.getRandomImageByURL}><img src={url} id="image" alt="Placeholder picture"/></a>;
    }
}
