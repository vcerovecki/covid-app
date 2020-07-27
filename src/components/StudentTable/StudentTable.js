import React from 'react'
import {Table, Button} from "react-bootstrap";
import "./StudentTable.css"
import StudentInputForm from "../StudentInputForm/StudentInputForm";

const studentTable = (props) => {
    const studentList = props.studentList.map((osoba, i) => (
        <tr key={osoba.studentId}>
            <td>{i+1}</td>
            <td>{osoba.studentFirstName}</td>
            <td>{osoba.studentLastName}</td>
            <td>{osoba.studentEmail}</td>
            <td>
                <Button className="table-button-promijeni" onClick={(event) => {event.preventDefault(); props.updateStudent(osoba);}}>Promijeni</Button>
            </td>
            <td>
                <Button className="table-button-ponisti" onClick={(event) =>{event.preventDefault(); props.deleteStudent(osoba.studentId)}}>Poništi</Button>
            </td>
        </tr>
    ));
  return (
    <Table striped bordered hover className="data-table">
        <thead>
            <tr>
                <th>Rbr</th>
                <th>Ime</th>
                <th>Prezime</th>
                <th>Email</th>
                <th>Promijeni</th>
                <th>Poništi</th>
            </tr>
        </thead>
        <tbody>
            {studentList}
        </tbody>
    </Table>
  )
}

export default studentTable
