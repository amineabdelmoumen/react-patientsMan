import React, { Component } from "react";
import "./row.css";

class AddPatient extends Component {
  state = {
    patientName: "",
    patientDiagnostic: "",
    patientEmail: "",
  };
  getPatientName = async (e) => {
    await this.setState({ patientName: e.target.value });
    console.log(this.state.patientName);
  };
  getPatientDiagnostic = async (e) => {
    await this.setState({ patientDiagnostic: e.target.value });
    console.log(this.state.patientDiagnostic);
  };
  getPatientEmail = async (e) => {
    await this.setState({ patientEmail: e.target.value });
    console.log(this.state.patientEmail);
  };
  submit = async (e) => {
    await this.props.addPatient(
      this.state.patientName,
      this.state.patientEmail,
      this.state.patientDiagnostic
    );
    console.log("patient added succefully");
    e.preventDefault();
  };
  render() {
    return (
      <div className="bod">
        <div className="form">
          <h3 className="title"> Add patient Info : </h3>
          <form method="post">
            <input
              onChange={(e) => this.getPatientName(e)}
              className="input"
              placeholder="Username.."
              value={this.state.patientName}
              required
            ></input>
            <br />
            <input
              className="input"
              onChange={(e) => this.getPatientDiagnostic(e)}
              value={this.state.patientDiagnostic}
              placeholder="Patient Diagnostic ....."
              type="text"
              required
            />
            <br />
            <input
              className="input"
              onChange={(e) => this.getPatientEmail(e)}
              placeholder="patient Email...."
              value={this.state.patientEmail}
              type="email"
              required
            />
            <br />
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => this.submit(e)}
            >
              register
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPatient;
