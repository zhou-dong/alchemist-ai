// Global styles component for keyframe animations
export const GlobalAnimationStyles = () => (
    <style
        dangerouslySetInnerHTML={{
            __html: `
                @keyframes gradientShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                
                @keyframes glow {
                    from { text-shadow: 0 0 30px rgba(99, 102, 241, 0.3); }
                    to { text-shadow: 0 0 50px rgba(99, 102, 241, 0.6), 0 0 70px rgba(139, 92, 246, 0.3); }
                }
            `,
        }}
    />
);
