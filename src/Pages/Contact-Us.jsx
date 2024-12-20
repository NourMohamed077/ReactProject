import 'bootstrap/dist/css/bootstrap.min.css'; 
import "bootstrap/dist/js/bootstrap.bundle";
import React from 'react';

function Contact() {
  return(
    <div class="container">
        <br></br><br></br><br></br><br></br><br></br>
        <form class="m-auto p-4">
            <h1 class="text-center">Contact Us</h1>
            <div class="mb-3">
              <label class="form-label">Name:</label>
              <input type="text" class="form-control" placeholder="Enter Your Name..." required></input>
            </div>
            <div class="mb-3">
              <label class="form-label">Email:</label>
              <input type="email" class="form-control" placeholder="Enter Your Email..." required></input>
            </div>
            <div class="mb-3">
              <label class="form-label">Password:</label>
              <input type="password" class="form-control" placeholder="Enter Your Password..." required></input>
            </div>
            <div class="mb-3">
              <label class="form-label">City:</label>
              <input type="text" class="form-control" placeholder="Enter Your City..."></input>
            </div>
            <div class="mb-3">
              <textarea class="form-control" rows="3" placeholder="Enter Your Message..."></textarea>
            </div>
            <br></br>
            <button type="submit" class="btn btn-primary w-100">Submit</button>
        </form>
        <br></br><br></br>
    </div>
  )
};
 
export default Contact;