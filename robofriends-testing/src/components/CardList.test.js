import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';
const filteredRobots = [{
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz'
  }]

it('renders without crashing', () => {
  expect(shallow(<CardList robots={filteredRobots}/>)).toMatchSnapshot();
});