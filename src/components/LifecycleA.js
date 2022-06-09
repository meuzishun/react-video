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

  shouldComponentUpdate() {
    console.log('LifecycleA shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('LifecycleA getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('LifecycleA componentDidUpdate');
  }

  changeState = () => {
    this.setState({
      name: 'Codevolution',
    });
  };

  render() {
    console.log('LifecycleA render');
    return (
      <div>
        <div>LifeCycle A</div>
        <button onClick={this.changeState}>Change state</button>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
