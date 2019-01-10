import React from 'react';
import Link from 'next/link';

const MyButton = props => {

  const buttons = () => {
    let template = '';

    switch (props.type) {
      case "default": 
        template = <Link 
                         href={props.linkTo}
                         {...props.addStyles}
        >
          <a>{props.title}</a>
        </Link>
        break;
    
      default:
        template = '';
        break;
    }

    return template
  }
    
  return (
    <div className="my_link link_default">
      {buttons()}
    </div>
  );
};

export default MyButton;