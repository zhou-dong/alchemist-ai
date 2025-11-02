import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { ColorModeProvider } from './theme/ColorModeContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import Perceptron from './pages/Perceptron';
import Roadmap from './pages/Roadmap';

function App() {
  return (
    <ColorModeProvider>
      <CssBaseline />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alchemist-ai" element={<Home />} />
          <Route path="/alchemist-ai/welcome" element={<Welcome />} />
          <Route path="/alchemist-ai/perceptron" element={<Perceptron />} />
          <Route path="/alchemist-ai/roadmap" element={<Roadmap />} />
          {/* Add more routes here as your app grows */}
        </Routes>
      </Layout>
    </ColorModeProvider>
  );
}

export default App;
