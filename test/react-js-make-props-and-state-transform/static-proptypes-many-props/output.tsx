import * as React from 'react';

const enum OneOfEnum {
    a = 'a',
    b = 'b',
    c = 'c'
}

const enum OneOfRequiredEnum {
    a = 'a',
    b = 'b',
    c = 'c'
}

export default class MyComponent extends React.Component<{
        any?: any;
        array?: any[];
        bool?: boolean;
        func?: (...args: any[]) => any;
        number?: number;
        object?: object;
        string?: string;
        node?: React.ReactNode;
        oneOf?: OneOfEnum;
        element?: JSX.Element;
        anyRequired: any;
        arrayRequired: any[];
        boolRequired: boolean;
        funcRequired: (...args: any[]) => any;
        numberRequired: number;
        objectRequired: object;
        stringRequired: string;
        nodeRequired: React.ReactNode;
        elementRequired: JSX.Element;
        oneOfRequired: OneOfRequiredEnum;
    }, {
    }> {
    static propTypes = {
        children: React.PropTypes.node,
        any: React.PropTypes.any,
        array: React.PropTypes.array,
        bool: React.PropTypes.bool,
        func: React.PropTypes.func,
        number: React.PropTypes.number,
        object: React.PropTypes.object,
        string: React.PropTypes.string,
        node: React.PropTypes.node,
        oneOf: React.PropTypes.oneOf(['a', 'b', 'c']),
        element: React.PropTypes.element,
        anyRequired: React.PropTypes.any.isRequired,
        arrayRequired: React.PropTypes.array.isRequired,
        boolRequired: React.PropTypes.bool.isRequired,
        funcRequired: React.PropTypes.func.isRequired,
        numberRequired: React.PropTypes.number.isRequired,
        objectRequired: React.PropTypes.object.isRequired,
        stringRequired: React.PropTypes.string.isRequired,
        nodeRequired: React.PropTypes.node.isRequired,
        elementRequired: React.PropTypes.element.isRequired,
        oneOfRequired: React.PropTypes.oneOf(['a', 'b', 'c']).isRequired,
    };
    render() {
        return <div />;
    }
}
