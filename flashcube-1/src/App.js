import React, { Component } from 'react';
import 'aframe';
import {Entity, Scene} from 'aframe-react';
import SmallFlippingCard from './components/smallFlippingCard';

class App extends Component {

  state = {
    selectedCard: '#a5'
  }

  render() {
    const arr = [1,2,3,4,5];

    // document.addEventListener('keydown', function(event) {
    //   console.log(this.state)
    //   document.querySelector('#a2').setAttribute('position', '0 0 0');
    // });

    document.addEventListener('keydown', this.handleKeyDown)
    //   console.log(this.state)
    //   document.querySelector('#a2').setAttribute('position', '0 0 0');
    // });
    
    return (
      <div className="App">
        <p>Hi afram</p>
        <Scene>
          <a-assets>
            <img id="fox" src="fox.jpg"/>
          </a-assets>
          <a-entity camera look-controls>
            <a-entity cursor="fuse: true; fuseTimeout: 500"
              downEvents={['pressSpaceBar']}
              position="0 0 -1"
              geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
              material="color: black; shader: flat">
            </a-entity>
          </a-entity>
          <Entity
            className={'bigCard'}
            geometry={{primitive: 'plane', width: 12, height: 5}}
            rotation="0 0 0"
            material={{color: 'green'}}
            position={{x: 0, y: 1, z: -5}}>
            {arr.map(ele => {
              return <SmallFlippingCard ele={ele}/>
            })}
          </Entity>
        </Scene>
      </div>
    );
  }

  changeSelectedCard = () => {

  }

  handleKeyDown = e => {
    console.log(`key down`)
    console.log(e)
    document.querySelector(this.state.selectedCard).setAttribute('position', '0 0 0');
  }

}

export default App;
