import React from "react";
import PreviewCircle from "./PreviewCircle";

export default class CircleForm extends React.Component {
  state = {
    circle: { size: 1, color: "#0000ff", animated: false }
  };

  addCircle() {
    this.props.addCircle(this.state.circle);
  }

  render() {
    const circle = this.state.circle;
    return (
      <div className="circle-form">
        <input
          type="color"
          value={circle.color}
          onChange={e =>
            this.setState({ circle: { ...circle, color: e.target.value } })
          }
        />
        <input
          type="range"
          value={circle.size}
          min="1"
          max="10"
          step="1"
          onChange={e =>
            this.setState({
              circle: { ...circle, size: Number.parseInt(e.target.value, 10) }
            })
          }
        />
        <div>
          <label for="animated">Animated</label>
          <input
            id="animated"
            type="checkbox"
            value={!!circle.animated}
            onChange={e =>
              this.setState({
                circle: { ...circle, animated: e.target.checked }
              })
            }
          />
        </div>
        <div className="preview-wrapper">
          <PreviewCircle circle={circle} />
        </div>

        <button onClick={() => this.addCircle()}>Add</button>
      </div>
    );
  }
}
