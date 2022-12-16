import React from 'react';
import classes from './PageHeader.module.css';

const PageHeader = (props) => {
    
  return (
    <div className={classes.headphonesHeader}>
        <h2>{props.product}</h2>
      </div>
  )
}

export default PageHeader