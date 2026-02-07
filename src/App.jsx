import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
// Pages
import Dashboard from './pages/Dashboard'
import Setting from './pages/Setting'
import Orders from './pages/Orders'
import USers from './pages/Users'
import Login from './pages/Login'
import Register from './pages/Register'
// Layout
import Layout from './layout/Layout'
// Routes
import PrivateRoute from './routes/PrivateRoute'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/setting"
          element={
            <PrivateRoute>
              <Layout>
                <Setting />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <PrivateRoute>
              <Layout>
                <Orders />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <Layout>
                <USers />
              </Layout>
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
