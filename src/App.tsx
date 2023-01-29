import { lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const Object = lazy(()=>import('./object'))
const Tuples = lazy(()=>import('./tuples'))
const Function = lazy(()=>import('./function'))
const Enum = lazy(()=>import('./enum'))

function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/object">object</Link>
            </li>
            <li>
              <Link to="/tuples">Tuples</Link>
            </li>
            <li>
              <Link to="/function">Function</Link>
            </li>
            <li>
              <Link to="/enum">Enum</Link>
            </li>
          </ul>
        </nav>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/object" element={<Object />} />
            <Route path="/tuples" element={<Tuples />} />
            <Route path="/function" element={<Function />} />
            <Route path="/enum" element={<Enum />} />
          </Routes>
        </Suspense>
        
      </div>
    </Router>
  )
}

export default App
