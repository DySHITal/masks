import { createRoot } from 'react-dom/client'
import Router from './routes/Router'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={Router} />
)
