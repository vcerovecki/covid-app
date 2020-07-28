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
          Ukupno stanje
        </Button>
      </td>
      <td>
        <Button
          className="table-button-promijeni"
          onClick={(event) => {
            event.preventDefault();
            props.dohvatiZadnjiDan(zupanija);
          }}
        >
          Posljednjih 24 sata
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
          <th>Ukupno stanje</th>
          <th>Posljednjih 24 sata</th>
        </tr>
      </thead>
      <tbody>{zupanijeList}</tbody>
    </Table>
  );
};

export default zupanijeTable;
