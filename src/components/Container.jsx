import React from 'react';
import { Box } from 'rebass';

const Container = props => (
  <Box
    {...props}
    px={3}
    mx="auto"
    css={{
      maxWidth: '1024px',
    }}
  />
);

export default Container;
