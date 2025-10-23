import { 
  Box, 
  Typography, 
  Button, 
  Card, 
  CardContent, 
  Grid,
  Chip, 
  LinearProgress,
  Avatar,
  IconButton,
  Fade,
  useTheme,
  alpha,
  Container,
  Stack,
  Paper,
  Divider
} from '@mui/material';
import { 
  PlayArrow, 
  School, 
  Psychology, 
  AutoGraph, 
  Code, 
  EmojiEvents,
  TrendingUp,
  Lightbulb,
  Speed,
  Security,
  Rocket,
  Star,
  Timeline,
  Science,
  Memory,
  SmartToy,
  PsychologyAlt,
  Biotech
} from '@mui/icons-material';
import { useState, useEffect } from 'react';

interface LearningModule {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  progress: number;
  unlocked: boolean;
  color: string;
}

const learningModules: LearningModule[] = [
  {
    id: 'neural-basics',
    title: 'Neural Network Fundamentals',
    description: 'Learn the building blocks of neural networks from scratch',
    icon: <Psychology />,
    difficulty: 'Beginner',
    duration: '30 min',
    progress: 0,
    unlocked: true,
    color: '#6366F1'
  },
  {
    id: 'backpropagation',
    title: 'Backpropagation & Training',
    description: 'Master how neural networks learn and improve',
    icon: <AutoGraph />,
    difficulty: 'Intermediate',
    duration: '45 min',
    progress: 0,
    unlocked: false,
    color: '#8B5CF6'
  },
  {
    id: 'deep-learning',
    title: 'Deep Learning Architectures',
    description: 'Explore CNNs, RNNs, and transformer models',
    icon: <Code />,
    difficulty: 'Advanced',
    duration: '60 min',
    progress: 0,
    unlocked: false,
    color: '#F59E0B'
  },
  {
    id: 'optimization',
    title: 'Optimization Techniques',
    description: 'Advanced training methods and hyperparameter tuning',
    icon: <TrendingUp />,
    difficulty: 'Advanced',
    duration: '50 min',
    progress: 0,
    unlocked: false,
    color: '#10B981'
  }
];

const achievements = [
  { name: 'First Steps', description: 'Complete your first lesson', icon: <Lightbulb />, earned: true },
  { name: 'Quick Learner', description: 'Complete 3 lessons in a day', icon: <Speed />, earned: false },
  { name: 'Neural Master', description: 'Complete all modules', icon: <EmojiEvents />, earned: false },
  { name: 'Code Warrior', description: 'Implement 5 neural networks', icon: <Security />, earned: false }
];

