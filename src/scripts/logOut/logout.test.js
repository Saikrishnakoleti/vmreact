import React from 'react';
import {expect} from 'chai';
import { shallow, configure, mount} from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import LogOut from './logout';

describe('Component Rendering', () => {
    it('renders a <LogOut />', () => {
            var wrapper = shallow(<LogOut />);
            expect('div').to.be.frozen;
    });
    it('renders a <LogOut />', () => {
        const wrapper = shallow(<LogOut />);
        expect(wrapper.find('div').children()).to.have.length(3);
    });
});