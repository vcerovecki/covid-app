import React, { Component } from 'react'
import StudentInputForm from "../../components/StudentInputForm/StudentInputForm";
import axiosInstance from "../../api/utils/axiosInstance";
import Modal from "../../components/UI/modal/Modal";

export default class StudentInput extends Component {
    state = {
        label: "Student Input",
        studentFirstName: "",
        studentLastName: "",
        studentEmail: "",
        showModal: false,
        modalMsg: "",
    }

    handleStudentSubmit = (event) => {
        event.preventDefault();
        const {studentFirstName, studentLastName, studentEmail} = this.state;
        const student = {studentFirstName, studentLastName, studentEmail};
        axiosInstance.post("/student", student).then(
            (res) => {
                this.setState({
                    label: res.data,
                    showModal: true,
                    modalMsg: res.data,
                },
                (error) =>{
                    console.log(error);
                })
            }
        )
    }

    onChangeInput = (event) => {
        event.preventDefault();
        let name = event.target.name;
        let value = event.target.value;
        
        this.setState({
            [name]: value,
        });
    } 

    modalClose = () => {
        this.props.history.push("/studentList");
    }

  render() {
    return (
      <React.Fragment>
        <h3>{this.state.label}</h3>
        <StudentInputForm onChangeInput={this.onChangeInput} osoba={{}} handleStudentSubmit={this.handleStudentSubmit} />
        <Modal show={this.state.showModal} modalClose={this.modalClose}>
            {this.state.modalMsg}
        </Modal>
      </React.Fragment>
    );
  }
}
