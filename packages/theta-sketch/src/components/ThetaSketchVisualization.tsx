import { Box, Typography } from '@mui/material';

interface ThetaSketchVisualizationProps {
  theta: number;
  elements: string[];
  hashFunction: (str: string) => number;
}

/**
 * ThetaSketchVisualization - Visual representation of the Theta Sketch
 * 
 * Shows a number line from 0 to 1, with:
 * - The theta threshold line
 * - Hash values of elements plotted as points
 * - Visual indication of which elements are "in" vs "out" of the sketch
 */
export const ThetaSketchVisualization = ({
  theta,
  elements,
  hashFunction,
}: ThetaSketchVisualizationProps) => {
  const width = 800;
  const height = 200;
  const padding = { left: 50, right: 50, top: 40, bottom: 40 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  // Calculate positions
  const thetaX = padding.left + theta * chartWidth;

  // Map elements to their hash values and positions
  const elementData = elements.map((element, index) => ({
    element,
    hash: hashFunction(element),
    x: padding.left + hashFunction(element) * chartWidth,
    y: padding.top + chartHeight / 2,
    index,
  }));

  return (
    <Box sx={{ width: '100%', overflow: 'auto' }}>
      <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
        Hash Space Visualization
      </Typography>
      
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <svg width={width} height={height} style={{ background: 'rgba(0,0,0,0.02)', borderRadius: 12 }}>
          {/* Background gradient for accepted region */}
          <defs>
            <linearGradient id="acceptedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(16, 185, 129, 0.1)" />
              <stop offset="100%" stopColor="rgba(16, 185, 129, 0.2)" />
            </linearGradient>
            <linearGradient id="rejectedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(239, 68, 68, 0.1)" />
              <stop offset="100%" stopColor="rgba(239, 68, 68, 0.05)" />
            </linearGradient>
          </defs>

          {/* Accepted region (0 to theta) */}
          <rect
            x={padding.left}
            y={padding.top}
            width={thetaX - padding.left}
            height={chartHeight}
            fill="url(#acceptedGradient)"
            rx={4}
          />

          {/* Rejected region (theta to 1) */}
          <rect
            x={thetaX}
            y={padding.top}
            width={padding.left + chartWidth - thetaX}
            height={chartHeight}
            fill="url(#rejectedGradient)"
            rx={4}
          />

          {/* Axis line */}
          <line
            x1={padding.left}
            y1={padding.top + chartHeight / 2}
            x2={padding.left + chartWidth}
            y2={padding.top + chartHeight / 2}
            stroke="#666"
            strokeWidth={2}
          />

          {/* Tick marks */}
          {[0, 0.25, 0.5, 0.75, 1].map((value) => {
            const x = padding.left + value * chartWidth;
            return (
              <g key={value}>
                <line
                  x1={x}
                  y1={padding.top + chartHeight / 2 - 5}
                  x2={x}
                  y2={padding.top + chartHeight / 2 + 5}
                  stroke="#666"
                  strokeWidth={2}
                />
                <text
                  x={x}
                  y={padding.top + chartHeight / 2 + 25}
                  textAnchor="middle"
                  fontSize={12}
                  fill="#666"
                >
                  {value}
                </text>
              </g>
            );
          })}

          {/* Theta threshold line */}
          <line
            x1={thetaX}
            y1={padding.top - 10}
            x2={thetaX}
            y2={padding.top + chartHeight + 10}
            stroke="#F59E0B"
            strokeWidth={3}
            strokeDasharray="5,5"
          />
          <text
            x={thetaX}
            y={padding.top - 15}
            textAnchor="middle"
            fontSize={14}
            fontWeight="bold"
            fill="#F59E0B"
          >
            θ = {theta.toFixed(4)}
          </text>

          {/* Element points */}
          {elementData.map(({ element, hash, x, y, index }) => (
            <g key={element}>
              <circle
                cx={x}
                cy={y}
                r={8}
                fill={hash < theta ? '#10B981' : '#EF4444'}
                stroke="white"
                strokeWidth={2}
              />
              <text
                x={x}
                y={y - 15}
                textAnchor="middle"
                fontSize={10}
                fill={hash < theta ? '#10B981' : '#EF4444'}
              >
                {hash.toFixed(3)}
              </text>
            </g>
          ))}

          {/* Labels */}
          <text
            x={padding.left + 10}
            y={padding.top + 15}
            fontSize={12}
            fill="#10B981"
            fontWeight="bold"
          >
            ACCEPTED
          </text>
          <text
            x={padding.left + chartWidth - 10}
            y={padding.top + 15}
            textAnchor="end"
            fontSize={12}
            fill="#EF4444"
            fontWeight="bold"
          >
            REJECTED
          </text>

          {/* X-axis label */}
          <text
            x={padding.left + chartWidth / 2}
            y={height - 5}
            textAnchor="middle"
            fontSize={14}
            fill="#666"
          >
            Hash Value (0 to 1)
          </text>
        </svg>
      </Box>

      <Typography variant="body2" sx={{ mt: 2, textAlign: 'center', color: 'text.secondary' }}>
        Elements with hash values below θ (theta) are kept in the sketch.
        As more elements are added, θ decreases to maintain bounded memory.
      </Typography>
    </Box>
  );
};

