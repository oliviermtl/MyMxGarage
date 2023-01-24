import React from 'react';

import { Flex, Row, View } from '../components/global';
import { Text } from '../components/Text';

const HomeStack = () => {
  return (
    <Flex justifyContent="center" backgroundColor="red">
      <Row alignItems="center" justifyContent="center" backgroundColor="white">
        <Text align="center">Home</Text>
      </Row>
    </Flex>
  );
};

export default HomeStack;
