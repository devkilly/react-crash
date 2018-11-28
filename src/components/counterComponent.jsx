import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value,
    tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize: "10px",
    fontWeight: "bold"
  };
  renderTags() {
    if (this.state.tags.length === 0) return <b>There are no tags!</b>;
    else
      return (
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
  }
  // Método para incrementar o contador pelo botao
  handleIncrement = () => {
    console.log("Increment Clicked");
    this.setState({ count: this.state.count + 1 });
  };

  //*********************************************************** */
  render() {
    console.log("props:", this.props);
    return (
      <div>
        {this.props.children}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.renderTags()}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state; // local variable for count in state

    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
