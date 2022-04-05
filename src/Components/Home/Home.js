import React from 'react';
import useReviews from '../../Hooks/useReview';
import BannerImg from '../../assets/images/coffe-banner.jpg'
import { useNavigate } from 'react-router-dom';
import './Home.css'
import { Card } from 'react-bootstrap';

const Home = () => {
    const navigation = useNavigate();
    const [Reviews, SetReviews] = useReviews();
    return (
        <div className='container'>
           <div className="banner-part m-auto d-flex mt-5">
               <div className="banner-text col-8 mt-4">
               <h1>One Stop Cafe</h1>
               <p>One Stop Cafe mission is to provide the highest quality food and beverage especially the coffee market for a reasonable price and homemade products. Our cafe wants to be in the business of helping the customers to relieve their daily stresses activity by providing piece of mind through great ambience, convenient location and the best customer service.</p>
               <button onClick={()=>navigation('/aboutUs')} className='btn btn-warning pointer' style={{ background: '#a65000',color:'white'}}>Learn More</button>
               </div>
              <div className="bannerimg col-4">
                  <img src={BannerImg} alt="" width={300} height={300}/>
              </div>
           </div>

            <div className="container review-container mt-5">
                <h3 className='review-header text-center pb-4'>what our clients say</h3>
                <div className="reviewer">

          {
              Reviews.slice(0,3).map(comment => 
              <div className='Card cardStyle text-center'>
                  <div className="img">
                      <img className='img-fluid' src={comment.img} alt="" width={100} height={100}/>
                  </div>
                  <div className="card-text">
                      <div className="ratin">
                         <p>{comment.ratings}</p> 
                      </div>
                       <h4>{comment.name}</h4>
                      <p>{comment.comment}</p>
                  </div>
                 
              </div>
              )
          }
        
          </div>
            <div className="btn-review mt-3 pb-4 text-center">
              <button onClick={()=>navigation('/reviewss')} className="btn btn-warning" style={{ background: '#a65000',color:'white'}}>See all Reviews</button>
          </div>
            </div>
        </div>
    );
};

export default Home;