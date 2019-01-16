import React, { Component } from 'react';
import MyButton from './button';
import FormatMoney from '../../lib/formatMoney';

class Card extends Component {

  renderCardImage(images){
    if(images && images.length > 0){
      return images[0].url
    } else {
      return '/static/image_not_availble.png'
    }
  }

  render() {
    const props = this.props;
    return (
      <div className={`card_item_wrapper ${props.grid}`}>
        <div 
          className="image"
          style={{
            background: `url(${this.renderCardImage(props.images)}) no-repeat`
          }}
        >
        </div>
        <div className="action_container">
          <div className="tags">
            <div className="brand">{props.brand.name}</div>
            <div className="name">{props.name}</div>
            <div className="name">{FormatMoney(props.price)}</div>
          </div>

          { props.grid && (
            <div className="description">
              <p>{props.description}</p>
            </div>
          )}

          <div className="actions">
            <div className="button_wrapp">
              <MyButton 
                type="default"
                altClass="card_link"
                title="View product"
                linkTo="/"
                style={{
                  margin: '10px 0 0 0'
                }}
              />
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default Card;