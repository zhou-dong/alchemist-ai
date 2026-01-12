import { Box, Typography } from "@mui/material";

const StepTitle = ({ title }: { title: string }) => (
    <Box sx={{
        position: 'fixed',
        top: window.innerHeight / 12,
        textAlign: 'center',
        width: '100%',
        zIndex: 0,
    }}>
        <Typography
            variant="h3"
            color="primary"
        >
            {title}
        </Typography>
    </Box>
);

export default StepTitle;
