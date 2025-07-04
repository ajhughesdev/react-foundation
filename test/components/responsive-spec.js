import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import { mount, shallow, render } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';
import { ResponsiveNavigation, TitleBar, MenuIcon, TitleBarTitle } from '../../src/components/responsive';
import { TopBar } from '../../src/components/top-bar';

describe('ResponsiveNavigation component', () => {

  it('sets tag name', () => {
    const component = render(<ResponsiveNavigation/>);
    expect(component).to.have.tagName('div');
  });

  it('sets default class name', () => {
    const component = render(<ResponsiveNavigation className="navbar"/>);
    expect(component).to.have.className('navbar');
  });

  // component lifecycle tests removed for functional component

  it('has correct children', () => {
    const renderer = createRenderer();
    renderer.render(<ResponsiveNavigation/>);
    const output = renderer.getRenderOutput();
    expect(output).jsx.to.equal(<div><TitleBar isHidden={true}><MenuIcon onClick={() => {}}/><TitleBarTitle/></TitleBar><TopBar isHidden={false}/></div>);
  });

  it('passes on props', () => {
    const component = mount(<ResponsiveNavigation titleBar={{ id: 'foo' }} topBar={{ id: 'bar' }}/>);
    expect(component.find('.title-bar')).to.have.attr('id', 'foo');
    expect(component.find('.top-bar')).to.have.attr('id', 'bar');
  });

  // componentWillUnmount test removed

});

describe('TitleBar component', () => {

  it('sets tag name', () => {
    const component = render(<TitleBar/>);
    expect(component).to.have.tagName('div');
  });

  it('sets default class name', () => {
    const component = render(<TitleBar/>);
    expect(component).to.have.className('title-bar');
  });

  it('does not set default class name', () => {
    const component = render(<TitleBar noDefaultClassName/>);
    expect(component).to.not.have.className('title-bar');
  });

  it('sets custom class name', () => {
    const component = render(<TitleBar className="my-title-bar"/>);
    expect(component).to.have.className('my-title-bar');
  });
  it('does not carry over non-DOM props', () => {
    const component = shallow(<TitleBar isHidden={true} />);
    expect(component).to.not.have.prop('isHidden');
  });
});

describe('MenuIcon component', () => {

  it('sets tag name', () => {
    const component = render(<MenuIcon/>);
    expect(component).to.have.tagName('button');
  });

  it('sets default class name', () => {
    const component = render(<MenuIcon/>);
    expect(component).to.have.className('menu-icon');
  });

  it('does not set default class name', () => {
    const component = render(<MenuIcon noDefaultClassName/>);
    expect(component).to.not.have.className('menu-icon');
  });

  it('sets custom class name', () => {
    const component = render(<MenuIcon className="my-menu-icon"/>);
    expect(component).to.have.className('my-menu-icon');
  });

  it('sets button type', () => {
    const component = render(<MenuIcon/>);
    expect(component).to.have.attr('type', 'button');
  });

  it('sets contents', () => {
    const component = render(<MenuIcon>Icon</MenuIcon>);
    expect(component).to.have.text('Icon');
  });

  it('does not carry over non-DOM props', () => {
    const component = shallow(<MenuIcon isHidden={true} />);
    expect(component).to.not.have.prop('isHidden');
  });

});

describe('TitleBarTitle component', () => {

  it('sets tag name', () => {
    const component = render(<TitleBarTitle/>);
    expect(component).to.have.tagName('div');
  });

  it('sets default class name', () => {
    const component = render(<TitleBarTitle/>);
    expect(component).to.have.className('title-bar-title');
  });

  it('does not set default class name', () => {
    const component = render(<TitleBarTitle noDefaultClassName/>);
    expect(component).to.not.have.className('title-bar-title');
  });

  it('sets custom class name', () => {
    const component = render(<TitleBarTitle className="my-title-bar-title"/>);
    expect(component).to.have.className('my-title-bar-title');
  });

  it('sets contents', () => {
    const component = render(<TitleBarTitle>Menu</TitleBarTitle>);
    expect(component).to.have.text('Menu');
  });

  it('does not carry over non-DOM props', () => {
    const component = shallow(<TitleBarTitle isHidden={true} />);
    expect(component).to.not.have.prop('isHidden');
  });

});
