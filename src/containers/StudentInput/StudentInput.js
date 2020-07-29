import React, { Component } from 'react'
import StudentInputForm from "../../components/StudentInputForm/StudentInputForm";
import axiosInstance from "../../api/utils/axiosInstance";

export default class StudentInput extends Component {
    state = {
        label: "Najnoviji podaci",
        studentFirstName: "",
        studentLastName: "",
        studentEmail: "",
        showModal: false,
        modalMsg: "",
    }

    handleStudentSubmit = (event) => {
        event.preventDefault();
        const { studentFirstName, studentLastName, studentEmail } = this.state;
        const student = { studentFirstName, studentLastName, studentEmail };
        axiosInstance.post("/student", student).then(
            (res) => {
                this.setState({
                    label: res.data,
                    showModal: true,
                    modalMsg: res.data,
                },
                    (error) => {
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
            <div id="podaci" style={{ marginLeft: -20 + '%', marginRight: 10 + '%' }}>
                <StudentInputForm onChangeInput={this.onChangeInput} osoba={{}} handleStudentSubmit={this.handleStudentSubmit} />
            </div >
        );
    }
}
