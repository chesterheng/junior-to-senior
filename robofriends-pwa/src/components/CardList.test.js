import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CardList from './CardList';

describe('CardList', () => {

  it('expect to render CardList component snapshot', () => {
    const mockRobots = [
      {
        id: 1,
        name: 'John Snow',
        username: 'JohnJohn',
        email: 'john@gmail.com'
      }
    ]
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
  })

})