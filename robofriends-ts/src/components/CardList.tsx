import React from 'react';
import Card from './Card';
import { IRobot } from '../containers/App'

interface IRobotArray {
  robots: Array<IRobot>
}

const CardList = (
  { robots }: IRobotArray
) => {
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;