import React from 'react';
import Popover from 'react-bootstrap/lib/Popover';

class MyPopover extends React.Component{
  constructor(props){ 
    super(props);
  }

  render() {
    return (
      <Popover id="popover-trigger-focus" title={this.props.title} {...this.props}>
          { this.props.children }
      </Popover>
    );
  }
}