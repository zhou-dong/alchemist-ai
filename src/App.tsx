import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ColorModeProvider } from './theme';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes here as your app grows */}
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
