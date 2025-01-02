import React from 'react'
import './Forms.css'
import { useState,useRef } from 'react';
import CNavbar from '../../CNavbar';
import Footer from '../../Footer';
import { Rings } from 'react-loader-spinner'
import { Link } from 'react-router-dom';
const ExperienceJoineeForm = () => {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    currentCTC: '',
    noticePeriod: '',
    experience: '',
    role: '',
    resume: null,
    
  });

  const scriptUrl = "https://script.google.com/macros/s/AKfycbyLP-fUEiClYqbCO_5Bn9j04b4m_gmO5B9s_j7n7idyPXeegkuIMRD5N5UX9AoZGbNaDA/exec";
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
       <div className="bg mt-20">
   
      <div className="form">
    <div className="form-container">
      <h2 className='head text-xl mt-4 md:mt-0 md:text-3xl'>Join with your Experience</h2>
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
      <form className={`${submit?"hidden":"block"}`} onSubmit={handleSubmit2} name='google-sheet' ref={formRef}>
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
            name="email"Join Us with Your Experience
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
          <label htmlFor="location">Current Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="currentCTC">Current CTC</label>
          <input
            type="text"
            id="currentCTC"
            name="currentCTC"
            value={formData.currentCTC}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="noticePeriod">Notice Period</label>
          <input
            type="text"
            id="noticePeriod"
            name="noticePeriod"
            value={formData.noticePeriod}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="experience">Total Experience (in years)</label>
          <input
            type="number"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="resume">Resume Link</label>
          <input
            type="text"
            id="resume link"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            required
          />
        </div><br/>

        <div className="form-group  mx-0 ">
          {/* <label htmlFor="role">Preferred Role</label> */}
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className='w-60  md:w-[31rem] md:mx-14   rounded-md h-9'
          >
            <option value="">Select Role</option>
            <option value="react">React Developer</option>
            <option value="laravel">Laravel Developer</option>
            <option value="node">Node.js Developer</option>
          </select>
        </div><br/>

       <div className='cx'>
       <button className='buttonS text-sm mb-4 md:mb-0 md:text-xl' type="submit">
       <Rings
  visible={loading}
  height="30"
  width="100"
  color="red"
  ariaLabel="rings-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
       <span className={`${loading?"hidden":"block"}`}>Submit Application</span></button>
        </div> 
      </form>
    </div>
    </div>

    </div>
    <Footer/>
    </>
  );
}

export default ExperienceJoineeForm






