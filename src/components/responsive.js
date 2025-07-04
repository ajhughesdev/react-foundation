import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TopBar } from './top-bar';
import { GeneralPropTypes, FlexboxPropTypes, createClassName, generalClassNames, removeProps, objectKeys } from '../utils';
import ExecutionEnvironment from 'fbjs/lib/ExecutionEnvironment';

// Default pixel value when title bar is displayed and top bar is hidden.
const DEFAULT_BREAKPOINT = 640;

/**
 * Responsive navigation component.
 * http://foundation.zurb.com/sites/docs/responsive-navigation.html
 */
export const ResponsiveNavigation = props => {
  const {
    titleBar: titleBarProps = {},
    menuIcon: menuIconProps = {},
    titleBarTitle: titleBarTitleProps = {},
    topBar: topBarProps = {},
    breakpoint = DEFAULT_BREAKPOINT,
    children,
    ...rest
  } = props;

  const [isTitleBarVisible, setIsTitleBarVisible] = useState(true);
  const [isTopBarVisible, setIsTopBarVisible] = useState(false);

  const update = useCallback(() => {
    if (ExecutionEnvironment.canUseDOM) {
      setIsTitleBarVisible(window.innerWidth < breakpoint);
      setIsTopBarVisible(window.innerWidth >= breakpoint);
    }
  }, [breakpoint]);

  const toggle = useCallback(() => {
    setIsTopBarVisible(v => !v);
  }, []);

  useEffect(() => {
    update();
  }, [update]);

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      window.addEventListener('resize', update);
      return () => window.removeEventListener('resize', update);
    }
  }, [update]);

  return (
    <div {...removeProps(rest, ['breakpoint'])}>
      <TitleBar {...titleBarProps} isHidden={!isTitleBarVisible}>
        <MenuIcon {...menuIconProps} onClick={toggle}/>
        <TitleBarTitle {...titleBarTitleProps}/>
      </TitleBar>
      <TopBar {...topBarProps} isHidden={!isTopBarVisible}>
        {children}
      </TopBar>
    </div>
  );
};

ResponsiveNavigation.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  breakpoint: PropTypes.number.isRequired
};

ResponsiveNavigation.defaultProps = {
  breakpoint: DEFAULT_BREAKPOINT
};

/**
 * Title bar sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const TitleBar = props => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'title-bar',
    props.className,
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(TitleBar.propTypes));
  
  return (
    <div {...passProps} className={className} />
  );
  
};

TitleBar.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes
};

/**
 * Title bar menu icon sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const MenuIcon = props => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'menu-icon',
    props.className,
    generalClassNames(props)
  );
  const passProps = removeProps(props, objectKeys(MenuIcon.propTypes));

  return (
    <button {...passProps} className={className} type="button"/>
  );
};

MenuIcon.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes
};

/**
 * Title bar title sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const TitleBarTitle = props => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'title-bar-title',
    props.className,
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(TitleBarTitle.propTypes));
  return (
    <div {...passProps} className={className}/>
  );
};

TitleBarTitle.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes
};
