import React from 'react';
import {expect} from 'chai';
import { shallow, configure} from 'enzyme';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import UserService from './userService';
import appConfig from '../appConfig/appconfig';

describe('Component Rendering', () => {
    it('Renders <UserService/> Component', () => {
        let mock = new MockAdapter(axios);
        const data = { response: true };
        mock.onGet(appConfig.userUrl).reply(200, data);
        const spy = jest.spyOn(UserService.prototype, 'componentDidMount');
        const app = shallow(<UserService />);
        app.find('.btn').simulate('click')
    
    });
});