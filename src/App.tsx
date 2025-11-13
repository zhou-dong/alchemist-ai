import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { ColorModeProvider } from './theme/ColorModeContext';
import { GlobalAnimationStyles } from './theme/GlobalAnimationStyles';
import Layout from './components/layout/Layout';
import Home from './pages/home';
import Welcome from './pages/Welcome';
import Perceptron from './pages/Perceptron';
import Roadmap from './pages/roadmap';
import FunctionsDecisions from './pages/FunctionsDecisions';
import SimpleFunctions from './pages/SimpleFunctions';
import MultiInputFunctions from './pages/MultiInputFunctions';
import MathToNeurons from './pages/MathToNeurons';
import LogisticRegression from './pages/LogisticRegression';
import MultiLayerNetwork from './pages/MultiLayerNetwork';
import Backpropagation from './pages/Backpropagation';
import NeuralNetworks from './pages/NeuralNetworks';

function App() {
  return (
    <ColorModeProvider>
      <CssBaseline />
      <GlobalAnimationStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alchemist-ai" element={<Home />} />
          <Route path="/alchemist-ai/welcome" element={<Welcome />} />
          <Route path="/alchemist-ai/perceptron" element={<Perceptron />} />
          <Route path="/alchemist-ai/roadmap" element={<Roadmap />} />
          <Route path="/alchemist-ai/functions-decisions" element={<FunctionsDecisions />} />
          <Route path="/alchemist-ai/simple-functions" element={<SimpleFunctions />} />
          <Route path="/alchemist-ai/multi-input-functions" element={<MultiInputFunctions />} />
          <Route path="/alchemist-ai/math-to-neurons" element={<MathToNeurons />} />
          <Route path="/alchemist-ai/logistic-regression" element={<LogisticRegression />} />
          <Route path="/alchemist-ai/multi-layer-network" element={<MultiLayerNetwork />} />
          <Route path="/alchemist-ai/backpropagation" element={<Backpropagation />} />
          <Route path="/alchemist-ai/neural-networks" element={<NeuralNetworks />} />
        </Routes>
      </Layout>
    </ColorModeProvider>
  );
}

export default App;
