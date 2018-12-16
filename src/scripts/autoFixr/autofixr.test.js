import React from 'react';
import {expect} from 'chai';
import { shallow, configure, mount} from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import Autofixr from './autofixr';

describe('Component Rendering', () => {
        it('renders <Autofixr />', () => {
        const renderer = new ShallowRenderer();
        renderer.render(<Autofixr />);
        const result = renderer.getRenderOutput();
        expect(result.props.children).to.have.length(6);
    })
});