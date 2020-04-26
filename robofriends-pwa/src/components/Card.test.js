import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Card from './Card';

// mount is full render use dom, jsdom headless chrome
// render don't need full dom api
// render current component and its children
describe('Card', () => {

  it('expect to render Card component', () => {
    // shallow render current component only
    // not parent or child component
    // use shallow most of the time
    expect(shallow(<Card />).length).toEqual(1)
  })

})