import React from 'react';
import {expect} from 'chai';
import { configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import ProjectRule from './projectRule';
describe('Component Rendering', () => {
    it('fails when the actual does not match the expected', () => {
        const wrapper = mount(<ProjectRule/>);
        expect(wrapper.find('li')).to.have.lengthOf(1)
    });
});
