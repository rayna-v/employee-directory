import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Wrapper from "./components/Wrapper";
// import Employees from "./pages/Employees";
// import Filter from "./pages/Filter";
// import Sort from "./pages/Sort";

// import Table from "./pages/Table";
// import Row from "./components/Row";

// import './App.css';

function App() {

  return (
    <Router>
      <div>
        <Wrapper>
          {/* <Table>
            <Row>
              <Employee />
            </Row>
          </Table> */}
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
