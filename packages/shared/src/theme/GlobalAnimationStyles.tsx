/**
 * Global Animation Styles
 * Keyframe animations injected into the document for use with CSS animation property
 * Includes both legacy animations and new Neo-Glass animations
 */

export const GlobalAnimationStyles = () => (
  <style
    dangerouslySetInnerHTML={{
      __html: `
        /* =================================================================
           LEGACY ANIMATIONS (backwards compatibility)
           ================================================================= */
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes glow {
          from { text-shadow: 0 0 30px rgba(99, 102, 241, 0.3); }
          to { text-shadow: 0 0 50px rgba(99, 102, 241, 0.6), 0 0 70px rgba(139, 92, 246, 0.3); }
        }

        /* =================================================================
           NEO-GLASS ANIMATIONS
           ================================================================= */
        
        /* Breathing/pulsing effect for orbs */
        @keyframes breathe {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        /* Simple fade in */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        /* Fade out */
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        
        /* Slide up with fade */
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* Slide down with fade */
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* Slide in from left */
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        /* Slide in from right */
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        /* Scale in with fade */
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        
        /* Subtle pulse */
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        
        /* Float up and down */
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        /* Shimmer loading effect */
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        /* Teal glow pulse */
        @keyframes glowTeal {
          0%, 100% { box-shadow: 0 4px 20px rgba(0, 191, 165, 0.25); }
          50% { box-shadow: 0 6px 30px rgba(0, 191, 165, 0.4); }
        }
        
        /* Violet glow pulse */
        @keyframes glowViolet {
          0%, 100% { box-shadow: 0 4px 20px rgba(139, 92, 246, 0.25); }
          50% { box-shadow: 0 6px 30px rgba(139, 92, 246, 0.4); }
        }
        
        /* Coral glow pulse */
        @keyframes glowCoral {
          0%, 100% { box-shadow: 0 4px 20px rgba(255, 107, 107, 0.25); }
          50% { box-shadow: 0 6px 30px rgba(255, 107, 107, 0.4); }
        }
        
        /* Sound wave animation (for audio indicators) */
        @keyframes soundWave {
          0%, 100% { transform: scaleY(0.3); }
          50% { transform: scaleY(1); }
        }
        
        /* Spin animation */
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* Bounce animation */
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        
        /* Gradient border animation */
        @keyframes gradientBorder {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* =================================================================
           UTILITY CLASSES (optional, for direct use)
           ================================================================= */
        
        .animate-breathe { animation: breathe 8s ease-in-out infinite; }
        .animate-fadeIn { animation: fadeIn 0.6s ease-out both; }
        .animate-slideUp { animation: slideUp 0.6s ease-out both; }
        .animate-slideDown { animation: slideDown 0.6s ease-out both; }
        .animate-scaleIn { animation: scaleIn 0.5s ease-out both; }
        .animate-pulse { animation: pulse 2s ease-in-out infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 1.5s ease-in-out infinite; }
        .animate-spin { animation: spin 1s linear infinite; }
        .animate-bounce { animation: bounce 1s ease-in-out infinite; }
        
        /* Stagger delay utilities */
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-900 { animation-delay: 0.9s; }
        .delay-1000 { animation-delay: 1s; }
      `,
    }}
  />
);

export default GlobalAnimationStyles;
