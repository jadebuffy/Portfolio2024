import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import ProjectPage from './pages/ProjectPage/ProjectPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<ProjectPage/>} />
      </Routes>
    </Router>
  );
}
export default App;

