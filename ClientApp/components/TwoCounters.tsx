import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Counter } from './Counter';

interface TwoCountersState {
    counters: number[]
}

export class TwoCounters extends React.Component<RouteComponentProps<{}>, TwoCountersState> {
    constructor(props:RouteComponentProps<{}>) {
        super(props);
        this.state = { counters: [1, 0] }
    }

    public render() {
        const { counters } = this.state;
        return <div>
            <Counter currentCount={counters[0]} incrementCounter={() => this.incrementCounter(0)} />
            <Counter currentCount={counters[1]} incrementCounter={() => this.incrementCounter(1)} />
        </div>;
    }

    private incrementCounter(index: number) {
        const { counters } = this.state;
        counters[index] += index ? counters[0] : 1;
        this.setState({ counters });
    }
}
