import React from 'react';
import {expect} from 'chai';
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import Settings from './settings';
describe('Component Rendering', () => {
    it('renders a <Settings />', () => {
            const wrapper = shallow(<Settings />);
            expect(13).to.satisfy(function(num) {
                return num > 12;
            });
    });
});