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
                        
                        <div><img src={perReviews.img} alt="" /></div>
                    
                    )
                }
               </div>
            </div>
       
    );
};

export default Reviews;