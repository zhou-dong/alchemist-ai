import { Box, IconButton, Tooltip } from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";

const NextPageButton = ({ nextPagePath, title }: { nextPagePath: string, title: string }) => {
    const navigate = useNavigate();
    return (
        <Box sx={{
            position: 'fixed',
            top: '50%',
            right: 20,
            transform: 'translateY(-50%)',
            zIndex: 1000,
        }}>
            <Tooltip title={title} placement="left">
                <IconButton
                    color='secondary'
                    size="large"
                    onClick={() => {
                        navigate(nextPagePath);
                    }}
                >
                    <ArrowForwardIcon />
                </IconButton>
            </Tooltip>
        </Box>
    );
};

export default NextPageButton;
