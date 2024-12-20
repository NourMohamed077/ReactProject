import 'bootstrap/dist/css/bootstrap.min.css'; 
import "bootstrap/dist/js/bootstrap.bundle";
import React from 'react';

function Home () {
  return(
    <div className="container">
      <br/><br/><br/><br/><br/><br/>
      <div className="row justify-content-center align-content-center gap-5">
        <div className="col-md-6 col-xs-12 text-center">
          <br/><br/><br/>
          <h1>Rule your space</h1>
          <p>We cover intrusion protection, comfort and automation, fire and life safety, and video surveillance. All integrated in one system.</p>
          <br/>
          <a className="btn btn-primary" href="/Products">Where To Buy</a>
          <br/>
        </div>
        <div className="col-md-5 col-xs-12 text-center">
          <img className="w-75" src="https://th.bing.com/th/id/R.94750c4f89cb32a61af51ec76d2ca160?rik=7DJwVYVwbr9OBA&pid=ImgRaw&r=0"></img>
        </div>
      </div>
      <br/><br/>
      <div>
        <h1>Explore Our Products</h1>
        <p>Berimbolo offers more ways to keep your home safe. Advanced technology and monitoring agents work together to protect you from break-ins and hazards even deterring intruders before they get inside.</p>
      </div>
      <br/><br/>
      <div className="row justify-content-center gap-3">
        {[
          {
            img: "https://th.bing.com/th/id/R.57517e29b523a0e1630345c5b68e59cc?rik=SheKyvbwuqj5Ug&riu=http%3a%2f%2fwww.lifoarey.com%2fcdn%2fshop%2ffiles%2f6391ace427ade714b70fb966024ae804_6c1ff484-20e4-4451-82f4-27b446db217b.jpg%3fv%3d1693994696&ehk=BKNmAjXeW8NZ0rSrd0uB8lW0GR%2fj0B7otKUDw5Hbimc%3d&risl=&pid=ImgRaw&r=0",
            title: "Amcrest TVL 960H",
            description: "This camera is appropriate for anyone who is looking for optimal coverage of multiple rooms or angles.",
          },
          {
            img: "https://www.ukcctv.com/wp-content/uploads/2023/12/DS-2CD2346G2-IU2.8MMBC.webp",
            title: "Vimtag P1 Ultra IP",
            description: "One of the attributes Vimtag stand out from other products in the market is the ability to set it up.",
          },
          {
            img: "https://site-1306369054.file.myqcloud.com/5170989429839502/2022/01/ka6f5jc4TY.jpg?imageMogr2/thumbnail/520x520/pad/1/color/I0ZGRkZGRg==/sharpen/100/format/webp/ignore-error/1",
            title: "Nest Cam Indoor",
            description: "This is one of the gadgets that you will find on the best home security cameras list.",
          },
        ].map((product, index) => (
          <div key={index} className="card col-md-3 p-2 m-2 gab-4" style={{ width: '20rem'}}>
            <img src={product.img} alt={product.title} />
            <h5>{product.title}</h5>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
      <br/><br/>
      <div class="p-3 text-center" style={{ background: '#9ECDFFFF', borderRadius: '10px'}}>
        <h1>SHOP OUR Security'S DAY GIFT GUIDE</h1>
        <p>Order by 12pm ET on 2.12 to get your gifts by 2.14!</p>
      </div>
      <br/><br/>
      <div className="row justify-content-center">
        <div className="col-md-3 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-headset" viewBox="0 0 16 16">
            <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5"/>
          </svg>
          <h6>Your first month of professional monitoring is free.</h6>  
        </div>
        <div className="col-md-3 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
            <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/>
          </svg>
          <h6>No contracts. No cancellation fees. No kidding.</h6>  
        </div>
        <div className="col-md-3 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-house-lock" viewBox="0 0 16 16">
            <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207l-5 5V13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.207l-.646.647a.5.5 0 1 1-.708-.708z"/>
            <path d="M10 13a1 1 0 0 1 1-1v-1a2 2 0 0 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1"/>
          </svg>
          <h6>Easy to install yourself or choose optional pro install.</h6>  
        </div>
        <div className="col-md-3 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-shield-check" viewBox="0 0 16 16">
            <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"/>
            <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
          </svg>
          <h6>60-day money-back guarantee with free return shipping.</h6>  
        </div>
      </div>
      <br/><br/>
      <h1>BEST SELLERS:</h1>
      <div className="row justify-content-center">
        {[
          {
            img: "https://www.camcentral.net/wp-content/uploads/2024/03/axis-q1808-le-bullet-camera.jpg",
            text: "Defiant Simplified Home Security.",
          },
          {
            img: "https://th.bing.com/th/id/OIP.x4YOFPDh_5hpEE5s-c6AGAHaHa?rs=1&pid=ImgDetMain",
            text: "Hanwha series AI IR Bullet Camera.",
          },
          {
            img: "https://www.bhphotovideo.com/images/images500x500/axis_communications_02342_001_p1468_le_8mp_outdoor_network_1714647653_1713377.jpg",
            text: "Camera Auto-Tracking IP Security Camera.",
          },
          {
            img: "https://th.bing.com/th/id/OIP.FSfXfZuQSM0DZ3sfupb0pgHaHa?w=500&h=500&rs=1&pid=ImgDetMain",
            text: "Pan-Tilt Indoor Camera plus security.",
          },
        ].map((item, index) => (
          <div key={index} className="col-md-3 col-xs-6" style={{ width: '17rem'}}>
            <div className="card m-2 p-2">
              <img src={item.img} className="card-img" alt={item.text}/>
              <p className="card-text">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      <br/><br/>
      <div className="text-center">
        <h6>NOW AVAILABLE</h6>
        <h1>ORDER TODAY, GET IT TODAY</h1>
      </div>
      <br/><br/>
      <div className="row justify-content-center gap-5">
        {[
          {
            title: "Purchase Berimbolo devices",
            description: "Search for companies selling and/or installing security and automation devices.",
            button: "Where To Buy",
          },
          {
            title: "Start a new Berimbolo story",
            description: "Become a partner of Berimbolo Systems as an official distributor, authorized reseller.",
            button: "Become a Partner",
          },
        ].map((option, index) => (
          <div
            key={index}
            className="col-md-6 p-4"
            style={{ background: "#D4E2FCFF", borderRadius: "10px" , width: "30rem"}}
            >
            <h2>{option.title}</h2>
            <p>{option.description}</p>
            <br/>
            <button type="button" className="btn btn-primary">{option.button}</button>
          </div>
        ))}
      </div>
      <br/><br/>
      <div>
        <h1>Solutions overview</h1>
        <p>Discover our comprehensive solutions for various facility types, as well as the stories of our customers and partnerships. Assemble your own kit of Berimbolo devices for security and comfort.</p>
      </div>
      <br/><br/>
      <div className="row justify-content-center gap-3">
        <div className="col-md-3">
          <div className="card">
            <img className="p-3 m-3" src="https://i.pinimg.com/originals/eb/af/f7/ebaff71eb10e32c694c1b0b007a2924a.jpg"/>
          </div><br/>
          <h5>Assemble your Berimbolo.</h5>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img className="m-2" src="https://th.bing.com/th/id/OIP.ytSE3VG6_4CBRXIYq5RNSQHaFP?w=625&h=443&rs=1&pid=ImgDetMain"/>
          </div><br/>
          <h5>Solutions by facility type.</h5>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img className="" src="https://th.bing.com/th/id/OIP.OqGAWnv5PRsqJjdChC0rSAHaFa?w=626&h=458&rs=1&pid=ImgDetMain"/>
          </div><br/>
          <h5>Berimbolo Ready products.</h5>
        </div>
      </div>
      <br/><br/>
    </div>
  )
};

export default Home;