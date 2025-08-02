import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Examples from './pages/Examples';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/examples" element={<Examples />} />
            {/* Add more routes here as your app grows */}
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
