import React from 'react';
import ReactDOM from 'react-dom';
import ComponentC from './ComponentC';

const ComponentB = () =>
  <div>
    <div>{'Hello, Component B'}</div>
    <ComponentC />
  </div>;

const componentDOM = document.createElement('div');
componentDOM.id = 'componentB';
document.body.appendChild(componentDOM);

ReactDOM.render(<ComponentB />, document.getElementById('componentB'));

export default ComponentB;