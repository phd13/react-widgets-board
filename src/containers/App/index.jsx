import React, { Component } from 'react';
import '../../styles/main.scss';
import { Button } from './../../components/Button';
import { Input } from '../../components/Input';
import { Picture } from '../../components/Picture';

class App extends Component {

  validateInput() {
    const input = document.getElementById('mainInput');
    const regexp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const notValid = 'not-valid';
    let value = input.value;
    if (value && !regexp.test(value)) {
      input.classList.add(notValid);
    } else {
      input.classList.remove(notValid)
    }
  }

  render() {
    return (
      <section className="container">
      <Button />
      <Input validate={this.validateInput} placeholder="Place any email here to validate..."/>
      <Picture />
      </section>
    );
  }
}

export default App;