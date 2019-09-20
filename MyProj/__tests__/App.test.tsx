import React from "react";
import renderer from "react-test-renderer";
import CounterView from "../src/components/CounterView";
import Counter from "../src/components/Counter";
import "../enzyme.setup";
import { shallow, mount, render } from "enzyme";
import { act } from 'react-dom/test-utils';
import ReactTestRenderer from "react-test-renderer";

it('テストケースのテスト', () => {
    ReactTestRenderer.act(()=>{
        const tree = renderer.create(<CounterView />).toJSON();
        expect(tree).toMatchSnapshot();
    })
});

