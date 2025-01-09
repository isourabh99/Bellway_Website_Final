import React, { useRef, useState } from 'react';
import './Forms.css';
import CNavbar from '../../CNavbar';
import Footer from '../../Footer';
import { Rings } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import axios from 'axios';

const TraineeForm = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_no: '',
    resume: '',
    cover_letter: '',
  });

  const scriptUrl = "https://admin.bellwayinfotech.com/api/admin/freshers";
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData(formRef.current);

    try {
      const response = await axios.post(scriptUrl, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        setSubmit(true);
        console.log("Form submitted successfully");
      }
    } catch (error) {
      console.error("Error submitting the form:", error.response?.data || error.message);
      alert("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  return (
    <>
      <CNavbar />
      <div className="bg mt-20">
        <div className="form">
          <div className="form-container pt-3 md:pt-0 pb-3 md:pb-0">
            <h2 className="head text-2xl md:text-3xl">Apply as a Trainee</h2>

            {/* Success Message Section */}
            {submit && (
              <div className="bg-white/90 backdrop-blur-md rounded-md md:py-2 text-black">
                <iframe
                  className="md:m-auto"
                  src="https://lottie.host/embed/044ba384-905c-4b75-8596-54c113df19f1/pYuAhzDInA.json"
                  title="Success Animation"
                ></iframe>
                <h3 className="text-center text-2xl font-semibold">Thank You!</h3>
                <p className="text-center my-6 md:mx-20 mx-5 text-lg">
                  Your Details Have Been Successfully Submitted
                </p>
                <Link to="/">
                  <div className="my-3 inline-flex justify-center w-full">
                    <button className="bg-red-600 inline-flex gap-2 text-white py-2 px-4 rounded-md">
                      Home
                    </button>
                  </div>
                </Link>
              </div>
            )}

            {/* Form Section */}
            {!submit && (
              <form onSubmit={handleSubmit2} ref={formRef}>
                {/* Full Name */}
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

                {/* Email */}
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

                {/* Phone */}
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="number"
                    id="phone"
                    name="phone_no"
                    value={formData.phone_no}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Resume */}
                <div className="form-group">
                  <label htmlFor="resume">Resume Link</label>
                  <input
                    type="text"
                    id="resume"
                    name="resume"
                    value={formData.resume}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Cover Letter */}
                <div className="form-group">
                  <label htmlFor="coverLetter">Cover Letter</label>
                  <textarea
                    id="coverLetter"
                    name="cover_letter"
                    value={formData.cover_letter}
                    onChange={handleChange}
                    rows="4"
                    required
                  ></textarea>
                </div>

                {/* Submit Button with Loader */}
                <br />
                <div className="cx">
                  <button className="buttonS text-sm md:text-xl" type="submit">
                    {loading ? (
                      <Rings height="30" width="100" color="red" ariaLabel="loading" />
                    ) : (
                      <span>Submit Application</span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TraineeForm;
