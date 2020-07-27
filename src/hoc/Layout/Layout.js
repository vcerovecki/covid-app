import React from 'react'
import Navigation from "../../components/Navigation/Navigation"
import {Container} from "react-bootstrap";


const layout = (props) => {
  return (
    <React.Fragment>
      <Navigation />
      <Container className="content">{props.children}</Container>
    </React.Fragment>
  )
}

export default layout
