import React from 'react';
import useReviews from '../../Hooks/useReview';
import Review from './Review';
// import useReviews from '../../Hooks/useReview';
const Reviews = () => {
    const [Reviews, SetReviews] = useReviews();

    return( 
            <div>
                <h1>Product: {Reviews.length}</h1>
               
               <div className="review-container">
               {
                    Reviews.map(perReviews =>
                        <div>
                             <div>
                            <img src={perReviews.img} alt="" />
                            </div>
                            <div className='reviewtext'>
                        <h3>{perReviews.name}</h3>
                        <h4>{perReviews.rating}</h4>
                        <p>{perReviews.comment}</p>
                            </div>
                        </div>                       
                    
                    )
                }
               </div>
            </div>
       
    );
};

export default Reviews;