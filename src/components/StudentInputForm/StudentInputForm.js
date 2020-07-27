import React from 'react'
import "./StudentInputForm.css";

const studentInputForm = (props) => {
  return (
    <form onSubmit={(e) => props.handleStudentSubmit(e)} className="student-input-form">
      <label className="input-label">
          Ime:
          <input className="input-field" name="studentFirstName" type="text" onChange={(e) => props.onChangeInput(e)} defaultValue={props.osoba.studentFirstName}/>
      </label>
      <label className="input-label">
          Prezime:
          <input className="input-field" name="studentLastName" type="text" onChange={(e) => props.onChangeInput(e)} defaultValue={props.osoba.studentLastName}/>
      </label>
      <label className="input-label">
          Ime:
          <input className="input-field" name="studentEmail" type="email" onChange={(e) => props.onChangeInput(e)} defaultValue={props.osoba.studentEmail}/>
      </label>
      <button type="submit">Spremi</button>
    </form>
  )
}

export default studentInputForm
