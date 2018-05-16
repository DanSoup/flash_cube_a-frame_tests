import React from 'react';
import PT from 'prop-types';
import {Entity} from 'aframe-react';

function SmallFlippingCard ({ele}) {
    return (
        <a-entity>            
              <Entity
            //   className={'a' + ele}
              id={'a' + ele}
              key={'a' + ele} 
              events={{mousedown: handleClick}}
              geometry={{primitive: 'plane'}}
              material={{src: "#fox"}}
              position={{x: (ele - 3) * 2, y: 0, z: 0.5}}>
                <a-animation attribute="rotation"
                  dur="1000"
                  begin="rotate1"
                  fill="forwards"
                  from="0 180 0"
                  to="0 360 0"
                  repeat="0"></a-animation>
                  <a-animation attribute="rotation"
                  dur="1000"
                  begin="rotate2"
                  fill="forwards"
                  from="0 0 0"
                  to="0 180 0"
                  repeat="0"></a-animation>
              </Entity>
              <Entity
              id={'b' + ele}
              key={'b' + ele} 
              events={{mousedown: handleClick}}
              geometry={{primitive: 'plane', src: "#fox"}}
              rotation="0 180 0"
              material={{color: 'blue'}}
              position={{x: (ele - 3) * 2, y: 0, z: 0.5}}>
                <a-animation attribute="rotation"
                  dur="1000"
                  begin="rotate1"
                  fill="forwards"
                  from="0 180 0"
                  to="0 360 0"
                  repeat="0"></a-animation>
                  <a-animation attribute="rotation"
                  dur="1000"
                  begin="rotate2"
                  fill="forwards"
                  from="0 0 0"
                  to="0 180 0"
                  repeat="0"></a-animation>
                  <a-text value="TORYAH!"></a-text>
              </Entity>
              </a-entity>
    );
}

function handleClick (e) {
    console.log('click');
    console.log(e.target.id);    
    console.log(Object.keys(e.target))
    let oppositeCard = e.target.id.slice(0,1) === 'a' ? '#b' : '#a'
    oppositeCard += e.target.id.slice(1)
    
    if (document.querySelector(oppositeCard) !== null) {
        document.querySelector(oppositeCard).emit('rotate1')
        e.target.emit("rotate2")
    }
    // e.target.setAttribute('material', 'color', 'yellow')
  }

SmallFlippingCard.propTypes = {
    
}

export default SmallFlippingCard; 