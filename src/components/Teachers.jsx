import React, { Component } from "react";
import { connect } from "react-redux";

export class Teachers extends Component {
  state = {
    value: ""
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h1> Teachers</h1>
        <hr />
        State from Products in Component Teachers:
        <ul>
          {this.props.arrProducts.map((item, index) => {
            return <li key={index}> {item}</li>;
          })}
        </ul>
        <hr />
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button
          onClick={() => {
            this.props.addTeacher(this.state.value);
            this.setState({ value: "" });
          }}
        >
          ADD TEACHER
        </button>
        <ul>
          {this.props.arrTeachers.map((item, index) => {
            return <li key={index}> {item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

//get data
const mapStateToProps = state => {
  return { arrTeachers: state.arrTeachers, arrProducts: state.arrProducts };
};

// push data
const mapDispatchToProps = dispatch => {
  return { addTeacher: abc => dispatch({ type: "addTeacherS", payload: abc }) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Teachers);
