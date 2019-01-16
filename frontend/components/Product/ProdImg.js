import React, { Component } from 'react';

class ProdImg extends Component {

  renderCardImage = (images) => {
    if(images && images.length > 0){
      return images[0].url
    } else {
      return '/static/image_not_availble.png'
    }
  }

  render() {
    const { detail } = this.props;
    return (
      <div className="product_image_container">
        <div className="main_pic">
          <div
            style={{ background: `url(${this.renderCardImage(detail)}) no-repeat` }}
          >
          </div>
        </div>
      </div>
    );
  }
}

export default ProdImg;