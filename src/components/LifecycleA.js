import React, { Component } from 'react';
import LifeCycleB from './LifecycleB';

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Vishwas',
    };
    console.log('LifecycleA constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('LifeCycleA componentDidMount');
  }

  render() {
    console.log('LifecycleA render');
    return (
      <div>
        <div>LifeCycle A</div>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
