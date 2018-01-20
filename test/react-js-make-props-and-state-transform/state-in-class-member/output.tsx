import * as React from 'react';
type MyComponentProps = {
};
type MyComponentState = { foo: number; };
export default class MyComponent extends React.Component<MyComponentProps, MyComponentState> {
    state = { foo: 1 };
    render() {
        return <div />;
    }
}
