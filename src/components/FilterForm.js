import React, { Component } from 'react'

export default class FilterForm extends Component {

  // onPriceInputChange = (e) => {
  //   // to-do: implement handler
  // }

  render() {
    let {priceFrom, priceTo, onPriceInputChange} = this.props;
    return (
      <div>
        {/* Bind handlers and props */}
        <label htmlFor="name">Filter:</label>
        <input
          type="number"
          name="priceFrom"
          value= {priceFrom}
          min={0}
          max={999999}
          onChange = {onPriceInputChange}
          placeholder="Price from..." />
        <input
          type="number"
          name="priceTo"
          value= {priceTo}
          min={0}
          max={999999}
          onChange = {onPriceInputChange}
          placeholder="Price to..." />
      </div>
    )
  }
}
