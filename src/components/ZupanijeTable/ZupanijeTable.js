import React from "react";
import { Table, Button } from "react-bootstrap";
import "./StudentTable.css";

const zupanijeTable = (props) => {
  const zupanijeList = props.zupanijeList.map((zupanija, i) => (
    <tr key={zupanija.idZupanija}>
      <td>{zupanija.idZupanija}</td>
      <td>{zupanija.naziv}</td>
      <td>
        <Button
          className="table-button-promijeni"
          onClick={(event) => {
            event.preventDefault();
            props.dohvatiPodatkeZupanije(zupanija);
          }}
        >
          Dohvati podatke
        </Button>
      </td>
    </tr>
  ));
  return (
    <Table striped bordered hover className="data-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Naziv</th>
          <th>Promijeni</th>
        </tr>
      </thead>
      <tbody>{zupanijeList}</tbody>
    </Table>
  );
};

export default zupanijeTable;
