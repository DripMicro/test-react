import React, { Component } from 'react'

export default class ProductList extends Component {

  render() {
    let {products, columns} = this.props;
    console.log(columns.id)
    return (
      <div id="product-list">
        <header>
          <strong>Product List ({} items)</strong>
        </header>
        <table>
          <thead>
            <tr>
              {columns.id ? <th>ID</th> : ''}
              {columns.name ? <th>Name</th> : ''}
              {columns.department ? <th>Department</th> : ''}
              {columns.price ? <th>Price</th> : ''}
              {columns.currency ? <th>currency</th> : ''}
            </tr>
          </thead>
          <tbody>
              { 
                products.map((product, index) => (
                  <tr key={index}>
                    {columns.id && <td>{product.id}</td>}
                    {columns.name && <td>{product.name}</td>}
                    {columns.department && <td>{product.department}</td>}
                    {columns.price && <td>{product.price}</td>}
                    {columns.currency && <td>{product.currency}</td>}
                  </tr>
                ))
              }
          </tbody>
        </table>
      </div>
    )
  }
}

