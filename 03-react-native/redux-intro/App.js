import React from "react";
import {  Provider } from 'react-redux';
import appStore from './store';
import Spinner from './Spinner';
import SpinnerResult from './SpinnerResult';

export default class App extends React.Component{
  render(){
    return (
      <Provider store={appStore}>
        <Spinner />
        <SpinnerResult />
      </Provider>
    );
  }
}