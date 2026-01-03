import { useState } from 'react';
import { Box, Button, Typography, Paper, Chip } from '@mui/material';
import { ThetaSketchVisualization } from './ThetaSketchVisualization';

interface ThetaSketchState {
  theta: number;
  estimatedCardinality: number;
  elements: string[];
}

/**
 * ThetaSketchDemo - Interactive demonstration of Theta Sketch algorithm
 * 
 * Theta Sketch is a probabilistic data structure for estimating the number
 * of distinct elements (cardinality) in a dataset. It uses a sampling approach
 * where only elements with hash values below a threshold (theta) are kept.
 */
export const ThetaSketchDemo = () => {
  const [sketch, setSketch] = useState<ThetaSketchState>({
    theta: 1.0,
    estimatedCardinality: 0,
    elements: [],
  });

  const [inputValue, setInputValue] = useState('');
  const [maxEntries] = useState(16); // Typical k value for theta sketch

  // Simple hash function for demonstration
  const simpleHash = (str: string): number => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    // Normalize to 0-1 range
    return Math.abs(hash) / 2147483647;
  };

  const addElement = (element: string) => {
    if (!element.trim()) return;

    const hashValue = simpleHash(element);
    
    // Only add if hash is below theta threshold
    if (hashValue < sketch.theta) {
      const newElements = [...sketch.elements];
      
      // Add element if not already present
      if (!newElements.includes(element)) {
        newElements.push(element);
        
        // If we exceed max entries, increase theta to reduce set
        if (newElements.length > maxEntries) {
          // Find the element with highest hash value and remove it
          const sortedByHash = newElements
            .map(e => ({ element: e, hash: simpleHash(e) }))
            .sort((a, b) => b.hash - a.hash);
          
          const newTheta = sortedByHash[0].hash;
          const filteredElements = newElements.filter(
            e => simpleHash(e) < newTheta
          );
          
          setSketch({
            theta: newTheta,
            elements: filteredElements,
            estimatedCardinality: Math.round(filteredElements.length / newTheta),
          });
        } else {
          setSketch({
            ...sketch,
            elements: newElements,
            estimatedCardinality: Math.round(newElements.length / sketch.theta),
          });
        }
      }
    }
    
    setInputValue('');
  };

  const addRandomElements = (count: number) => {
    for (let i = 0; i < count; i++) {
      const randomElement = `element_${Math.random().toString(36).substring(7)}`;
      addElement(randomElement);
    }
  };

  const reset = () => {
    setSketch({
      theta: 1.0,
      estimatedCardinality: 0,
      elements: [],
    });
    setInputValue('');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, p: 3 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" sx={{ mb: 1, fontWeight: 700 }}>
          Theta Sketch Demo
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
          Theta Sketch is a probabilistic data structure for estimating distinct element counts.
          Add elements below and watch how the sketch adapts its sampling threshold (θ).
        </Typography>
      </Box>

      {/* Controls */}
      <Paper sx={{ p: 3, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
          <Box sx={{ flex: 1, minWidth: 200 }}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addElement(inputValue)}
              placeholder="Enter an element..."
              style={{
                width: '100%',
                padding: '12px 16px',
                fontSize: '16px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                outline: 'none',
              }}
            />
          </Box>
          <Button variant="contained" onClick={() => addElement(inputValue)}>
            Add Element
          </Button>
          <Button variant="outlined" onClick={() => addRandomElements(10)}>
            Add 10 Random
          </Button>
          <Button variant="outlined" color="error" onClick={reset}>
            Reset
          </Button>
        </Box>
      </Paper>

      {/* Stats */}
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <Paper sx={{ p: 2, flex: 1, minWidth: 150, textAlign: 'center' }}>
          <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.main' }}>
            θ = {sketch.theta.toFixed(4)}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Sampling Threshold
          </Typography>
        </Paper>
        <Paper sx={{ p: 2, flex: 1, minWidth: 150, textAlign: 'center' }}>
          <Typography variant="h3" sx={{ fontWeight: 700, color: 'secondary.main' }}>
            {sketch.elements.length}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Elements in Sketch
          </Typography>
        </Paper>
        <Paper sx={{ p: 2, flex: 1, minWidth: 150, textAlign: 'center' }}>
          <Typography variant="h3" sx={{ fontWeight: 700, color: 'success.main' }}>
            ~{sketch.estimatedCardinality}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Estimated Cardinality
          </Typography>
        </Paper>
      </Box>

      {/* Visualization */}
      <ThetaSketchVisualization
        theta={sketch.theta}
        elements={sketch.elements}
        hashFunction={simpleHash}
      />

      {/* Element list */}
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Elements in Sketch</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {sketch.elements.length === 0 ? (
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              No elements yet. Add some above!
            </Typography>
          ) : (
            sketch.elements.map((element, index) => (
              <Chip
                key={index}
                label={`${element} (h=${simpleHash(element).toFixed(3)})`}
                size="small"
                sx={{
                  bgcolor: `rgba(99, 102, 241, ${0.2 + simpleHash(element) * 0.5})`,
                }}
              />
            ))
          )}
        </Box>
      </Paper>
    </Box>
  );
};

