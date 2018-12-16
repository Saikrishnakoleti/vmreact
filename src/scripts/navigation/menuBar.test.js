import React from 'react';
import {expect} from 'chai';
import {shallow, configure} from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import MenuBar from './menuBar';

describe('Component Rendering', () => {
        it('renders <MenuBar />', () => {
            const wrapper = shallow(<MenuBar />);
            expect('nav').to.have.lengthOf.below(4)
    })
});