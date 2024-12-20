import 'bootstrap/dist/css/bootstrap.min.css'; 
import "bootstrap/dist/js/bootstrap.bundle";
import React from 'react';

function About() {
  return(
    <div>
      <br></br><br></br><br></br>
      <div className="container d-flex flex-wrap">
          <div class="col-md-6 col-xs-12">
              <br></br><br></br><br></br>
              <h1>About Berimbolo Security</h1>
              <br></br>
              <p>Berimbolo Security Services Systems is multidisciplinary in security consultations and 
                private guards (establishments, individuals, supply and installation of the latest 
                surveillance camera systems, security gates, protection and fire-fighting systems, 
                and anti-theft alarms) in addition to the best trained dogs for guarding. We have a 
                special department for cleaning and pest control. We can secure and equip conferences, 
                parties and companies.</p>
              <div>
                <br></br>
                <button type="submit" class="btn btn-primary w-100">Read More</button>
              </div>
          </div>
          <div class="col-md-6 col-xs-12">
            <br></br>
            <img class="w-100" src="https://static.vecteezy.com/system/resources/previews/012/982/082/non_2x/students-study-online-in-university-or-college-campus-girls-and-boys-learning-together-with-smartphone-laptop-books-distance-education-technology-concept-isometric-modern-illustration-vector.jpg"></img>
          </div>
      </div>
      <br></br><br></br>
    </div>
  )
};
 
export default About;