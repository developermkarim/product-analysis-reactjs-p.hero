import React from 'react';
import useReviews from '../../Hooks/useReview';
import BannerImg from '../../assets/images/coffe-banner.jpg'

const Home = () => {
    const [Reviews, SetReviews] = useReviews();
    return (
        <div>
           <div className="banner-part">
               <div className="banner-text">
               <h1>One Stop Cafe</h1>
               <p>One Stop Cafe mission is to provide the highest quality food and beverage especially the coffee market for a reasonable price and homemade products. Our cafe wants to be in the business of helping the customers to relieve their daily stresses activity by providing piece of mind through great ambience, convenient location and the best customer service. The Cafe also has a mission and plan to provide job opportunities for community especially to local people.</p>
               </div>
              <div className="bannerimg">
                  <img src={BannerImg} alt="" />
              </div>
           </div>

            <div className="review-container">
          {
              Reviews.slice(0,3).map(comment => 
              <div>
                  <div className="img">
                      <img src={comment.img} alt="" />
                  </div>
                  <h1>{comment.name}</h1>
              </div>
              )
          }
           
            </div>
        </div>
    );
};

export default Home;