import 'bootstrap/dist/css/bootstrap.min.css'; 
import "bootstrap/dist/js/bootstrap.bundle";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Style.css";

function ProductPage() {
  const navigate = useNavigate();
  const products = [
    {
      title: 'Defiant Simplified Home Security.',
      price: 870.0,
      image: 'https://www.security.org/app/uploads/2019/09/Lorex-Camera.png',
    },
    {
      title: 'Abode iota All-In-One Security Kit.',
      price: 930.0,
      image: 'https://th.bing.com/th/id/OIP.8nIz9iW-ZFeUr5te8JdczAHaE8?w=1200&h=800&rs=1&pid=ImgDetMain',
    },
    {
      title: 'Blue by ADT Home Security System.',
      price: 760.0,
      image: 'https://www.digital-key-world.com/media/20/1c/3a/1618478329/219710_03.jpg',
    },
    {
      title: 'Cove Home Security System.',
      price: 650.0,
      image: 'https://th.bing.com/th/id/OIP.I2ILpzzFjqDvrAxYhdNfCgAAAA?rs=1&pid=ImgDetMain',
    },
    {
      title: 'Cisco Pan-Tilt-Zoom 12x Camera.',
      price: 530.0,
      image: 'https://5.imimg.com/data5/SELLER/Default/2021/2/VZ/PS/XX/11556963/61adha3ywvl-sl1500--500x500.jpg',
    },
    {
      title: 'Outdoor PRO Dual Output Dome Camera.',
      price: 750.0,
      image: 'https://bolintechnology.com/wp-content/uploads/2023/04/IMG_4599-5-800-1-600x600.jpg',
    },
    {
      title: 'Camera Auto-Tracking IP Security Camera.',
      price: 630.0,
      image: 'https://m.media-amazon.com/images/I/51AXNznKT3L.jpg',
    },
    {
      title: 'Honeywell Camera Ptz eBay Get Honeywell.',
      price: 950.0,
      image: 'https://www.vacron.com/upload/product_pic/230911793056.png',
    },
    {
      title: 'Frontpoint Home Security.',
      price: 630.0,
      image: 'https://i5.walmartimages.com/asr/9502981a-e4f8-480c-aadc-11aa626a7eda.dbc40bed52c66cb79ace73b808e951ac.jpeg',
    },
    {
      title: 'Indoor Camere, 2nd Gen',
      price: 850.0,
      image: 'https://m.media-amazon.com/images/I/4107hbxfIrL._AC_SS450_.jpg',
    },
    {
      title: 'Pan-Tilt Indoor Camera plus',
      price: 730.0,
      image: 'https://i.pinimg.com/originals/e5/d8/8e/e5d88e2ff94cd66fca5d11e0cd48423f.jpg',
    },
    {
      title: 'Wired Doorbell Plus Camera',
      price: 950.0,
      image: 'https://www.7dayshop.com/media/catalog/product/d/o/dog-2w-black_04_2_1.jpg',
    },
    {
      title: 'Floodlight kit Camera Plus',
      price: 530.0,
      image: 'https://ae01.alicdn.com/kf/Sd5c78c59dd1d496cb2599c84c3f59a99Q/Screwless-Adhesive-Wall-Mount-Compatible-WithEufy-Security-Solo-Indoor-Cam-P24-Stick-On-Or-Screws-Easy.jpg_.webp',
    },
    {
      title: 'Connected Basic Kit Camera',
      price: 750.0,
      image: 'https://img.myipadbox.com/upload/store/product_l/EDA006295901D.jpg',
    },
    {
      title: 'Wired Doorbell Pro Camera',
      price: 630.0,
      image: 'https://th.bing.com/th/id/R.dea999aae807a68384bbda91ec36c3c8?rik=Hni1y315FUQ8Fw&riu=http%3a%2f%2fwww.homedepot.com%2fcatalog%2fproductImages%2f1000%2fed%2fed795f6d-43b1-4c23-b0d0-5516fe8c8934_1000.jpg&ehk=u%2fo4af%2fWMjqJPgX9MpInkRh2pzuALXjyvDXhGNBViC4%3d&risl=&pid=ImgRaw&r=0',
    },
    {
      title: 'Whole Home Deluxe Kit Cmera',
      price: 950.0,
      image: 'https://th.bing.com/th/id/OIP.P6NFiVpBWPMAyBAhVMtZ5QAAAA?rs=1&pid=ImgDetMain',
    },
  ];

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.title === product.title);
    if (exists) {
      alert("This item is already in the cart!");
      return;
    }
    const updatedCart = [...cart, { ...product, quantity: 1 }];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); 
  };

  const goToCart = () => {
    navigate("/Shopping-Cart");
  };

  return (
    <div className="container">
      <br/><br/><br/><br/><br/>
      <h1 className="text-center my-4" style={{ fontSize: '3rem' }}>Products</h1>
      <div className="row">
        {products.map((product, index) => (
          <div className="col-md-3" key={index}>
            <div className="card m-2">
              <img src={product.image} className="card-img-top p-2" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Price: ${product.price.toFixed(2)}</p>
                <div className="text-center">
                  <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br/>
      <div className="text-center my-4">
        <button className="btn btn-primary" onClick={goToCart}>Go to Shopping Cart</button>
      </div>
      <br/>
    </div>
  );
}

export default ProductPage;