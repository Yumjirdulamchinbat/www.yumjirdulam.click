import React, { useState } from 'react';
import css  from './Footer.module.scss';
import {motion} from "framer-motion";
import { staggerChildren, footerVariants } from '../../utils/motion';
import { v4 as uuidv4 } from 'uuid'
const Footer = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    message: '' 
});

//   const handleChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setData({ ...data, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(JSON.stringify(data));
//   };


const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      
      const response = await fetch("https://39o8a1ji6d.execute-api.us-east-1.amazonaws.com/prod/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({"id": uuidv4(),"name": formData.name,"email": formData.email, "message": formData.message, "phone": formData.phone}),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <motion.section 
    variants={staggerChildren}
     initial="hidden"
     whileInView="show"
     viewport={{once: false, amount: 0.25}}
     className={`paddings ${css.wrapper}`}>


      <form method="post">
        <h1>
          Contact<span> Me</span>
        </h1>
        <input type="text" name="name" onChange={handleChange} value={formData.name} placeholder="Enter name" />
        <input type="email" name="email" onChange={handleChange} value={formData.email} placeholder="example@gmail.com" />
        <input type="phone" name="phone" onChange={handleChange} value={formData.phone} placeholder="+1" />
        <textarea name="message" onChange={handleChange} value={formData.message} rows="10" placeholder="type here..." />
        <button onClick={handleSubmit} type="submit">Submit</button>
        {/* <p>
          {data.name} {data.email} {data.phone} {data.message}
        </p> */}
      </form>
    
      </motion.section>
  );
};

export default Footer;