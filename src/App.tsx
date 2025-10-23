import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Welcome from './pages/Welcome';

function App() {
  return (
    <>
      <CssBaseline />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alchemist-ai" element={<Home />} />
          <Route path="/alchemist-ai/welcome" element={<Welcome />} />
          {/* Add more routes here as your app grows */}
        </Routes>
      </Layout>
    </>
  );
}

export default App;
