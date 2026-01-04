import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { ThemeContextProvider, GlobalAnimationStyles, Layout } from '@alchemist/shared';
import { StepStatusProvider } from '../../../packages/shared/src/components/roadmap/contexts/StepStatusContext';
import Home from './pages/Home';
import Sketches from './pages/Sketches';
// Import theta-sketch module
import { ThetaSketchPage, ThetaSketchWelcome, ThetaSketchRoadmap } from '@alchemist/theta-sketch';

function App() {
  return (
    <ThemeContextProvider defaultTheme="neo-glass" defaultMode="dark">
      <StepStatusProvider>
        <CssBaseline />
        <GlobalAnimationStyles />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Sketches list */}
            <Route path="/sketches" element={<Sketches />} />
            {/* Theta Sketch module routes */}
            <Route path="/theta-sketch" element={<ThetaSketchWelcome />} />
            <Route path="/theta-sketch/roadmap" element={<ThetaSketchRoadmap />} />
            <Route path="/theta-sketch/learn" element={<ThetaSketchPage />} />
          </Routes>
        </Layout>
      </StepStatusProvider>
    </ThemeContextProvider>
  );
}

export default App;

