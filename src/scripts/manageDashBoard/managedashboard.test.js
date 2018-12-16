import React from 'react';
import {expect} from 'chai';
import { configure} from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import ManageDashBoard from './managedashboard';

describe('Component Rendering', () => {
    it('renders a <ManageDashBoard />', () => {
        const renderer = new ShallowRenderer();
        renderer.render(<ManageDashBoard />);
        const result = renderer.getRenderOutput();
        expect(result.props.children).to.have.lengthOf(5);
    });
});