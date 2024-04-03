import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const CustomTooltip = ({ text, children }) => {
  const renderTooltip = (props) => (
    <Tooltip id="tooltip" {...props}>
      {text}
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="top-end"
      overlay={renderTooltip}
    >
      {children}
    </OverlayTrigger>
  );
};

export default CustomTooltip;
