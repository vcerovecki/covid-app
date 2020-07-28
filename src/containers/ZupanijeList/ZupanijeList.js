import React, { Component } from "react";
import ZupanijeTable from "../../components/ZupanijeTable/ZupanijeTable";
import StudentInputForm from "../../components/StudentInputForm/StudentInputForm";
import axiosInstance from "../../api/utils/axiosInstance";
import Modal from "../../components/UI/modal/Modal";

export default class ZupanijeList extends Component {
  state = {
    zupanije: [],
    zupanija: {},
    podaciZupanije: {},
    prikaziPodatkeZupanije: false,
    showModal: false,
  };

  componentDidMount() {
    this.getZupanije();
  }

  getZupanije = () => {
    axiosInstance.get("/getCountries").then((res) => {
      const zupanije = res.data;
      this.setState({
        zupanije: zupanije,
      });
    });
  };

  dohvatiPodatkeZupanije = (zupanija) => {
    axiosInstance.get("/getLastDataForCountry/" + zupanija.idZupanija).then((res) => {
      const podaciZupanije = res.data;
      this.setState({
        podaciZupanije: podaciZupanije,
        prikaziPodatkeZupanije: true,
        showModal: true
      });
    });
  };

  dohvatiPodatkeZupanijeZadnjiDan = (zupanija) => {
    axiosInstance.get("/getLastDayDataForCountry/" + zupanija.idZupanija).then((res) => {
      const podaciZupanije = res.data;
      this.setState({
        podaciZupanije: podaciZupanije,
        prikaziPodatkeZupanije: true,
        showModal: true
      });
    });
  };

  modalClose = () => {
    this.setState({
      showModal: false,
      prikaziPodatkeZupanije: false,
    });
    this.getZupanije();
  };

  render() {
    const lista = this.state.zupanije.map((zupanija) => (
      <li key={zupanija.idZupanija}>{zupanija.naziv}</li>
    ));
    return (
      <React.Fragment>
        {this.state.prikaziPodatkeZupanije ? (
          <Modal show={this.state.showModal} modalClose={this.modalClose}>
            <form onSubmit={(e) => e.preventDefault()} className="student-input-form">
              <label className="input-label">
                Podaci na datum:
          <input className="input-field" disabled name="datum" type="datetime" defaultValue={this.formatDate(this.state.podaciZupanije.datum)} />
              </label>
              <label className="input-label">
                Županija:
          <input className="input-field" disabled name="naziv" type="text" defaultValue={this.state.podaciZupanije.zupanija} />
              </label>
              <label className="input-label">
                Broj zaraženih:
          <input className="input-field" disabled name="brojZarazenih" type="text" defaultValue={this.state.podaciZupanije.brojZarazenih} />
              </label>
              <label className="input-label">
                Broj umrlih:
          <input className="input-field" disabled name="brojUmrlih" type="email" defaultValue={this.state.podaciZupanije.brojUmrlih} />
              </label>
            </form>
          </Modal>
        ) :
          (<ZupanijeTable
            zupanijeList={this.state.zupanije}
            dohvatiPodatkeZupanije={this.dohvatiPodatkeZupanije}
            dohvatiZadnjiDan={this.dohvatiPodatkeZupanijeZadnjiDan}
          />)}
      </React.Fragment>
    );
  }

  formatDate = (datum) => {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(datum).toLocaleDateString([], options);
  }
}
