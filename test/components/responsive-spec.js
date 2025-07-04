import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ResponsiveNavigation, TitleBar, MenuIcon, TitleBarTitle } from '../../src/components/responsive';
import { TopBar } from '../../src/components/top-bar';

describe('ResponsiveNavigation component', () => {
  test('sets tag name', () => {
    const { container } = render(<ResponsiveNavigation />);
    expect(container.firstChild.tagName).toBe('DIV');
  });

  test('sets default class name', () => {
    const { container } = render(<ResponsiveNavigation className="navbar" />);
    expect(container.firstChild).toHaveClass('navbar');
  });

  test('has correct children', () => {
    const { container } = render(<ResponsiveNavigation />);
    expect(container.querySelector('.title-bar')).toBeInTheDocument();
    expect(container.querySelector('.top-bar')).toBeInTheDocument();
  });

  test('passes on props', () => {
    const { container } = render(
      <ResponsiveNavigation titleBar={{ id: 'foo' }} topBar={{ id: 'bar' }} />
    );
    expect(container.querySelector('.title-bar')).toHaveAttribute('id', 'foo');
    expect(container.querySelector('.top-bar')).toHaveAttribute('id', 'bar');
  });

  test('toggles top bar when menu icon is clicked', async () => {
    window.innerWidth = 500;
    const user = userEvent.setup();
    const { container } = render(<ResponsiveNavigation />);
    const topBar = container.querySelector('.top-bar');
    expect(topBar).toHaveClass('hide');
    await user.click(screen.getByRole('button'));
    expect(topBar).not.toHaveClass('hide');
  });
});

describe('TitleBar component', () => {
  test('sets tag name', () => {
    const { container } = render(<TitleBar />);
    expect(container.firstChild.tagName).toBe('DIV');
  });

  test('sets default class name', () => {
    const { container } = render(<TitleBar />);
    expect(container.firstChild).toHaveClass('title-bar');
  });

  test('does not set default class name', () => {
    const { container } = render(<TitleBar noDefaultClassName />);
    expect(container.firstChild).not.toHaveClass('title-bar');
  });

  test('sets custom class name', () => {
    const { container } = render(<TitleBar className="my-title-bar" />);
    expect(container.firstChild).toHaveClass('my-title-bar');
  });

  test('does not carry over non-DOM props', () => {
    const { container } = render(<TitleBar isHidden />);
    expect(container.firstChild).not.toHaveAttribute('isHidden');
  });
});

describe('MenuIcon component', () => {
  test('sets tag name', () => {
    const { container } = render(<MenuIcon />);
    expect(container.firstChild.tagName).toBe('BUTTON');
  });

  test('sets default class name', () => {
    const { container } = render(<MenuIcon />);
    expect(container.firstChild).toHaveClass('menu-icon');
  });

  test('does not set default class name', () => {
    const { container } = render(<MenuIcon noDefaultClassName />);
    expect(container.firstChild).not.toHaveClass('menu-icon');
  });

  test('sets custom class name', () => {
    const { container } = render(<MenuIcon className="my-menu-icon" />);
    expect(container.firstChild).toHaveClass('my-menu-icon');
  });

  test('sets button type', () => {
    const { container } = render(<MenuIcon />);
    expect(container.firstChild).toHaveAttribute('type', 'button');
  });

  test('sets contents', () => {
    render(<MenuIcon>Icon</MenuIcon>);
    expect(screen.getByRole('button')).toHaveTextContent('Icon');
  });

  test('does not carry over non-DOM props', () => {
    const { container } = render(<MenuIcon isHidden />);
    expect(container.firstChild).not.toHaveAttribute('isHidden');
  });
});

describe('TitleBarTitle component', () => {
  test('sets tag name', () => {
    const { container } = render(<TitleBarTitle />);
    expect(container.firstChild.tagName).toBe('DIV');
  });

  test('sets default class name', () => {
    const { container } = render(<TitleBarTitle />);
    expect(container.firstChild).toHaveClass('title-bar-title');
  });

  test('does not set default class name', () => {
    const { container } = render(<TitleBarTitle noDefaultClassName />);
    expect(container.firstChild).not.toHaveClass('title-bar-title');
  });

  test('sets custom class name', () => {
    const { container } = render(<TitleBarTitle className="my-title-bar-title" />);
    expect(container.firstChild).toHaveClass('my-title-bar-title');
  });

  test('sets contents', () => {
    render(<TitleBarTitle>Menu</TitleBarTitle>);
    expect(screen.getByText('Menu')).toBeInTheDocument();
  });

  test('does not carry over non-DOM props', () => {
    const { container } = render(<TitleBarTitle isHidden />);
    expect(container.firstChild).not.toHaveAttribute('isHidden');
  });
});
