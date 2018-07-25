import React from 'react';

const DisplayGreetingStateless = (props) => {
    if (props.show)
    return <p> Sei gegrüßt, {props.value} ! </p>;
    else return null;
  }

export default DisplayGreetingStateless;