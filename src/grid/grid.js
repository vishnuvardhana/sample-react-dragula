import React from "react";
import classNames from "classnames";

const GridClass = React.createClass({
  displayName: "Grid",

  propTypes: {
    gutter: React.PropTypes.oneOf(['small', 'medium', 'large', 'collapse']),
    divider: React.PropTypes.bool,
    match: React.PropTypes.bool,
    width: React.PropTypes.string,
    small: React.PropTypes.string,
    medium: React.PropTypes.string,
    large: React.PropTypes.string,
    xlarge: React.PropTypes.string,
    className: React.PropTypes.string,
    children: React.PropTypes.node
  },

  render() {
    const {
      gutter,
      divider,
      match,
      width,
      small,
      medium,
      large,
      xlarge,
      className,
      children
    } = this.props;

    const childWidthClass = width ? `uk-grid-width-${width}` : "";
    const smallWidthClass = small ? `uk-grid-width-small-${small}` : "";
    const mediumWidthClass = medium ? `uk-grid-width-medium-${medium}` : "";
    const largeWidthClass = large ? `uk-grid-width-large-${large}` : "";
    const xlargeWidthClass = xlarge ? `uk-grid-width-xlarge-${xlarge}` : "";

    const gridClassNames = classNames({
        "uk-grid": true,
        "uk-grid-small": gutter === "small",
        "uk-grid-medium": gutter === "medium",
        "uk-grid-large": gutter === "large",
        "uk-grid-collapse": gutter === "collapse",
        "uk-grid-divider": divider,
        "uk-grid-match": match
      },
      childWidthClass,
      smallWidthClass,
      mediumWidthClass,
      largeWidthClass,
      xlargeWidthClass,
      className
    );

    return (
      <div className={gridClassNames}>
        {children}
      </div>
    );
  }
});

export default GridClass;
