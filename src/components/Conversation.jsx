import React, { useState } from "react";
import { SubHeading } from "./common/SubHeading";
import { BlueHeading } from "./common/Heading";
import phone from "../assets/images/webp/Contact/mobile.webp";
import recaptcha from "../assets/images/webp/Contact/recaptcha.webp";
import Button from "./common/Button";
import Swal from "sweetalert2";

const Conversation = () => {
  const checked = "";
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    mobile: "",
    email: "",
    message: "",
    robotCheck: false,
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = {};
    if (!formData.firstName.trim()) {
      errors.firstName = "First Name is required";
    }
    if (!formData.lastName.trim()) {
      errors.lastName = "Last Name is required";
    }
    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    }
    if (!formData.mobile.trim()) {
      errors.mobile = "Mobile Number is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    if (!formData.robotCheck) {
      errors.robotCheck = "Please confirm you are not a robot";
    }
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form data:", formData);
      Swal.fire({
        icon: "success",
        title: "Form Submitted Successfully!",
        text: "We will get back to you shortly.",
        confirmButtonColor: "#6B0C72", // Dark purple color
        confirmButtonText: "OK",
      }).then(() => {
        setFormData({
          firstName: "",
          lastName: "",
          subject: "",
          mobile: "",
          email: "",
          message: "",
          robotCheck: false,
        });
      });
    }
  };

  return (
    <>
      <div className="max-w-[1164px] px-3 mx-auto">
        <div className="flex items-center sm:pt-16 pt-12 md:pt-20 lg:pt-24 xl:pt-0 xl:mt-32 md:flex-row flex-col gap-8">
          <div className="flex-col flex">
            <SubHeading
              text="Contact With FoxVision"
              className="md:text-start text-center lowercase"
            />
            <BlueHeading
              headingText="Let's Start a Conversation"
              className=" max-w-[498px] md:text-start text-center"
              aosType="fade-up"
            />

            <img
              className="max-w-[483px] object-cover w-full h-[349px] mt-5"
              src={phone}
              alt="phone"
              data-aos="fade-up"
            />
          </div>
          <div className="flex flex-col w-full md:items-start items-center md:ms-12">
            <form
              className="w-full md:mx-0 mx-auto"
              onSubmit={handleSubmit}
              action="#"
            >
              <div className="flex w-full justify-center md:justify-start gap-3">
                <div className="w-full max-w-[297px]" data-aos="fade-up">
                  <input
                    className={`max-w-[297px] w-full outline-none px-2 h-[55px] border shadow-forminput border-offgrey ${
                      formErrors.firstName ? "border-red-500" : ""
                    }`}
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                  />
                  {formErrors.firstName && (
                    <p className="text-red-500 text-sm">
                      {formErrors.firstName}
                    </p>
                  )}
                </div>
                <div className="max-w-[297px] w-full" data-aos="fade-up">
                  <input
                    className={`max-w-[297px] w-full outline-none px-2 h-[55px] border shadow-forminput border-offgrey ${
                      formErrors.lastName ? "border-red-500" : ""
                    }`}
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                  />
                  {formErrors.lastName && (
                    <p className="text-red-500 text-sm">
                      {formErrors.lastName}
                    </p>
                  )}
                </div>
              </div>
              <div
                className="flex w-full justify-center md:justify-start gap-3 mt-3"
                data-aos="fade-up"
              >
                <div className="w-full max-w-[297px]">
                  <input
                    className={`max-w-[297px] w-full outline-none px-2 h-[55px] border shadow-forminput border-offgrey ${
                      formErrors.subject ? "border-red-500" : ""
                    }`}
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                  />
                  {formErrors.subject && (
                    <p className="text-red-500 text-sm">{formErrors.subject}</p>
                  )}
                </div>
                <div className="w-full max-w-[297px]">
                  <input
                    className={`max-w-[297px] w-full outline-none px-2 h-[55px] border shadow-forminput border-offgrey ${
                      formErrors.mobile ? "border-red-500" : ""
                    }`}
                    type="number"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Mobile Number"
                  />
                  {formErrors.mobile && (
                    <p className="text-red-500 text-sm">{formErrors.mobile}</p>
                  )}
                </div>
              </div>
              <div
                className="flex flex-col justify-center md:justify-start items-center md:items-start"
                data-aos="fade-up"
              >
                <input
                  className={`w-full outline-none max-w-[605px] mt-3 px-2 h-[55px] border shadow-forminput border-offgrey ${
                    formErrors.email ? "border-red-500" : ""
                  }`}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm">{formErrors.email}</p>
                )}
                <textarea
                  className={`max-w-[605px] outline-none resize-none py-4 px-2 w-full h-[159px] mt-3 border shadow-forminput border-offgrey ${
                    formErrors.message ? "border-red-500" : ""
                  }`}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your projects"
                ></textarea>
                {formErrors.message && (
                  <p className="text-red-500 text-sm">{formErrors.message}</p>
                )}
                <div className="flex w-full md:justify-start max-w-[302px] mt-3 border items-center !justify-between bg-inputgrey py-2 px-3 border-lightgrey rounded-md">
                  <div>
                    <label className=" relative block mb-3 cursor-pointer text-xl user-select-none">
                      <input
                        type="checkbox"
                        id="robotCheck"
                        name="robotCheck"
                        className="absolute opacity-0 cursor-pointer h-0 w-0"
                        checked={formData.robotCheck}
                        onChange={handleChange}
                      />
                      <span className="checkmark absolute top-0 left-0 h-[22px] w-[22px] bg-transparent border-2 rounded border-lightgrey"></span>
                      <p className="font-poppins font-normal ms-7 text-base text-robotgrey">
                        I am not a robot
                      </p>
                    </label>
                    {formErrors.robotCheck && (
                      <p className="text-red-500 text-sm">
                        {formErrors.robotCheck}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      className="max-w-[49px]"
                      src={recaptcha}
                      alt="recaptcha"
                    />
                    <p className="font-poppins font-normal text-xxsm text-privacy">
                      Privacy - Terms
                    </p>
                  </div>
                </div>
                <Button
                  className="max-w-[302px] w-full mt-4"
                  btnName="Send Message"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Conversation;
