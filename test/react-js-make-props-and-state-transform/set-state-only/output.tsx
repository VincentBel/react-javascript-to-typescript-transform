import * as React from 'react';
type MyComponentProps = {
};
type MyComponentState = { foo: number; bar: number; };
export default class MyComponent extends React.Component<MyComponentProps, MyComponentState> {
    render() {
        return <button onClick={this.onclick.bind(this)}/>;
    }
    onclick() {
        this.setState({ foo: 1, bar: 2 });
    }
}
