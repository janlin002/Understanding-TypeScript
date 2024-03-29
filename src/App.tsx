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
// const Class = lazy(()=>import('./class'))
const Interface = lazy(()=>import('./interface'))
// const Generics = lazy(()=>import('./Generics'))
const TsReset = lazy(()=>import('./ts-reset'))

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
            {/* <li>
              <Link to="/class">Class</Link>
            </li> */}
            <li>
              <Link to="/interface">Interface</Link>
            </li>
            <li>
              <Link to="/generics">Generics</Link>
            </li>
            <li>
              <Link to="/ts-reset">TsReset</Link>
            </li>
          </ul>
        </nav>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/object" element={<Object />} />
            <Route path="/tuples" element={<Tuples />} />
            <Route path="/function" element={<Function />} />
            <Route path="/enum" element={<Enum />} />
            {/* <Route path="/class" element={<Class />} /> */}
            <Route path="/interface" element={<Interface />} />
            {/* <Route path="/generics" element={<Generics />} /> */}
            <Route path="/ts-reset" element={<TsReset />} />
          </Routes>
        </Suspense>
        
      </div>
    </Router>
  )
}

export default App
