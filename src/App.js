import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import StudentList from "./containers/StudentList/StudentList";
import StudentInput from "./containers/StudentInput/StudentInput";
import Layout from "./hoc/Layout/Layout"


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/studentList" component={StudentList} />
          <Route path="/" component={StudentInput} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
