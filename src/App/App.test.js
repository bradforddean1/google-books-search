import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('App Component', () => {
    // Smoke test
    test('Renders',
        () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <App />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    // Snapshot test
    test.skip('Renders Default State',
    () => {
        const wrapper = shallow(<App />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
