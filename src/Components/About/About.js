import React from 'react';
import './About.css'
 import img01 from '../../assets/images/img03.jpg';
 import img02 from '../../assets/images/img07.jpg';
 import img03 from '../../assets/images/img08.jpg';
 
const About = () => {
    return (
        <div className='container'>
            <div className="row">

            <div className="about-section">
  <h1>About Us</h1>
  <h4>Eating is one of life's pleasure and pride  so is cooking and serving <br />good food to others</h4>
  <p>Our Cafe is generally an establishment where the public may obtain meals or refreshments.</p>
</div>

<h2 className='py-5 text-center'>Our Team</h2>
<div className="allcolumn">
  <div className="column">
    <div className="card">
      <img src={img01} alt="Jane"/>
      <div className="container">
        <h2>Mahmodul Karim</h2>
        <p className="title">Kitchen manager</p>
        <p>Efficient kitchens are well-organized kitchens. Most kitchens are organized into stations or sections </p>
        <p>mkarimcu12@gmail.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src={img02} alt="Mike"/>
      <div className="container">
        <h2>Jahidul Islam</h2>
        <p className="title">Dining room or restaurant manager</p>
        <p>restaurant and dining room managers having their own teams of servers, hosts/hostesses, bussers, and bartenders to serve guests.</p>
        <p>jahidul@gmail.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
      <img src={img03} alt="John"/>
      <div className="container">
        <h2>John Doe</h2>
        <p className="title">Kitchen Porter</p>
        <p> He is training and experience as the chefs. This person is in charge of simple but important tasks involved in the basic preparations of the food.</p>
        <p>john@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default About;