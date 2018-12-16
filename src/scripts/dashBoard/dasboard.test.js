import React from 'react';
import {expect} from "chai";
import { shallow, configure, mount} from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import DashBoard from './dashboard';

describe('Component Rendering', () => {
    it('renders a <DashBoard />', () => {
        const wrapper = shallow(<DashBoard />);
        expect('li').to.have.lengthOf.above(1);
    });
    it('renders a <DashBoard />', () => {
        const renderer = new ShallowRenderer();
        renderer.render(<DashBoard />);
        const result = renderer.getRenderOutput();
        expect('ul').to.have.lengthOf.below(5)
    });
});