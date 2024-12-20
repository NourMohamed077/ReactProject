import 'bootstrap/dist/css/bootstrap.min.css'; 
import "bootstrap/dist/js/bootstrap.bundle";
import React from 'react';

function Footer() {
  const links = [
    ['SUBSCRIBE & SAVE', 'GIFT CARDS', 'ABOUT GIFT CARDS', 'AFTERPAY'],
    ['CHECK GIFTCARD BALANCE', 'RETURNS & EXCHANGES', 'CAREERS', 'ACCOUNT SIGN-UP / LOGIN'],
    ['SAME DAY DELIVERY', 'GIVE $10, GET $10', 'INCLUSION & DIVERSITY', 'STUDENT & TEACHER DISCOUNT'],
    ['ACCESSIBILITY', 'TERMS & CONDITIONS', 'SUPPLIER RELATIONS', 'FIND A STORE'],
    ['INGREDIENTS', 'ARTISTRY', 'COMMITMENTS', 'SHIPPING'],
    ['TRACK MY ORDER', 'NEED HELP?', 'PROMOTIONS', 'SHOPPING'],
  ];

  return (
    <div className="container-fluid text-light p-4" style={{ background: '#091057'}}>
      <h1>WANT MORE HELP?</h1><br/>
      <div>
        {links.map((row, rowIndex) => (
          <div className="row m-2" key={rowIndex}>
            {row.map((link, index) => (
              <div className="col-md-3 col-sm-6" key={index}>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>{link}</a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;