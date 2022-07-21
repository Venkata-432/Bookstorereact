import './App.css';
import HomeComponent from './HomeComponent';
import AddBookComponent from './AddBookComponent';
import UpdateBookComponent from './UpdateBookComponent';
import ViewBookComponent from './ViewBookComponent';
import { Route, BrowserRouter as Router ,Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={HomeComponent} />
            <Route path="/addBook" exact component={AddBookComponent} />
            <Route path="/updateBook/:id" exact component={UpdateBookComponent} />
            <Route path="/viewBook/:id" exact component={ViewBookComponent} />
          </Switch> 
        </div>
      </Router>
    </div>
  );
}

export default App;