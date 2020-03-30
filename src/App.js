import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import ScrapBook from "./components/scrapbook/scrapbook.component";
import CreateBook from './components/createbook/createbook.component'
import "./App.css";
import ScrapBookList from "./components/scrapbookList/scrapbookList.component";
const history = createHistory();
function App() {
  return (
    <div className="App">
      <Router history={history}>
      <Route path="/" exact component={ScrapBookList} />
        <Route path="/book1" exact component={ScrapBook} />
        <Route path="/create" exact component={CreateBook} />
      </Router>
    </div>
  );
}
export default App;