import React from 'react';

const Scroll = (props)=>{
    return (
        //javascript expression that has an object inside
        <div style={{overflowY:'scroll',border:'1px solid black',height:'800px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;