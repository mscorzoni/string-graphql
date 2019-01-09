import React, { Component } from 'react';
import GeneralStyles from './styles/GeneralStyles';
import Header from  './Header_Footer/Header';
import Footer from './Header_Footer/Footer';
import Meta from './Meta';

class Page extends Component {
  render() {
    return (
      <GeneralStyles>
        <Meta />
        <Header />
        <div className="page_container">
          {this.props.children}
        </div>
        <Footer />
      </GeneralStyles>
    );
  }
}

export default Page;