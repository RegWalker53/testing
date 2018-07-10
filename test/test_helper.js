import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDom from 'react-dom';
import chai, { expect }  from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';

// set up testing environment to run like a browsser in the command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');// node.js version of  window.document global variable
global.window = global.document.defaultView;
const $ = jquery(global.window); //constrains jquery to use the terminal based window and document

//build 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

 // console.log("componentInstance: ", componentInstance

  $(ReactDom.findDOMNode(componentInstance)); //produces html
}

// build helper for simulating events
$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.simulate[eventName](this[0]);
}

// Set up chai-jquery
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };
