import React, { useRef }  from 'react'
import './Forms.css'
import { useState } from 'react';
import CNavbar from '../../CNavbar';
import Footer from '../../Footer';
import { Rings } from 'react-loader-spinner'

import { Link } from 'react-router-dom';

const TraineeForm = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: '',
  });

  const scriptUrl = "https://script.google.com/macros/s/AKfycbxBVOH4dERUM--PpJdLDvqNcmSORhbGpJb8LY46vewkq2QMI2Wv3Auy2pYTpDSgwm_K/exec";
  const [loading, setLoading] = useState(false)
  const [submit,setsubmit]=useState(false);

  const handleSubmit2 = async(e) =>{
    e.preventDefault()
  
    setLoading(true)
    // debugger
    const x = new FormData(formRef.current);
   await fetch(scriptUrl, {
  
    method: 'POST', 

    body: x,

}).then(res => {
        console.log("SUCCESSFULLY SUBMITTED")
    
        setLoading(false)
        setsubmit(true);
    })
    .catch(err => console.log(err))
}
  

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send form data to a server)
    console.log('Form Data:', formData);
    alert('Application submitted successfully!');
  };

  return (
    <>
    <CNavbar/>
  <div className="bg mt-20 ">
    <div className="form  ">
    <div className="form-container   pt-3 md:pt-0 pb-3 md:pb-0">
      <h2 className='head text-2xl md:text-3xl '>Apply as a Trainee</h2>
      <div className={`bg-white/90 ${submit?"block":"hidden"} backdrop-blur-md   rounded-md md:py-2  text-black`}>
          <iframe className='  md:m-auto' src='https://lottie.host/embed/044ba384-905c-4b75-8596-54c113df19f1/pYuAhzDInA.json'></iframe>
          <h3 className='text-center  text-2xl font-semibold'>Thank You!</h3>
          <p className='text-center my-6 md:mx-20 mx-5 text-lg'>Your Details Has Been Successfully Submitted</p>
          <Link to={"/"}>
          <div className=' my-3 inline-flex justify-center w-full '><button className='bg-red-600 inline-flex md:flex gap-2 text-white py-2 px-4 rounded-md'>
          <svg width={"1.3rem"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20ZM12 11H16V13H12V16L8 12L12 8V11Z"></path></svg>Home
          </button>
          </div>
          </Link>
          
          <p></p>
        </div>
        
      <form className={`${submit?"hidden":"block"}`}  onSubmit={handleSubmit2} ref={formRef} name='Intern-form '>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="resume">Resume Link</label>
          <input
            type="text"
            id="resume"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="coverLetter">Cover Letter</label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>
<br/>
        <div className="cx">
        <button className='buttonS text-sm md:text-xl text' type="submit">
        <Rings
  visible={loading}
  height="30"
  width="100"
  color="red"
  ariaLabel="rings-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
        <span className={`${loading?"hidden":"block"}`}>Submit Application</span></button></div>
        
      </form>
      </div>
   </div>
   </div>
   <Footer/>
   </>
  );
}

export default TraineeForm
