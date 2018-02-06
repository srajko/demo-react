import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Counter } from './Counter';

interface TwoCountersState {
    currentCounts: number[];
}

export class TwoCounters extends React.Component<RouteComponentProps<{}>, TwoCountersState> {
    constructor() {
        super();
        this.state = {
            currentCounts: [0, 0]
        };
    }

    public render() {
        const { currentCounts } = this.state;

        return <div>
            <Counter currentCount={currentCounts[0]} incrementCounter={() => this.incrementCounter(0)} />
            <Counter currentCount={currentCounts[1]} incrementCounter={() => this.incrementCounter(1)} />
        </div>;
    }

    private incrementCounter(index: number) {
        const countsCopy = this.state.currentCounts.slice();
        countsCopy[index] += index ? countsCopy[0] : 1;
        this.setState({ currentCounts: countsCopy });
    }
}
