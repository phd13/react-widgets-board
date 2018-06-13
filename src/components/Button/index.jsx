import React, { Component } from 'react';
import './button.scss';

export class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetching: false,
      description: 'Click me to see the loader!'
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      fetching: !state.fetching
    }));
    setTimeout(() => {
      this.setState((state) => ({
        fetching: !state.fetching
      }))
    }, 5000)
  }

  render() {
    const { fetching, description } = this.state;
    return fetching
      ? <div className="loader"></div>
      : <button className="button" onClick={this.handleClick}>{description}</button>;
  }

}
