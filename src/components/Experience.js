import React, { Component } from "react";
import "../Form.css";

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header className="formHeader">Experience</header>
        <form>
          <input placeholder="Position" type="text" name="position" />
          <input placeholder="Company" type="text" name="company" />
          <input placeholder="City" type="text" name="city" />
          <input placeholder="From" type="date" name="from" />
          <input placeholder="To" type="date" name="to" />
          <textarea placeholder="Description" />
        </form>
        <button>Delete</button>
        <button>Add</button>
      </div>
    );
  }
}

export default Experience;
