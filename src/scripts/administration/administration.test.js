import React from 'react';
import {expect} from "chai";
import { shallow, configure, mount} from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import Administration from './administration';

describe('Component Rendering', () => {
    it('renders a <Administration />', () => {
        const renderer = new ShallowRenderer();
        renderer.render(<Administration />);
        const result = renderer.getRenderOutput();
        expect('li').to.have.lengthOf.above(1);
    });
});