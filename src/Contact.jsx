import React, { useState } from "react";
import CNavbar from "./CNavbar";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import Swal from "sweetalert2";
function ContactForm() {
  //ReCAPTCHA validations
  const [showCallForm, setShowCallForm] = useState(false);
  const [capVal, setCapVal] = useState(null);

  // State for the contact form
  const [FullName, setFullName] = useState("");
  const [City, setCity] = useState("");
  const [Email, setEmail] = useState("");
  const [ContactNumber, setContactNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [requirements, setRequirements] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const servicesList = [
    "Web Design & Development",
    "UI/UX Design",
    "Mobile App Development",
    "Artificial Intelligence",
    "Custom Software Development",
    "SEO"
  ];
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    setSelectedServices((prevSelectedServices) =>
      checked
        ? [...prevSelectedServices, value] // Add service if checked
        : prevSelectedServices.filter((service) => service !== value) // Remove service if unchecked
    );
  };

  const handelContactsale = async (e) => {
    e.preventDefault();
    const formData = {
      full_name: FullName,
      city: City,
      email: Email,
      phone_no: `${countryCode}${ContactNumber}`,
      service_of_interest: selectedServices,
      message: requirements
    };

    try {
      const response = await axios.post("https://admin.bellwayinfotech.com/api/admin/contact", formData);

      Swal.fire({
        title: "Form Submitted Successfully!",
        text: "Thank you for reaching out to us.",
        icon: "success",
        showClass: {
          popup: "animate__animated animate__fadeInUp animate__faster"
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutDown animate__faster"
        }
      });

      // Resetting form fields
      setFullName("");
      setCity("");
      setEmail("");
      setContactNumber("");
      setRequirements("");
      setSelectedServices([]);
      setCapVal(null);

    } catch (error) {
      console.error("Failed to submit data", error?.response?.data);
      Swal.fire({
        title: "Error!",
        text: "Failed to submit the form. Please try again later.",
        icon: "error"
      });
    }
  };
  // State for the call form
  const [fullName, setFullNamee] = useState("")
  const [citycall, setCityCall] = useState("")
  const [call, setCall] = useState("")
  const [callDate, setCallDate] = useState("")
  const [callTime, setCallTime] = useState("")
  const [callMessage, setCallMessage] = useState("")
  const [capVal2, setCapVal2] = useState(null);
  const [countryCode2, setCountryCode2] = useState("+91");
  const handleCallSubmit = async (e) => {
    e.preventDefault();

    const formData2 = {
      name: fullName,
      city: citycall,
      phone_no: `${countryCode2}${call}`,
      date: callDate,
      time: callTime,
      message: callMessage,
    };

    try {
      const response = await axios.post(
        "https://admin.bellwayinfotech.com/api/admin/callrequests",
        formData2
      );
      console.log("Form submitted successfully:", response.data);
      // alert("Your request has been submitted successfully!");
      Swal.fire({
        title: "Form Submitted Successfully!",
        text: "Thank you for reaching out to us.",
        icon: "success",
        showClass: {
          popup: "animate__animated animate__fadeInUp animate__faster"
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutDown animate__faster"
        }
      });

      // Optional: Clear the form after successful submission
      setFullNamee("");
      setCityCall("");
      setCall("");
      setCallDate("");
      setCallTime("");
      setCallMessage("");
      setCapVal2(false);
      setCountryCode2("+91")

    } catch (error) {
      console.error("Failed to submit data", error?.response?.data);
      Swal.fire({
        title: "Error!",
        text: "Failed to submit the form. Please try again later.",
        icon: "error"
      });
    }
  };



  return (
    <>
      <Helmet>
        <title>BELLWAY INFOTECH - Contact Us</title>
        <meta
          name="description"
          content="For any query or inquiry regarding our Web & App Development or their uses, please feel free to contact us directly. As we are just mail far from you. Contact us at info@bellwayinfotech.com"
        />
      </Helmet>

      <CNavbar />

      {/* sales */}
      <div className="md:flex flex flex-col-reverse md:flex-row  h-full mt-12 md:mt-16">
        <div className="md:w-1/2 bg-black text-white p-10 rounded-lg shadow-md">
          <h1 className="md:text-5xl text-4xl font-bold md:mt-24">
            Contact our sales team
          </h1>
          <p className="mb-10">
            We're happy to answer questions and get you acquainted with Slack.
          </p>
          <ul className="mb-8">
            <li className="md:flex items-center mb-2">
              <svg
                className="w-4 inline-block h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Learn how to increase team productivity
            </li>
            <li className="md:flex items-center mb-2">
              <svg
                className="w-4 h-4 inline-block mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Get pricing information
            </li>
            <li className="md:flex items-center mb-2">
              <svg
                className="w-4 inline-block h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Explore use cases for your team
            </li>
          </ul>
          <div className="flex justify-between items-center mb-4">
            For technical issues and product questions, please visit our Help
            Centre.
          </div>
          <hr
            style={{
              borderColor: "red",
              borderWidth: "2px",
              fontWeight: "bold",
              marginTop: "15px",
            }}
          />{" "}
          <br />
          <div className="flex flex-col justify-end gap-4">
            <p className="text-lg font-normal">Call us on</p>
            <p className="text-3xl font-bold">+91-9981866409</p>
            <p className="text-lg font-normal">Mail us</p>
            <p className="text-base font-bold">info@bellwayinfotech.com</p>
            <p className="text-base font-bold">hr@bellwayinfotech.com</p>
            <p className="text-lg font-medium">Follow us</p>
            <div className="md:flex inline-flex gap-4 ">
              <a href="https://www.facebook.com/bellwayinfotechh/">
                <svg
                  width={"1.8rem"}
                  className="hover:bg-red-500   hover:text-black hover:rounded-md trasition-all duration-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="rgba(255,255,255,1)"
                >
                  <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path>
                </svg>
              </a>

              <svg
                width={"1.4rem"}
                className="hover:bg-red-500 hover:text-black hover:rounded-md trasition-all duration-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z"></path>
              </svg>

              <a href="https://www.instagram.com/bellwayinfo/">
                <svg
                  width={"1.8rem"}
                  className="hover:bg-red-500 hover:text-black hover:rounded-md trasition-all duration-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="rgba(255,255,255,1)"
                >
                  <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path>
                </svg>
              </a>

              <a href="https://www.linkedin.com/company/bellwayinfotech">
                <svg
                  width={"1.8rem"}
                  className="hover:bg-red-500 hover:text-black hover:rounded-md trasition-all duration-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="rgba(255,255,255,1)"
                >
                  <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path>
                </svg>
              </a>
            </div>
          </div>
          <hr
            style={{
              borderColor: "red",
              borderWidth: "2px",
              fontWeight: "bold",
              marginTop: "15px",
            }}
          />{" "}
          <br />
          <br />
          <div className="">
            <p className="text-3xl font-bold">join Us !</p>
            <br />
            <p>
              Be a part of our in-house team and play your part in uplifting the
              corporate ecosystem by making it easier for brands and talents to
              connect with each other.
            </p>
            <br />
            <a
              href="/career-with-us"
              className="relative inline-flex items-center justify-center p-2 px-6 py-1 overflow-hidden font-medium text-red-600 transition duration-300 ease-out border-2 border-red-600 rounded-full shadow-md group "
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-600 group-hover:translate-x-0 ease">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-red-600 transition-all duration-300 transform group-hover:translate-x-full ease">
                Join Now
              </span>
              <span className="relative invisible">Join Now</span>
            </a>
          </div>
        </div>

        <div className="md:w-1/2 bg-white p-10 rounded-lg shadow-2xl">
          <div className="flex justify-end">
            {showCallForm ? (
              <button
                className="relative inline-flex items-center justify-center p-3 px-6 py-1 overflow-hidden font-medium text-red transition duration-300 ease-out border-2 border-red-600 rounded-full shadow-md group"
                onClick={() => setShowCallForm(false)}
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-600 group-hover:translate-x-0 ease">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l-7 7m0 0l7 7m-7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-red-600 transition-all duration-300 transform group-hover:translate-x-full ease">
                  Back
                </span>
                <span className="relative invisible">Back</span>
              </button>
            ) : (
              <button
                className="relative inline-flex items-center justify-center p-3 px-6 py-1 overflow-hidden font-medium text-red transition duration-300 ease-out border-2 border-red-600 rounded-full shadow-md group"
                onClick={() => setShowCallForm(true)}
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-600 group-hover:translate-x-0 ease">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-red-600 transition-all duration-300 transform group-hover:translate-x-full ease">
                  Get a call
                </span>
                <span className="relative invisible">Get a call</span>
              </button>
            )}
          </div>

          <h1 className="text-black text-3xl font-bold text-center mt-3">
            {showCallForm ? "Schedule your call" : "Ready to serve you first!"}
          </h1>
          <br />
          <hr />
          {!showCallForm ? (
            <form
              action="https://admin.bellwayinfotech.com/api/admin/contact"
              method="POST"
              onSubmit={handelContactsale}
            >
              <div className="flex flex-wrap -mx-3">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-900 text-sm font-bold mb-2 "
                    htmlFor="full_name"
                  >
                    Full Name *
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    id="full_name"
                    type="text"
                    value={FullName}
                    onChange={(event) => setFullName(event.target.value)}
                    required
                    name="full_name"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-900 text-sm font-bold mb-2"
                    htmlFor="city"
                  >
                    City *
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    id="city"
                    type="text"
                    value={City}
                    onChange={(event) => setCity(event.target.value)}
                    required
                    name="city"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-900 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    email address *
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    id="email"
                    type="email"
                    value={Email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    name="email"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-900 text-sm font-bold mb-2"
                    htmlFor="phone_no"
                  >
                    Contact number *
                  </label>
                  <div
                    className="appearance-none  w-full flex  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"

                  >
                    <select className="w-1/4 bg-gray-200 h-full" onChange={(e) => setCountryCode(e.target.value)} value={countryCode}>
                      <option value={"+91"}>+91</option>
                      <option value={"+1"}>+1</option>
                      <option value={"+44"}>+44</option>
                      <option value={"+69"}>+69</option>
                    </select>
                    <input
                      className="w-full bg-gray-200 border-0 focus:outline-none"
                      type="number"
                      value={ContactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      maxLength={10}
                      required
                      name="phone_no"
                      id="phone_no"
                    />
                  </div>
                </div>
              </div>

              <h1 className="text-black text-xl font-bold text-center">
                Service of Interest
              </h1>
              <br />
              <div className="mx-auto px-4">
                <h4 className="text-1xl font-bold mb-4">
                  Which services are you looking for?*
                </h4>
                <hr
                  className="my-4 md:my-0"
                  style={{
                    borderColor: "red",
                    borderWidth: "2px",
                    fontWeight: "bold",
                  }}
                />
                {servicesList.map((service) => (
                  <div key={service} className="flex my-4 md:my-0 items-center">
                    <input
                      type="checkbox"
                      value={service}
                      className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                      onChange={handleCheckboxChange}
                      checked={selectedServices.includes(service)}
                    />
                    <label className="md:ml-2 text-gray-700 my-auto">
                      {service}
                    </label>
                  </div>
                ))}
              </div>
              <div className="text-gray-700 mt-6">
                <h2 className="font-bold text-lg md:mr-32">
                  Share your requirements*
                  {/* <span className="text-gray-500 text-sm"></span> */}
                </h2>
                <hr
                  style={{
                    borderColor: "red",
                    borderWidth: "2px",
                    fontWeight: "bold",
                    marginTop: "15px",
                  }}
                />
                <br />
                <textarea
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                  rows="6"
                  value={requirements}
                  onChange={(event) => setRequirements(event.target.value)}
                  required
                  placeholder="Please share your requirements..."
                  name="message"
                />
              </div>
              <br />
              <div className="">
                <ReCAPTCHA
                  sitekey="6Lc-ZgIqAAAAAJJnEsBoxdgWRYPsL0v2EaOvjM5D"
                  onChange={(val) => setCapVal(val)}
                />
              </div>
              <br />
              <div className="flex justify-center">
                <button
                  disabled={!capVal}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                  type="submit"
                  value="Submit"
                >
                  Contact Sales
                </button>
              </div>
            </form>
          ) : (
              <form method="post" onSubmit={handleCallSubmit}>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-900 text-sm font-bold mb-2" htmlFor="fullname">
                      Name *
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      id="fullname"
                      type="text"
                      value={fullName}
                      onChange={(event) => setFullNamee(event.target.value)}
                      required
                      name="name"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-900 text-sm font-bold mb-2" htmlFor="citycall">
                      City *
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      id="citycall"
                      type="text"
                      value={citycall}
                      onChange={(event) => setCityCall(event.target.value)}
                      required
                      name="city"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-900 text-sm font-bold mb-2" htmlFor="contact-call">
                      Phone Number *
                    </label>
                    <div className="md:flex inline-flex gap-4">
                      <select
                        className="bg-gray-200 w-1/4 text-gray-700 border border-gray-200 rounded-l px-1 leading-tight h-14 focus:outline-none focus:bg-white rounded-lg"
                        value={countryCode2}
                        onChange={(event) => setCountryCode2(event.target.value)}
                      >
                        <option value="+91">+91 (India)</option>
                        <option value="+1">+1 (USA)</option>
                        <option value="+44">+44 (UK)</option>
                        <option value="+98">+98 (Iran)</option>
                      </select>
                      <input
                        className="appearance-none md:block md:w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-r py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        type="number"
                        pattern="\d{10}"
                        title="Phone number should be 10 digits"
                        value={call}
                        onChange={(event) => setCall(event.target.value)}
                        maxLength={12}
                        required
                      />

                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-900 text-sm font-bold mb-2" htmlFor="call-date">
                      Date *
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      id="call-date"
                      type="date"
                      value={callDate}
                      onChange={(event) => setCallDate(event.target.value)}
                      required
                      name="date"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-900 text-sm font-bold mb-2" htmlFor="call-time">
                      Time *
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      id="call-time"
                      type="time"
                      value={callTime}
                      onChange={(event) => setCallTime(event.target.value)}
                      required
                      name="time"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-900 text-sm font-bold mb-2" htmlFor="call-message">
                      Message *
                    </label>
                    <textarea
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      id="call-message"
                      rows="4"
                      value={callMessage}
                      onChange={(event) => setCallMessage(event.target.value)}
                      required
                      name="message"
                    />
                  </div>
                </div>

                <ReCAPTCHA
                  sitekey="6Lc-ZgIqAAAAAJJnEsBoxdgWRYPsL0v2EaOvjM5D"
                  onChange={(val) => setCapVal(val)}
                />
                <br />
                <div className="flex justify-center">
                  <button
                    disabled={!capVal}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Request a call
                  </button>
                </div>
              </form>
          )}
        </div>
      </div>

      {/* map */}
      {/* Responsive Map Container */}
      <div className="bg-white  p-10 ">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          {" "}
          Locate us here!
        </h2>

        <div className="relative w-full h-64 md:h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.989173554355!2d75.89330397505773!3d22.728643779380917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396317d8dce0a973%3A0xe74ff35946a7c87d!2sBellway%20Infotech%20%7C%20Mobile%20app%20and%20Website%20development%20company!5e0!3m2!1sen!2sin!4v1732099833636!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bellway Infotech Location"
          ></iframe>

          {/* Overlay Button */}
          <div
            onClick={() =>
              window.open(
                "https://www.google.com/maps?q=@22.728871326865008, 75.89592178697158",
                "_blank"
              )
            }
            className="absolute inset-0 flex items-center justify-center bg-transparent bg-opacity-40 hover:bg-opacity-60 transition duration-300 ease-in-out cursor-pointer"
          >
            <button className="px-4 py-2 bg-red-500 text-white font-bold rounded shadow hover:bg-red-400">
              Click to Open Location
            </button>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default ContactForm;
