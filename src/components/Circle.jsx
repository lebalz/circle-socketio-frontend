import React from "react";

export default class Circle extends React.Component {
  render() {
    const circle = this.props.circle;
    let classes = "circle";

    if (this.props.circle.animated) {
      classes = `${classes} animated`;
    }
    return (
      <div
        className={classes}
        style={{
          background: circle.color,
          gridRow: `span ${circle.size}`,
          gridColumn: `span ${circle.size}`
        }}
      />
    );
  }
}
