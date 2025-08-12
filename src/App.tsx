import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ThemeToggleFab from './theme/ThemeToggleFab';

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
      <ThemeToggleFab />
    </>
  );
}

export default App;
