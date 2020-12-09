// SPDX-License-Identifier: MIT
// Copyright (c) 2020 Daimler TSS GmbH

import { Container, Button } from '@material-ui/core';
import { SwidgetLoader } from '@daimler/ftk-core';
import * as React from 'react';
import { useContext, useState } from 'react';

const defaultContextData = {
    foo: "bar",
}

export const MyContext = React.createContext(defaultContextData);

const Home = () => {

    const myContext = useContext(MyContext);

    const [swidget1, setSwidget1] = useState<boolean>(false);
    const [swidget2, setSwidget2] = useState<boolean>(false);

    myContext.foo = new Date().toDateString();

    return (
        <Container>
            <Button onClick={() => { setSwidget1(!swidget1); }}>Toggle 1</Button>
            {swidget1 && <SwidgetLoader
                props={{
                    myState: myContext,
                }}
                name={"swidget"}
                url={"http://localhost:7070/swidget.js"}
                uniqueId={"s1"}
            >
            </SwidgetLoader>}
            <Button onClick={() => { setSwidget2(!swidget2); }}>Toggle 2</Button>
            {swidget2 && <SwidgetLoader
                props={{
                    myState: myContext,
                }}
                name={"swidget"}
                url={"http://localhost:7070/swidget.js"}
                uniqueId={"s1"}
            >
            </SwidgetLoader>}
        </Container>
    );
};

export default Home;
