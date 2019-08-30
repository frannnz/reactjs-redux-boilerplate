import React, { Component } from "react";
import { connect } from "react-redux";

export class Products extends Component {
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
        <h1> Products</h1>
        <hr />
        State from Teachers in Component Products:
        <ul>
          {this.props.arrTeachers.map((item, index) => {
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
            this.props.addProduct(this.state.value);
            this.setState({ value: "" });
          }}
        >
          ADD PRODUCT
        </button>
        <ul>
          {this.props.arrProducts.map((item, index) => {
            return <li key={index}> {item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

//get data
const mapStateToProps = state => {
  return { arrProducts: state.arrProducts, arrTeachers: state.arrTeachers };
};

// push data
const mapDispatchToProps = dispatch => {
  return {
    addProduct: abc => dispatch({ type: "addProductsS", payload: abc })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
