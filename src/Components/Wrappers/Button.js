import React from 'react';
import { Button as AntButton } from 'antd';

export const Button = ({ md, style, ...props }) => {
  let customStyle = {};
  if (md) {
    customStyle.height = 38;
  }
  return <AntButton style={{ ...customStyle, ...style }} {...props} />;
};
