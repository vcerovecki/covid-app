import React, { Component } from 'react';
import StudentTable from "../../components/StudentTable/StudentTable";
import StudentInputForm from "../../components/StudentInputForm/StudentInputForm";
import axiosInstance from "../../api/utils/axiosInstance";

export default class StudentList extends Component {

    state={
    studentList: [],
    osoba: {},
    updateStudent: false
    };

    componentDidMount() {
        this.getStudentData();
    }

    getStudentData = () => {
        axiosInstance.get("/student").then(res => {
            const studentList = res.data;
            this.setState({
                studentList: studentList,
            })
        });
    }

    deleteStudent = (id) => {
        axiosInstance.delete("/student/" + id).then(res =>{
            this.getStudentData();
        }, error => {
            console.log(error);
        });
    }

        onChangeInput = (event) => {
            event.preventDefault();
            let name = event.target.name;
            let value = event.target.value;
            let student = {
                ...this.state.osoba,
                [name]: value
            }
            this.setState({
                osoba: student,
            });
        }

        updateStudent = (osoba) => {
            this.setState({
                osoba: osoba,
                updateStudent: true,
            });
        }

        handleStudentSubmit = (event) => {
            event.preventDefault();
            const student = this.state.osoba;
            axiosInstance.put("/student/" + student.studentId, student).then(res =>{
                this.getStudentData();
                this.setState({
                    updateStudent: false
                })
            }, error => {
                console.log(error);
            });
        }

   render() {
    const lista = this.state.studentList.map(person => (
        <li key={person.studentId}>{person.studentFirstName} {person.studentLastName}</li>
    ));
    return (
      <React.Fragment>
          {this.state.updateStudent ? 
          <StudentInputForm onChangeInput={(event) => {this.onChangeInput(event)}} handleStudentSubmit={(event) => {this.handleStudentSubmit(event)}} osoba={this.state.osoba}/>
          :
          <StudentTable studentList={this.state.studentList} deleteStudent={this.deleteStudent} updateStudent={this.updateStudent} />
          }
      </React.Fragment>
      
    );
  }
}
