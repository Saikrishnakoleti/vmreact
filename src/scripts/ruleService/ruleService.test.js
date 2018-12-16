import React from 'react';
import {expect} from 'chai';
import { shallow, configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import RuleService from './ruleService';
describe('Component Rendering', () => {
    it('fails when the actual does not match the expected', () => {
        const wrapper = mount(<RuleService/>);
        expect(wrapper.find('li')).to.have.lengthOf(1)
    });
});
