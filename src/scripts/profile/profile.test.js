import React from 'react';
import {expect} from 'chai';
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import Profile from './profile';

describe('Component Rendering', () => {
    it('renders  <Profile /> components', () => {
        const wrapper = shallow(<Profile />);
        expect('ul').to.have.lengthOf.below(5)
    });
});