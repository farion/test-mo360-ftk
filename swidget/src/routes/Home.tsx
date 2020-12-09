// SPDX-License-Identifier: MIT
// Copyright (c) 2020 Daimler TSS GmbH

import { Container, Button } from '@material-ui/core';
import * as React from 'react';

import { useContext, useState } from 'react';
import { MyContext } from '../ContextWrapper';

const Home = () => {

  const [fake,setFake] = useState<boolean>();

  const myState = useContext(MyContext);

  return (
    <Container>
      SWIDGET {myState.foo}
      <Button onClick={() => setFake(!fake)}>Reload State</Button>
    </Container>
  );
};

export default Home;
