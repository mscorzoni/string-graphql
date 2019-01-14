import React, { Component } from 'react';
import GeneralStyles from './styles/GeneralStyles';
import Header from  './Header_Footer/Header';
import Footer from './Header_Footer/Footer';
import Meta from './Meta';
import styled from 'styled-components';

const Inner = styled.div`
  margin: 0 auto;
  padding: 2rem;
`;

class Page extends Component {
  render() {
    return (
      <GeneralStyles>
        <Meta />
        <Header />
        <Inner>
          <div className="page_container">
            {this.props.children}
          </div>
        </Inner>
        <Footer />
      </GeneralStyles>
    );
  }
}

export default Page;