import React from 'react';
import renderer from 'react-test-renderer';
import {Text} from 'react-native'
import App from './App';

describe('<App />', () => {
  it('has 1 child', () => {
   const tree = renderer.create(<App />).toJSON();
   /* using the expect() and toBe() jest matchers */ 
   expect(tree.children.length).toBe(1);
  });
});
// it('works', () => {
//    expect(1).toBe(1);
//  });