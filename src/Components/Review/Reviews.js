import React from 'react';
import useReviews from '../../Hooks/useReview';
import './Review.css'
// import useReviews from '../../Hooks/useReview';
const Reviews = () => {
    const [Reviews, SetReviews] = useReviews();

    return( 
            <div className='container my-5'>
                <div className='row text-center '>
                <h3 className='mb-5'> Our client's all Reviews</h3>
               
               <div className="review-container">
               {
                    Reviews.map(perReviews => 
                        <div className='review-info text-center col-12 col-md-5'>
                             <div className='review-img'>
                            <img src={perReviews.img} alt="" />
                            </div>
                            <div className='reviewtext'>
                        <h5>{perReviews.name}</h5>
                        <p>{perReviews.ratings}</p>
                        <p>{perReviews.comment}</p>
                            </div>
                        </div>                       
                    
                     )
                }
               </div>
            </div>
            </div>
    );
};

export default Reviews;