import logo from "./logo.svg";

//import "./App.css";
import Web3 from "web3";
import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from "./config";
import AddPatient from "./AddPatient.jsx";

import React, { Component } from "react";
import Navbar from "./NavBar";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      PatientsCount: 0,
      patients: [],
    };
  }
  componentWillMount() {
    this.loadDappData();
  }
  async loadDappData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");

    //fetch accounts
    const accounts = await web3.eth.getAccounts();
    console.log("accounts: ", accounts);
    this.setState({ account: accounts[0] });
    console.log(this.state);
    const PatientsMan = new web3.eth.Contract(TODO_LIST_ABI, TODO_LIST_ADDRESS);
    this.setState({ PatientsMan });
    const PatientsCount = await PatientsMan.methods.patientsCount().call();
    this.setState({ PatientsCount });

    for (var i = 1; i <= PatientsCount; i++) {
      const patient = await PatientsMan.methods.Patients(i).call();
      this.setState({
        patients: [...this.state.patients, patient],
      });
      console.log("patients", this.state.patients);
    }
  }
  addPatient = (patientName, patientEmail, patientDiagnostic) => {
    this.state.PatientsMan.methods
      .addPatient(patientName, patientEmail, patientDiagnostic)
      .send({ from: this.state.account });
  };

  toggleCompleted = (PatientId) => {
    this.setState({ loading: true });
    this.state.PatientsMan.methods
      .toggleCompleted(PatientId)
      .send({ from: this.state.account });
  };
  render() {
    return (
      <div>
        <Navbar account={this.state.account} />
        <AddPatient
          patients={this.state.patients}
          addPatient={this.addPatient}
          PatientsMan={this.state.PatientsMan}
          toggleCompleted={this.toggleCompleted}
        />
        <div id="table">
          <table class="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Patient Name</th>
                <th scope="col">Patient Email</th>
                <th scope="col">Patient Dignostic</th>
              </tr>
            </thead>
            <tbody>
              {this.state.patients.map((patient) => (
                <tr>
                  <th scope="row">{patient.id}</th>
                  <td>{patient.patientName}</td>
                  <td>{patient.patientEmail}</td>
                  <td>{patient.patientDiagnostic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
