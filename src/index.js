import React from 'react';
import ReactDOM from 'react-dom';
import TestCom from './test';
import { Router, Route, Switch } from 'react-router'


const title = 'My Minimal React Webpack Babel Setup';

class FormContainer extends React.Component {
    constructor() {
      super();
      this.state = {
        title: ""
      };
    }
    render() {
      return (
        <form id="article-form">
        <div>
            <h1>aaaaaaaaaaaaaaaaaaaa</h1>
        </div>
        </form>
      );
    }
  }
  export default FormContainer;


  module.hot.accept();
