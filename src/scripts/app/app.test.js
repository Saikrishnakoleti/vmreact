import React from 'react';
import {expect} from 'chai';
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import App from './app';

describe('Component Rendering', () => {
    it('renders a <App />', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('div').children()).to.have.lengthOf(2)
    });
});