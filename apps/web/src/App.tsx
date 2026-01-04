import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { ThemeContextProvider, GlobalAnimationStyles, Layout } from '@alchemist/shared';
import { StepStatusProvider } from './contexts/StepStatusContext';
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
// Import theta-sketch module
import { ThetaSketchPage, ThetaSketchWelcome } from '@alchemist/theta-sketch';

function App() {
  return (
    <ThemeContextProvider defaultTheme="neo-glass" defaultMode="dark">
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
            {/* Theta Sketch module routes */}
            <Route path="/alchemist-sketches/theta-sketch" element={<ThetaSketchWelcome />} />
            <Route path="/alchemist-sketches/theta-sketch/learn" element={<ThetaSketchPage />} />
          </Routes>
        </Layout>
      </StepStatusProvider>
    </ThemeContextProvider>
  );
}

export default App;

