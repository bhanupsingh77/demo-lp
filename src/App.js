import React, { Component } from 'react';
import Header from '../src/components/Header.js';
import ImageUploader from '../src/components/ImageUploader.js';
import ProductShowcase from '../src/components/ProductShowcase.js';
import ImageDrager from '../src/components/ImageDrager.js';
import StaticSec1 from '../src/components/StaticSec1.js';
import StaticSec2 from '../src/components/StaticSec2.js';

class App extends Component {
  constructor(props) {
    super(props)


  }

  render() {
    return (
      <div>
        <Header />
        <ImageUploader />
        <ProductShowcase />
        <ImageDrager />
        <StaticSec1 />
        <StaticSec2 />
      </div>
    )
  }
}

export default App;