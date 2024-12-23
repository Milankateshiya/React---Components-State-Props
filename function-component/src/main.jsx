import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import EmployeeData from './components/EmployeeData'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EmployeeData/>
  </StrictMode>,
)
