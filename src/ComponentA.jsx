import React from 'react';
import ReactDOM from 'react-dom';

const ComponentA = () => <div>Hello, Component A</div>;

const componentDOM = document.createElement('div');
componentDOM.id = 'componentA';
document.body.appendChild(componentDOM);

ReactDOM.render(<ComponentA />, document.getElementById('componentA'));

export default ComponentA;