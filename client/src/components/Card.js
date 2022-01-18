import React from 'react';
import './Card.css';

function Card({ post }) {
    return (
        <div className='card'>
            <p className='card__title'>Title: {post.title}</p>
            <p className='card__author'>Author: {post.author}</p>
            <p className='card__body'>{post.body}</p>
        </div>
    )
}

export default Card
