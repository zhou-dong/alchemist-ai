import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { ColorModeProvider } from './theme/ColorModeContext';
import { StepStatusProvider } from './contexts/StepStatusContext';
import { GlobalAnimationStyles } from './theme/GlobalAnimationStyles';
import Layout from './components/layout/Layout';
import Home from './pages/home';
import Welcome from './pages/Welcome';
import Perceptron from './pages/Perceptron';
import Roadmap from './pages/roadmap';
import FunctionsDecisions from './pages/functions-decisions';
import SimpleFunctions from './pages/simple-function';
import MultiInputFunctions from './pages/MultiInputFunctions';
import MathToNeurons from './pages/MathToNeurons';
import LogisticRegression from './pages/LogisticRegression';
import MultiLayerNetwork from './pages/MultiLayerNetwork';
import Backpropagation from './pages/Backpropagation';
import NeuralNetworks from './pages/NeuralNetworks';

function App() {
  return (
    <ColorModeProvider>
      <StepStatusProvider>
        <CssBaseline />
        <GlobalAnimationStyles />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/alchemist-sketches" element={<Home />} />
            <Route path="/alchemist-sketches/welcome" element={<Welcome />} />
            <Route path="/alchemist-sketches/perceptron" element={<Perceptron />} />
            <Route path="/alchemist-sketches/roadmap" element={<Roadmap />} />
            <Route path="/alchemist-sketches/functions-decisions" element={<FunctionsDecisions />} />
            <Route path="/alchemist-sketches/simple-functions" element={<SimpleFunctions />} />
            <Route path="/alchemist-sketches/multi-input-functions" element={<MultiInputFunctions />} />
            <Route path="/alchemist-sketches/math-to-neurons" element={<MathToNeurons />} />
            <Route path="/alchemist-sketches/logistic-regression" element={<LogisticRegression />} />
            <Route path="/alchemist-sketches/multi-layer-network" element={<MultiLayerNetwork />} />
            <Route path="/alchemist-sketches/backpropagation" element={<Backpropagation />} />
            <Route path="/alchemist-sketches/neural-networks" element={<NeuralNetworks />} />
          </Routes>
        </Layout>
      </StepStatusProvider>
    </ColorModeProvider>
  );
}

export default App;
