import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface CounterProps {
    currentCount: number,
    incrementCounter: () => void
}

export class Counter extends React.Component<CounterProps, {}> {

    public componentWillReceiveProps(nextProps: CounterProps) {
        console.log(nextProps);
    }

    public render() {
        return <div>
            <h1>Counter</h1>

            <p>This is a simple example of a React component.</p>

            <p>Current count: <strong>{this.props.currentCount}</strong></p>

            <button onClick={ () => { this.props.incrementCounter() } }>Increment</button>
        </div>;
    }
}
