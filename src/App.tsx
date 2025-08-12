import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

function App() {
  return (
    <>
      <CssBaseline />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here as your app grows */}
        </Routes>
      </Layout>
    </>
  );
}

export default App;
