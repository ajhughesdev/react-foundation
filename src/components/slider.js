import React, { useState } from 'react';
import classNames from 'classnames';

// TODO: Add support for changing the values.

/**
 * Slider component.
 * http://foundation.zurb.com/sites/docs/slider.html
 */
export const Slider = props => {
  const { handle: handleProps, fill: fillProps, initialStart = 0, ...rest } = props;
  const [value] = useState(initialStart);

  return (
    <div {...rest} className={classNameFromProps(rest)}>
      <SliderHandle {...handleProps}/>
      <SliderFill {...fillProps}/>
    </div>
  );
};

/**
 * Two-handle slider component.
 * http://foundation.zurb.com/sites/docs/slider.html#two-handles
 */
export const TwoHandleSlider = props => {
  const {
    minHandle: minHandleProps,
    maxHandle: maxHandleProps,
    fill: fillProps,
    initialStart = 0,
    initialEnd = 100,
    ...rest
  } = props;
  const [minValue] = useState(initialStart);
  const [maxValue] = useState(initialEnd);

  return (
    <div {...rest} className={classNameFromProps(rest)}>
      <SliderHandle {...minHandleProps}/>
      <SliderHandle {...maxHandleProps}/>
      <SliderFill {...fillProps}/>
    </div>
  );
};

/**
 * Slider handle sub-component.
 *
 * @param {Object} props
 * @returns {XML}
 */
export const SliderHandle = props => {
  return (
    <span>
      <span {...props} role="slider"/>
      <input type="hidden"/>
    </span>
  );
};

/**
 * Slider fill sub-component.
 *
 * @param {Object} props
 * @returns {XML}
 */
export const SliderFill = props => (
  <span className={props.className || 'slider-fill'}/>
);

/**
 * Creates the slider class name from the given properties.
 * This method allows us to share code between the `Slider` and `TwoHandleSlider` components.
 *
 * @param {Object} props
 * @returns {string}
 */
function classNameFromProps(props) {
  return classNames(
    props.className || 'slider',
    {
      'vertical': props.isVertical,
      'disabled': props.isDisabled
    }
  );
}
