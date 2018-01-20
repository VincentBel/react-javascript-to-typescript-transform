import * as React from 'react';
type MyComponentProps = {
    foo: string;
};
type MyComponentState = {
};
export default class MyComponent extends React.Component<MyComponentProps, MyComponentState> {
    static propTypes = {
        foo: React.PropTypes.string.isRequired,
    };
    render() {
        return <div />;
    }
}
