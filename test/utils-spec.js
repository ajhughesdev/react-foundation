import React from 'react';
import { render } from '@testing-library/react';
import { Breakpoints, ExtendedBreakpoints, SpaceControls } from '../src/enums';
import { removeProps, createClassName, generalClassNames, objectValues, flexboxClassNames } from '../src/utils';
import { FlexVideo } from '../src/components/flex-video';

describe('Utilities', () => {
  test('removeProps', () => {
    const props = { foo: 1, bar: true, baz: '???' };
    const actual = removeProps(props, ['bar']);
    expect(actual).toHaveProperty('foo');
    expect(actual).toHaveProperty('baz');
    expect(actual).not.toHaveProperty('bar');
  });

  test('createClassName', () => {
    const className = createClassName('foo', { bar: true, baz: 1 === 2, qux: undefined });
    expect(className).toBe('foo bar');
  });

  test('generalClassNames', () => {
    const props = { showFor: Breakpoints.MEDIUM, isHidden: true, showForSr: false, float: 'left' };
    const classNames = generalClassNames(props);
    expect(classNames['show-for-medium']).toBe(true);
    expect(classNames['hide']).toBe(true);
    expect(classNames['show-for-sr']).toBe(false);
    expect(classNames['float-left']).toBe(true);
  });

  test('objectValues', () => {
    const obj = { FOO: 'foo', BAR: 'bar', BAZ: 'baz', QUX: 'qux' };
    expect(objectValues(obj)).toEqual(expect.arrayContaining(['foo', 'bar', 'baz', 'qux']));
  });

  test('flexboxClassNames', () => {
    const props = { flexDirRow: ExtendedBreakpoints.MEDIUM, flexOrderSmall: 4, flexChild: SpaceControls.GROW };
    const classNames = flexboxClassNames(props);
    expect(classNames['medium-flex-dir-row']).toBe('medium');
    expect(classNames['small-order-undefined']).toBe(4);
    expect(classNames['flex-child-grow']).toBe('grow');
  });
});
