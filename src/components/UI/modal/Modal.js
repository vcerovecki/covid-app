import React from 'react';
import "./Modal.css";

const modal = (props) => {
  return (
    <React.Fragment>
      <div className={props.show ? "modal-background" : ""}></div>
      <div className="modal" style={{ opacity: props.show ? "1" : "0" }}>
        <span>
          {props.children}
        </span>
        <button className="modal-button" onClick={props.modalClose}>U redu</button>
      </div>
    </React.Fragment>
  )
}

export default modal
