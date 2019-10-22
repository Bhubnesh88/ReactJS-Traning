import React from 'react';

const Child = (props) => {
    console.log('props--', props);
    
    return (
        <div>
           {props.message} {props.name} {props.standard}
        </div>
    )

}
export default Child;