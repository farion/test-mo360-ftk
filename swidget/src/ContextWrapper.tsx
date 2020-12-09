import { useContext } from 'react';
import React from 'react';

const defaultContextData = {
    "foo": "bar",
}

export const MyContext = React.createContext(defaultContextData);

const ContextWrapper = (props: React.PropsWithChildren<{}>) => {

    const myState = useContext(MyContext);

    myState.foo = new Date().toLocaleTimeString();

    return <>{props.children}</>
}

export default ContextWrapper;