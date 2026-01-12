import { Box, Typography } from "@mui/material";

const StepTitle = ({ title }: { title: string }) => (
    <Box sx={{
        position: 'fixed',
        top: 30,
        textAlign: 'center',
        width: '100%',
        zIndex: 0,
    }}>
        <Typography variant="h3" gutterBottom>
            {title}
        </Typography>
    </Box>
);

export default StepTitle;
