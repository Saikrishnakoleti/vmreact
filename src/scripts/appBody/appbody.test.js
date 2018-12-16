import React from 'react';
import { expect } from 'chai'
import { shallow, configure, mount} from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import AppBody from './appbody';

describe('Component Rendering', () => {
    it('renders a <AppBody />', () => {
        const renderer = new ShallowRenderer();
        renderer.render(<AppBody />);
        const result = renderer.getRenderOutput();
        expect(result.props.children).to.have.lengthOf(9);
    });
});