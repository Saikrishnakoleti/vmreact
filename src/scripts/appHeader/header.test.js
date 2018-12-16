import React from 'react';
import {expect} from 'chai';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { shallow, configure, mount,render} from 'enzyme';
import AppHeader from './header';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
describe('Component Rendering', () => {
    it('renders a <AppHeader />', () => {
        const wrapper = shallow(<AppHeader />);
        expect(wrapper.find('div').children()).to.have.lengthOf(2)
    });
    
});
