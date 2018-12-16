import React from 'react';
import {expect} from 'chai';
import { shallow, configure, mount} from 'enzyme';
import MockAdapter from 'axios-mock-adapter';
import { render, Simulate, wait } from "react-testing-library";
import axios from 'axios';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import Services from './services';
import appConfig from '../appConfig/appconfig';

describe('Component Rendering', () => {

    it('Renders <Services/> Component', () => {
        let mock = new MockAdapter(axios);
        const data = { response: true };
        mock.onGet(appConfig.ruleUrl).reply(200, data);
        const spy = jest.spyOn(Services.prototype, 'componentDidMount');
        const onClick = jest.fn();
        const app = shallow(<Services />);
        app.find('button.btn').first().simulate('click');
    //     // expect(onClick).toBeCalledWith(0)
    });
});