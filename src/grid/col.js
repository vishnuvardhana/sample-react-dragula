import React from "react";
import classNames from "classnames";

const ColClass = React.createClass({
  displayName: "Col",

  propTypes: {
    width: React.PropTypes.string,
    small: React.PropTypes.string,
    medium: React.PropTypes.string,
    large: React.PropTypes.string,
    className: React.PropTypes.string,
    children: React.PropTypes.node
  },

  render() {
    const {
      width,
      small,
      medium,
      large,
      className,
      children,
      ...otherProps
    } = this.props;

    const widthClass = width ? `uk-width-${width}` : "";
    const smallClass = small ? ( small === "hidden" ? "uk-hidden-small" : `uk-width-small-${small}` ) : "";
    const mediumClass = medium ? ( medium === "hidden" ? "uk-hidden-medium" : `uk-width-medium-${medium}` ) : "";
    const largeClass = large ? ( large === "hidden" ? "uk-hidden-large" : `uk-width-large-${large}` ) : "";
    const colClassNames = classNames(
      widthClass,
      smallClass,
      mediumClass,
      largeClass,
      className
    );

    return (
      <div className={colClassNames} {...otherProps}>
        {children}
      </div>
    )
  }
});

export default ColClass;
