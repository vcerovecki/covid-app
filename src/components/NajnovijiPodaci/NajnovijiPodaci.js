import React, { Component } from "react";
import Legend from "./Legend";
import Charts from "./Charts";
import axiosInstance from "../../api/utils/axiosInstance";
import "./NajnovijiPodaci.css";

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export default class NajnovijiPodaci extends Component {
    state = {
        lastDay: [],
        lastDayData: [],
        data: [],
        zupanije: [],
        datum: "",
        labels: ['Novozaraženih', 'Umrlih'],
        labelsUkupno: ['Zaraženih', 'Umrlih'],
        colors: ['#F2317A', '#7B43A1'],
        lastDayLabels: ['Zaraženih', 'Umrlih']
    }

    getZupanije = () => {
        axiosInstance.get("/getLastDayData").then((res) => {
            const zupanije = res.data;
            this.setState({
                zupanije: zupanije,
            });
            this.populateArray();
        });

    }

    getLastDayData = (idZupanije) => {
        axiosInstance.get("/getLastDayDataForCountry/" + idZupanije).then((res) => {
            return res.data;
        });
    }

    getLastDayDataForLastDay = () => {
        axiosInstance.get("/getLastDayDataForLastDay").then((res) => {
            const lastDayData = res.data;
            this.setState({
                lastDay: lastDayData
            });
            this.populateArrayForLastDay();
        });
    }

    componentDidMount = () => {
        this.getZupanije();
        this.getLastDayDataForLastDay();
    }
    populateArray = () => {
        var data = [];
        var pureDate = new Date(this.state.zupanije[0].datum);
        const dateFormat = new Intl.DateTimeFormat('hr', {year: 'numeric', month: '2-digit', day: "2-digit"});
        const [{ value: day },,{ value: month },,{ value: year }] = dateFormat.formatToParts(pureDate);
        this.setState({
            datum: `${day}.${month}.${year }`
        });
        for (var i = 0; i < this.state.zupanije.length; i++) {
            var tmp = [];

            var lastData = this.state.zupanije[i];
            tmp.push(lastData.brojZarazenih);
            tmp.push(lastData.brojUmrlih);

            data.push(tmp);
        }

        this.setState({ data: data });
    }

    populateArrayForLastDay = () => {
        var data = [];
        console.log(this.state.lastDay.length);
        for (var i = 0; i < this.state.lastDay.length; i++) {
            var tmp = [];

            var lastData = this.state.lastDay[i];
            tmp.push(lastData.brojZarazenih);
            tmp.push(lastData.brojUmrlih);

            data.push(tmp);
        }

        this.setState({ lastDayData: data });
    }

    izracunajSumuZarazenihUkupno = () => {
        var suma = 0;
        this.state.zupanije.forEach(function(data){
            suma += data.brojZarazenih;
        });
        return "(" + suma + ")";
    }

    izracunajSumuUmrlihUkupno = () => {
        var suma = 0;
        this.state.zupanije.forEach(function(data){
            suma += data.brojUmrlih;
        });
        return "(" + suma + ")";
    }

    izracunajSumuZarazenihLastDay = () => {
        var suma = 0;
        this.state.lastDay.forEach(function(data){
            suma += data.brojZarazenih;
        });
        return "(" + suma + ")";
    }

    izracunajSumuUmrlihLastDay = () => {
        var suma = 0;
        this.state.lastDay.forEach(function(data){
            suma += data.brojUmrlih;
        });
        return "(" + suma + ")";
    }

    render = () => {
        return (
            <section>
                <h3>Ukupno do posljednjeg ažuriranja (Posljednje ažuriranje: {this.state.datum} 15:00)</h3>
                <Charts
                    data={this.state.data}
                    labels={this.state.zupanije.map(a => a.zupanija)}
                    colors={this.state.colors}
                    height={250}
                />
                <Legend labels={this.state.labelsUkupno} colors={this.state.colors} sumZarazeni={this.izracunajSumuZarazenihUkupno()} sumUmrli={this.izracunajSumuUmrlihUkupno()}/>
                <br></br>
                <h3>Posljednjih 24 sata (Posljednje ažuriranje: {this.state.datum} 15:00)</h3>
                <Charts
                    data={this.state.lastDayData}
                    labels={this.state.lastDay.map(a => a.zupanija)}
                    colors={this.state.colors}
                    height={250}
                />
                <Legend labels={this.state.labels} colors={this.state.colors} sumZarazeni={this.izracunajSumuZarazenihLastDay()} sumUmrli={this.izracunajSumuUmrlihLastDay()} />
            </section>
        );
    }
}