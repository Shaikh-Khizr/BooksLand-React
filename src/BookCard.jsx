import React from 'react';

import BuyIcon from './buy.svg';

const BookCard = ({ book }) => {
    return (
        <div className="book">
            <div>
                <p>{book?.title}</p>
            </div>

            <div>
                <img src={book?.image !== 'N/A' ? book?.image : 'https://via.placeholder.com/400'} alt={book?.title} />
            </div>

            <div>
                <span>{book?.price}</span>
                <a href={book?.url} target="_blank" rel="noreferrer">
                <img
                  src={BuyIcon}
                  alt="buy"
                  />
                  </a>
                <h3>{book?.subtitle}</h3>
            </div>
        </div>
    );
}

export default BookCard;