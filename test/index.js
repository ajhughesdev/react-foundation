import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { jsdom } from 'jsdom';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

chai.use(chaiEnzyme());

Enzyme.configure({ adapter: new Adapter() });

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;
