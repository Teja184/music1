import { StrictMode,Suspense,lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app'
//import HP1 from './pages/explore/p1'
import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from './pages/home/page'
//import HP2 from './pages/library/p2'
const HP1 = lazy (()=>import('./pages/explore/p1'))
const HP2 = lazy(()=>import('./pages/library/p2'))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Suspense fallback={<div>Loading....</div>}>
          <Routes>
              <Route path='/' element={<App/>}>
                <Route index element={<HomePage/>}/>
                <Route path='home' element={<HomePage/>}/>
                <Route path='explore' element={<HP1/>}/>
                <Route path='library' element={<HP2/>}/>
              </Route>
          </Routes>
        </Suspense>
    </BrowserRouter>
  </StrictMode>,
)