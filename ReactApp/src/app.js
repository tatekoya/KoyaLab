import React from 'react';
import Test from './test';
import Counter from './counter';
import { hot } from 'react-hot-loader';

const Index = () => (
    <div>
        <Counter />
        <Test />
        <p>＼(^o^)／</p>
    </div>
);

export default hot(module)(Index);