export const Home = () => {
  const theme = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: <PsychologyAlt />,
      title: "Interactive Learning",
      description: "Hands-on neural network building",
      color: "#6366F1"
    },
    {
      icon: <Science />,
      title: "Real Experiments",
      description: "Live coding and visualization",
      color: "#8B5CF6"
    },
    {
      icon: <Memory />,
      title: "AI-Powered",
      description: "Personalized learning paths",
      color: "#F59E0B"
    },
    {
      icon: <SmartToy />,
      title: "Game Mechanics",
      description: "Achievements and progress tracking",
      color: "#10B981"
    }
  ];

  const stats = [
    { label: "Students", value: "10K+", icon: <School /> },
    { label: "Modules", value: "50+", icon: <Code /> },
    { label: "Success Rate", value: "95%", icon: <TrendingUp /> },
    { label: "Awards", value: "15+", icon: <EmojiEvents /> }
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: `linear-gradient(135deg, #0F0F23 0%, #1A1A2E 50%, #16213E 100%)`,
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Elements */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 80%, ${alpha('#6366F1', 0.1)} 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, ${alpha('#8B5CF6', 0.1)} 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, ${alpha('#F59E0B', 0.05)} 0%, transparent 50%)
        `,
        animation: 'float 20s ease-in-out infinite'
      }} />

      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ 
          textAlign: 'center', 
          py: { xs: 8, md: 12 },
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {/* Main Title with Animation */}
          <Fade in={isLoaded} timeout={1000}>
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h1"
                component="h1"
                fontWeight={900}
                sx={{
                  fontSize: { xs: '3rem', md: '4.5rem', lg: '6rem' },
                  background: `linear-gradient(135deg, #6366F1, #8B5CF6, #F59E0B)`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2,
                  textShadow: '0 0 30px rgba(99, 102, 241, 0.3)',
                  animation: 'glow 2s ease-in-out infinite alternate'
                }}
              >
                NEURAL ACADEMY
              </Typography>
              
              <Typography
                variant="h4"
                sx={{
                  color: alpha('#FFFFFF', 0.9),
                  fontWeight: 300,
                  mb: 2,
                  fontSize: { xs: '1.2rem', md: '1.5rem' }
                }}
              >
                Master AI Through Interactive Gaming
              </Typography>
              
              <Typography
                variant="h6"
                sx={{
                  color: alpha('#FFFFFF', 0.7),
                  maxWidth: 600,
                  mx: 'auto',
                  mb: 6,
                  fontWeight: 400
                }}
              >
                Build neural networks, train models, and unlock the secrets of artificial intelligence 
                through our revolutionary game-based learning platform.
              </Typography>
            </Box>
          </Fade>

          {/* CTA Buttons */}
          <Fade in={isLoaded} timeout={1500}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ mb: 8 }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<Rocket />}
                sx={{
                  py: 2,
                  px: 4,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  background: `linear-gradient(135deg, #6366F1, #8B5CF6)`,
                  borderRadius: 3,
                  textTransform: 'none',
                  boxShadow: '0 8px 32px rgba(99, 102, 241, 0.3)',
                  '&:hover': {
                    background: `linear-gradient(135deg, #5B5BD6, #7C3AED)`,
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 40px rgba(99, 102, 241, 0.4)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Start Your Journey
              </Button>
              
              <Button
                variant="outlined"
                size="large"
                startIcon={<PlayArrow />}
                sx={{
                  py: 2,
                  px: 4,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderColor: alpha('#FFFFFF', 0.3),
                  color: '#FFFFFF',
                  borderRadius: 3,
                  textTransform: 'none',
                  backdropFilter: 'blur(10px)',
                  background: alpha('#FFFFFF', 0.1),
                  '&:hover': {
                    borderColor: alpha('#FFFFFF', 0.6),
                    background: alpha('#FFFFFF', 0.2),
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Watch Demo
              </Button>
            </Stack>
          </Fade>

          {/* Features Grid */}
          <Fade in={isLoaded} timeout={2000}>
            <Grid container spacing={3} sx={{ mb: 8 }}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card
                    onMouseEnter={() => setHoveredFeature(feature.title)}
                    onMouseLeave={() => setHoveredFeature(null)}
                    sx={{
                      background: `linear-gradient(135deg, ${alpha(feature.color, 0.1)}, ${alpha(feature.color, 0.05)})`,
                      border: `1px solid ${alpha(feature.color, 0.2)}`,
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s ease',
                      transform: hoveredFeature === feature.title ? 'translateY(-8px)' : 'translateY(0)',
                      boxShadow: hoveredFeature === feature.title 
                        ? `0 20px 40px ${alpha(feature.color, 0.3)}`
                        : '0 4px 20px rgba(0,0,0,0.1)',
                      cursor: 'pointer'
                    }}
                  >
                    <CardContent sx={{ textAlign: 'center', p: 3 }}>
                      <Avatar sx={{ 
                        bgcolor: feature.color, 
                        mx: 'auto', 
                        mb: 2,
                        width: 64,
                        height: 64
                      }}>
                        {feature.icon}
                      </Avatar>
                      <Typography variant="h6" fontWeight={600} sx={{ mb: 1, color: '#FFFFFF' }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: alpha('#FFFFFF', 0.7) }}>
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Fade>

          {/* Stats Section */}
          <Fade in={isLoaded} timeout={2500}>
            <Paper sx={{
              background: alpha('#FFFFFF', 0.05),
              backdropFilter: 'blur(20px)',
              border: `1px solid ${alpha('#FFFFFF', 0.1)}`,
              borderRadius: 4,
              p: 4,
              mb: 6
            }}>
              <Grid container spacing={4}>
                {stats.map((stat, index) => (
                  <Grid item xs={6} md={3} key={index}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Avatar sx={{ 
                        bgcolor: alpha(theme.palette.primary.main, 0.2),
                        mx: 'auto',
                        mb: 2,
                        width: 56,
                        height: 56
                      }}>
                        {stat.icon}
                      </Avatar>
                      <Typography variant="h4" fontWeight={700} sx={{ color: '#FFFFFF', mb: 0.5 }}>
                        {stat.value}
                      </Typography>
                      <Typography variant="body2" sx={{ color: alpha('#FFFFFF', 0.7) }}>
                        {stat.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Fade>

          {/* Scroll Indicator */}
          <Fade in={isLoaded} timeout={3000}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              color: alpha('#FFFFFF', 0.6)
            }}>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Scroll to explore
              </Typography>
              <Box sx={{
                width: 2,
                height: 40,
                background: `linear-gradient(to bottom, ${alpha('#6366F1', 0.8)}, transparent)`,
                animation: 'pulse 2s ease-in-out infinite'
              }} />
            </Box>
          </Fade>
        </Box>
      </Container>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
        
        @keyframes glow {
          from { text-shadow: 0 0 30px rgba(99, 102, 241, 0.3); }
          to { text-shadow: 0 0 50px rgba(99, 102, 241, 0.6), 0 0 70px rgba(139, 92, 246, 0.3); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
      `}</style>
    </Box>
  );
};

export default Home; 