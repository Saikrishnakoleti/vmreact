import React from 'react';
import {expect} from 'chai';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { shallow, configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render, Simulate, wait } from "react-testing-library";
configure({ adapter: new Adapter() });
import ProjectService from './projectService';
import appConfig from '../appConfig/appconfig';

describe('Component Rendering', () => {
    it('Renders <ProjectService/> Component', () => {
        let mock = new MockAdapter(axios);
        const data = { response: true };
        mock.onGet(appConfig.projectUrl).reply(200, data);
        const spy = jest.spyOn(ProjectService.prototype, 'componentDidMount');
        const app = shallow(<ProjectService />);
        app.find('.btn').simulate('click')
        // expect(app.find('btn')).simulate('click')
        ;
    });
});