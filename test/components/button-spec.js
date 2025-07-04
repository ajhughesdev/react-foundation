import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button, Link } from '../../src/components/button';
import { Colors, Sizes } from '../../src/enums';

describe('Button component', () => {
  test('sets tag name', () => {
    const { container } = render(<Button />);
    expect(container.firstChild.tagName).toBe('BUTTON');
  });

  test('sets default class name', () => {
    const { container } = render(<Button />);
    expect(container.firstChild).toHaveClass('button');
  });

  test('sets custom class name', () => {
    const { container } = render(<Button className="my-button" />);
    expect(container.firstChild).toHaveClass('my-button');
  });

  test('does not set default class name', () => {
    const { container } = render(<Button noDefaultClassName />);
    expect(container.firstChild).not.toHaveClass('button');
  });

  test('sets size', () => {
    const { container } = render(<Button size={Sizes.SMALL} />);
    expect(container.firstChild).toHaveClass('small');
    expect(container.firstChild).not.toHaveAttribute('size');
  });

  test('sets color', () => {
    const { container } = render(<Button color={Colors.SUCCESS} />);
    expect(container.firstChild).toHaveClass('success');
    expect(container.firstChild).not.toHaveAttribute('color');
  });

  test('sets hollow', () => {
    const { container } = render(<Button isHollow />);
    expect(container.firstChild).toHaveClass('hollow');
    expect(container.firstChild).not.toHaveAttribute('isHollow');
  });

  test('sets clear', () => {
    const { container } = render(<Button isClear />);
    expect(container.firstChild).toHaveClass('clear');
    expect(container.firstChild).not.toHaveAttribute('isClear');
  });

  test('sets expanded', () => {
    const { container } = render(<Button isExpanded />);
    expect(container.firstChild).toHaveClass('expanded');
    expect(container.firstChild).not.toHaveAttribute('isExpanded');
  });

  test('sets disabled', () => {
    const { container } = render(<Button isDisabled />);
    expect(container.firstChild).toHaveClass('disabled');
    expect(container.firstChild).not.toHaveAttribute('isDisabled');
  });

  test('sets dropdown', () => {
    const { container } = render(<Button isDropdown />);
    expect(container.firstChild).toHaveClass('dropdown');
    expect(container.firstChild).not.toHaveAttribute('isDropdown');
  });

  test('sets arrow only', () => {
    const { container } = render(<Button isArrowOnly />);
    expect(container.firstChild).toHaveClass('arrow-only');
    expect(container.firstChild).not.toHaveAttribute('isArrowOnly');
  });

  test('sets contents', () => {
    render(<Button>Submit</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Submit');
  });
});

describe('Link component', () => {
  test('sets tag name', () => {
    const { container } = render(<Link />);
    expect(container.firstChild.tagName).toBe('A');
  });

  test('sets default class name', () => {
    const { container } = render(<Link />);
    expect(container.firstChild).toHaveClass('button');
  });

  test('does not set default class name', () => {
    const { container } = render(<Link noDefaultClassName />);
    expect(container.firstChild).not.toHaveClass('button');
  });

  test('sets custom class name', () => {
    const { container } = render(<Link className="my-button" />);
    expect(container.firstChild).toHaveClass('my-button');
  });

  test('sets size', () => {
    const { container } = render(<Link size={Sizes.SMALL} />);
    expect(container.firstChild).toHaveClass('small');
    expect(container.firstChild).not.toHaveAttribute('size');
  });

  test('sets color', () => {
    const { container } = render(<Link color={Colors.SUCCESS} />);
    expect(container.firstChild).toHaveClass('success');
    expect(container.firstChild).not.toHaveAttribute('color');
  });

  test('sets hollow', () => {
    const { container } = render(<Link isHollow />);
    expect(container.firstChild).toHaveClass('hollow');
    expect(container.firstChild).not.toHaveAttribute('isHollow');
  });

  test('sets expanded', () => {
    const { container } = render(<Link isExpanded />);
    expect(container.firstChild).toHaveClass('expanded');
    expect(container.firstChild).not.toHaveAttribute('isExpanded');
  });

  test('sets disabled', () => {
    const { container } = render(<Link isDisabled />);
    expect(container.firstChild).toHaveClass('disabled');
    expect(container.firstChild).not.toHaveAttribute('isDisabled');
  });

  test('sets dropdown', () => {
    const { container } = render(<Link isDropdown />);
    expect(container.firstChild).toHaveClass('dropdown');
    expect(container.firstChild).not.toHaveAttribute('isDropdown');
  });

  test('sets arrow only', () => {
    const { container } = render(<Link isArrowOnly />);
    expect(container.firstChild).toHaveClass('arrow-only');
    expect(container.firstChild).not.toHaveAttribute('isArrowOnly');
  });

  test('sets contents', () => {
    render(<Link>Link</Link>);
    expect(screen.getByText('Link').tagName).toBe('A');
  });
});
