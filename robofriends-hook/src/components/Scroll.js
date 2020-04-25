import React from 'react';


const Scroll = (props) => {
    return(
        <div style={{position: 'sticky', top: '0', zIndex: '5', padding: '10px', background: 'linear-gradient(to left, rgba(7,27,82,1) 0%, rgba(0,128,128,1) 100%)', border: '1px solid black'}}>
            {props.children}
        </div>
    );
}

export default Scroll;

// background: linear-gradient(to left, rgba(7,27,82,1) 0%, rgba(0,128,128,1) 100%);