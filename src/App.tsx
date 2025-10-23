import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import Perceptron from './pages/Perceptron';

function App() {
  return (
    <>
      <CssBaseline />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alchemist-ai" element={<Home />} />
          <Route path="/alchemist-ai/welcome" element={<Welcome />} />
          <Route path="/alchemist-ai/perceptron" element={<Perceptron />} />
          {/* Add more routes here as your app grows */}
        </Routes>
      </Layout>
    </>
  );
}

export default App;
