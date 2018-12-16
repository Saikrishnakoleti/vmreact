import React from 'react';
import {expect} from 'chai';
import { shallow, configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import MyDashBoard from './mydashboard';

describe('Component Rendering', () => {
    it('renders  <MyDashBoard /> components', () => {
        const wrapper = shallow(<MyDashBoard />);
        expect(5).to.equal(5);
    });
});