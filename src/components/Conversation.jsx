import React from "react";
import { SubHeading } from "./common/SubHeading";
import { BlueHeading } from "./common/Heading";
import phone from "../assets/images/webp/Contact/mobile.webp";
const Conversation = () => {
  return (
    <>
      <div className="max-w-[1164px] px-3 mx-auto">
        <div className="flex items-center mt-32 ">
          <div className="flex-col flex">
            <SubHeading text="Contact With FoxVision" className="" />
            <BlueHeading
              headingText="Let's Start a Conversation"
              className=" max-w-[498px]"
            />

            <img
              className="max-w-[483px] object-cover w-full h-[349px] mt-5"
              src={phone}
              alt="phone"
            />
          </div>
          <div className="flex flex-col">
            <form
              className="w-full ms-12"
              action="
                  "
            >
              <div className="flex gap-3">
                <input
                  className="max-w-[297px] w-full px-2 h-[55px] border shadow-forminput border-offgrey"
                  type="text"
                  placeholder="First Name"
                />
                <input
                  className="max-w-[297px] w-full px-2 h-[55px] border shadow-forminput border-offgrey"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div className="flex gap-3 mt-3">
                <input
                  className="max-w-[297px] w-full px-2 h-[55px] border shadow-forminput border-offgrey"
                  type="text"
                  placeholder="Subject"
                />
                <input
                  className="max-w-[297px] w-full px-2 h-[55px] border shadow-forminput border-offgrey"
                  type="mobile"
                  placeholder="Mobile Number"
                />
              </div>
              <input
                className="w-full max-w-[605px] mt-3 px-2 h-[55px] border shadow-forminput border-offgrey"
                type="Email"
                placeholder="Email"
              />
              <textarea
                className="max-w-[605px] py-4 px-2 w-full h-[159px] mt-3 border shadow-forminput border-offgrey"
                placeholder="Tell us more about your projects"
              ></textarea>
            </form>
            <div className="flex w-full border border-lightgrey rounded-md">
              <label for="robotCheck">
                <input type="checkbox" id="robotCheck" name="robotCheck" />I am
                not a robot
                          </label>
                          
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Conversation;
