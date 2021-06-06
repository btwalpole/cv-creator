import React, { Component } from "react";
import "../Form.css";

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header className="formHeader">Personal Information</header>
        <form>
          <input placeholder="First name" type="text" name="firstName" />
          <input placeholder="Last name" type="text" name="lastName" />
          <input placeholder="Job title" type="text" name="jobTitle" />
          <input placeholder="Address" type="text" name="address" />
          <input placeholder="Phone Number" type="number" name="phoneNumber" />
          <input placeholder="Email" type="email" name="email" />
          <textarea placeholder="Description" />
        </form>
      </div>
    );
  }
}

export default PersonalInfo;
