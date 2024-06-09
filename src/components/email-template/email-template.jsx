import * as React from 'react';



export const EmailTemplate = ({firstName}) => (
  <div>
    <h1> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ad
        aliquid, eligendi eius corrupti expedita. Consequuntur pariatur
        assumenda doloremque, accusantium recusandae minima quibusdam modi
        voluptate laudantium voluptatum provident eaque magnam.</h1>
        <h1>{firstName}!</h1>
  </div>
);