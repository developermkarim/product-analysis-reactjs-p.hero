import React from 'react';
import useReviews from '../../Hooks/useReview';

const Home = () => {
    const [Reviews, SetReviews] = useReviews();
    return (
        <div>
           

            <div className="review-container">
          {
              Reviews.slice(0,3).map(comment => 
              <div>
                  <div className="img">
                      <img src={comment.img} alt="" />
                  </div>
                  <h1>{comment.name}</h1>
              </div>)
          }
           
            </div>
        </div>
    );
};

export default Home;