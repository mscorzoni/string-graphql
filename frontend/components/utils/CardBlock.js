import React from 'react';
import Card from './Card';
import Link from 'next/link';

const CardBlock = props => {

  const renderCards = () => (
    props && (
      props.map((card, i) => (
        <Link 
          href={{
            pathname: '/product',
            query: { id: card.id }
          }}
        >
          <a>
            <Card 
              key={i}
              {...card}
            />
          </a>
        </Link>
      ))
    )
  )

  return (
    <div className="card_block">
      <div className="container">
        {
          props.title && (
            <div className="title">
              props.title
            </div>
          )
        }
        <div style={{
          display: 'flex',
          flexWrap: 'wrap'
        }}>
          { renderCards(props) }
        </div>
      </div>
    </div>
  );
};

export default CardBlock;