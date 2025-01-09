import React, { useState, useRef } from 'react';
import './Forms.css';
import CNavbar from '../../CNavbar';
import Footer from '../../Footer';
import { Rings } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ExperienceJoineeForm = () => {
  const formRef = useRef(null);

  const scriptUrl = "https://admin.bellwayinfotech.com/api/admin/experiences";
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [currentlocation, setCurrentocation] = useState("");
  const [currentctc, setCurrentctc] = useState("");
  const [noticeperiod, setNoticeperiod] = useState("");
  const [totalexperience, setTotalexperience] = useState("");
  const [resumelink, setResumelink] = useState("");
  const [selectedrole, setSelectedrole] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: fullname,
      email: email,
      phone_no: phoneno,
      current_location: currentlocation,
      current_ctc: currentctc,
      notice_period: noticeperiod,
      total_experience: totalexperience,
      resume_link: resumelink,
      selected_role: selectedrole,
    };
// console.log(formData);
// setSubmit(true)
    try {
      const response = await axios.post(scriptUrl, formData);
      setSubmit(true);
    } catch (error) {
      console.error('Error submitting the form:', error);

      // More specific error handling
      if (error.response) {
        // Server responded with a status code outside the range of 2xx
        console.error('Server Error:', error.response.data);
        alert(`Error: ${error.response.data.message || "Something went wrong on the server."}`);
      } else if (error.request) {
        // Request was made but no response received
        console.error('No Response:', error.request);
        alert("No response from the server. Please try again later.");
      } else {
        // Other errors
        console.error('Error Message:', error.message);
        alert(`Error: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <CNavbar />
      <div className="bg mt-20">
        <div className="form">
          <div className="form-container">
            <h2 className="head text-xl mt-4 md:mt-0 md:text-3xl">Join with your Experience</h2>

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

            {!submit && (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="number"
                    id="phone"
                    name="phone_no"
                    value={phoneno}
                    onChange={(e) => setPhoneno(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="location">Current Location</label>
                  <input
                    type="text"
                    id="location"
                    name="current_location"
                    value={currentlocation}
                    onChange={(e) => setCurrentocation(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="currentCTC">Current CTC</label>
                  <input
                    type="number"
                    id="currentCTC"
                    name="current_ctc"
                    value={currentctc}
                    onChange={(e) => setCurrentctc(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="noticePeriod">Notice Period</label>
                  <input
                    type="text"
                    id="noticePeriod"
                    name="notice_period"
                    value={noticeperiod}
                    onChange={(e) => setNoticeperiod(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="experience">Total Experience (in years)</label>
                  <input
                    type="text"
                    id="experience"
                    name="total_experience"
                    value={totalexperience}
                    onChange={(e) => setTotalexperience(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="resume">Resume Link</label>
                  <input
                    type="text"
                    id="resume"
                    name="resume_link"
                    value={resumelink}
                    onChange={(e) => setResumelink(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group mx-0">
                  <select
                    id="role"
                    name="selected_role"
                    value={selectedrole}
                    onChange={(e) => setSelectedrole(e.target.value)}
                    required
                    className="w-60 md:w-[31rem] md:mx-14 rounded-md h-9"
                  >
                    <option value="">Select Role</option>
                    <option value="Developer">Developer</option>
                    <option value="Tester">Tester</option>
                    <option value="Manager">Manager</option>
                    <option value="Designer">Designer</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <br />
                <div className="cx">
                  <button className="buttonS text-sm mb-4 md:mb-0 md:text-xl" type="submit">
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

export default ExperienceJoineeForm;
