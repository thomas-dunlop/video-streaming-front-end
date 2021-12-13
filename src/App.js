import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {Upload, Videos, Video, Home} from './pages'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
            integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
            crossorigin="anonymous"
          />
      </header>

      <Router>
        <Routes> 
          <Route path = "/" element = {<Home />}/>
          <Route path = "upload" element = {<Upload />}/>
          <Route path = "videos" element = {<Videos />}/>
          <Route path = "videos/:id" element = {<Video />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
