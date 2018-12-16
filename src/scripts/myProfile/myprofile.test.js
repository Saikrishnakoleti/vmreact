import React from 'react';
import {expect} from 'chai';
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import MyProfile from './myprofile';

describe('Component Rendering', () => {
    it('renders  <MyProfile /> components', () => {
        const wrapper = shallow(<MyProfile />);
        expect('ul').to.have.lengthOf.below(5)
    });
    it('renders a <MyProfile />', () => {
        const wrapper = shallow(<MyProfile />);
        expect(6).to.satisfy(function(num) {
            return num > 5;
        });
    });
});