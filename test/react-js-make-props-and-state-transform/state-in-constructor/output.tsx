import * as React from 'react';
type MyComponentProps = {
};
type MyComponentState = { foo: number; };
export default class MyComponent extends React.Component<MyComponentProps, MyComponentState> {
    constructor(props, context) {
        super(props, context);
        this.state = { foo: 1 };
    }
    render() {
        return <div />;
    }
}
