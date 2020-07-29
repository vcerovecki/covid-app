import React, { Component } from "react";
import "./NajnovijiPodaci.css";

export default class Legend extends Component {
    render = () => {
        var labels = this.props.labels,
            colors = this.props.colors;

        return (
            <div className="Legend">
                {labels.map(function (label, labelIndex) {
                    return (
                        <div>
                            <span className="Legend--color" style={{ backgroundColor: colors[labelIndex % colors.length] }} />
                            <span className="Legend--label">{label}</span>
                        </div>
                    );
                })}
            </div>
        );
    }
}