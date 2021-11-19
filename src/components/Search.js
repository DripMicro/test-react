import React, { Component } from 'react'
import '../styles/Search.css';
import ToggleColumns from './ToggleColumns';
import ProductList from './ProductList';
import FilterForm from './FilterForm';
import products from '../assets/products.json'

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      priceFrom: '',
      priceTo: '',
      columns: {
        id: true,
        name: true,
        department: true,
        currency: true,
        price: true
      }
    };
    this.onPriceInputChange = this.onPriceInputChange.bind(this);
    this.filterProducts = this.filterProducts.bind(this);
    this.onCheckboxClick = this.onCheckboxClick.bind(this);
  }

  onPriceInputChange = (event)  => {
    const { name, value } = event.target;
    if(value < 0){
      value = 0;
    }
    this.setState({
        [name]: value
    });
  }

  filterProducts = () => {
    // to-do: implement handler for filtering products by price range
  }

  onCheckboxClick = (name, value) => {
    let coloums = this.state.columns;
    coloums[name] = !value;
    console.log(coloums)
    this.setState({
      coloums: coloums
  });
  }

  render() {
    let priceFrom = this.state.priceFrom;
    let priceTo = this.state.priceTo;
    if (priceFrom == '') {
      priceFrom = 0;
    }
    if (priceTo == '' || priceTo == 0) {
      priceTo = 999999;
    }
    if (priceFrom == 1000 && priceTo == 100) {
      priceTo = 999999;
      priceFrom = 0;
    }
    let displayedProducts = [];
    for(let i = 0 ; i < products.length; i ++ ){
      let product = products[i];
      let temp = {}
      
        if (product.price >= priceFrom && product.price <= priceTo ){
          if(this.state.columns.id) temp.id = product.id
          if(this.state.columns.name) temp.name = product.name
          if(this.state.columns.department) temp.department = product.department
          if(this.state.columns.currency) temp.currency = product.currency
          if(this.state.columns.price) temp.price = product.price
          //  temp.id = this.state.columns.id ? product.id : false
          //  temp.name = this.state.columns.name ? product.name : false
          //  temp.department = this.state.columns.department ? product.department : false
          //  temp.currency = this.state.columns.currency ? product.currency : false
          //  temp.price = this.state.columns.price ? product.price : false
           displayedProducts.push(temp);
      }
    }
    console.log(displayedProducts)

    // let displayedProducts = products.map((product, index) => (
    //     product.price >= priceFrom && product.price <= priceTo ?
    //       <tr key={index}>
    //         {this.state.columns.id ? <td>{product.id}</td> : ''}
    //         {this.state.columns.name ? <td>{product.name}</td> : ''}
    //         {this.state.columns.department ? <td>{product.department}</td> : ''}
    //         {this.state.columns.currency || this.state.columns.price ? 
    //           <td>{this.state.columns.currency && product.currency}{this.state.columns.price && product.price}</td>
    //         : ''}
    //       </tr>
    //    : ''
    // ))


    return (
      <div className="Products">
        <FilterForm
          priceFrom={this.state.priceFrom}
          priceTo={this.state.priceTo}
          onPriceInputChange={this.onPriceInputChange} />

        <ToggleColumns
          onCheckboxClick={this.onCheckboxClick}
          columns={this.state.columns} />

        <ProductList
          products={displayedProducts}
          columns={this.state.columns} 
        />
      </div>
    );
  }
}
