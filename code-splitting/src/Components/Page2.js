import React from 'react';
import logo from '../logo.svg';
// import Particles from 'react-particles-js';

const Page2 = ({ onRouteChange }) =>
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to Page 2</h1>
    </header>
    <button onClick={() => onRouteChange('page1')}>Page1</button>
    <button className='disabled'>Page2</button>
    <button onClick={() => onRouteChange('page3')}>Page3</button>
    {/*<Particles
      params={{
                particles: {
                  line_linked: {
                    shadow: {
                      enable: true,
                      color: "#3CA9D1",
                      blur: 5
                    }
                  }
                }
              }}
              style={{
                width: '100%',
                backgroundImage: `url(${logo})`
              }}
    />*/}
  </div>

export default Page2;