import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Counter } from './Counter';

interface TwoCountersState {
}

export class TwoCounters extends React.Component<RouteComponentProps<{}>, TwoCountersState> {
    public render() {
        return <div>
            <Counter />
            <Counter />
        </div>;
    }
}
