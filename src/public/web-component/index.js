import reactToWebComponent from 'react-to-webcomponent';
import { MyComponent } from './Component';

const React = require('react');
const ReactDOM = require('react-dom');

const MyComponentWebComponent = reactToWebComponent(
  MyComponent,
  React,
  ReactDOM
);
//@ts-ignore
customElements.define('noted-component', MyComponentWebComponent);
