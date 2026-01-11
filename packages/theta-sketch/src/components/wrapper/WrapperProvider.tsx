import { Box, Typography } from '@mui/material';
import { createContext, useContext } from 'react';

const Title = ({ title }: { title: string }) => (
    <Box sx={{
        position: 'fixed',
        top: 30,
        width: '100vw',
        textAlign: 'center',
        zIndex: 0,
    }}>
        <Typography variant="h4" gutterBottom>
            {title}
        </Typography>
    </Box>
);

type WrapperContextType = {
    title: string;
};

const WrapperContext = createContext<WrapperContextType | undefined>(undefined);

export function WrapperProvider({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <WrapperContext.Provider value={{ title }}>
            <>
                <Title title={title} />
                {children}
            </>
        </WrapperContext.Provider>
    );
}

export function useWrapper() {
    const context = useContext(WrapperContext);
    if (!context) {
        throw new Error('useWrapper must be used within a WrapperProvider');
    }
    return context;
}
