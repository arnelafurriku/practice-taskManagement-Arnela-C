import './App.css'
import TaskList from './components/TaskList'
import TaskDetail from './components/TaskDetail'
import { BrowserRouter as Router, Routes, Route } from 'react-router';

function App() {

  return (
    <>
    <TaskList/>
    <div>
        <Router>
          <Routes>
            <Route path="/TaskDetail" element={<TaskDetail />} />
            <Route path="/TaskList" element={<TaskList />} />
          </Routes>
        </Router>
    </div>
    </>
    )
}

export default App