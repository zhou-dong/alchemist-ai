import { useEffect, useState, useRef } from "react";
import { Box } from "@mui/material";

export const TypingText = ({ text, speed = 1.0, onComplete, shouldStart = true }: { text: string; speed?: number; onComplete?: () => void; shouldStart?: boolean }) => {
    const [displayedText, setDisplayedText] = useState('');
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const onCompleteRef = useRef(onComplete);
    const currentIndexRef = useRef(0);

    useEffect(() => {
        onCompleteRef.current = onComplete;
    }, [onComplete]);

    const baseDelay = 30;
    const delay = Math.max(5, Math.min(100, Math.round(baseDelay / (speed || 1.0))));

    useEffect(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }

        if (!shouldStart || !text) {
            setDisplayedText('');
            currentIndexRef.current = 0;
            return;
        }

        if (displayedText === '' && currentIndexRef.current !== 0) {
            currentIndexRef.current = 0;
        }

        const typeNextChar = () => {
            if (currentIndexRef.current < text.length) {
                currentIndexRef.current += 1;
                setDisplayedText(text.slice(0, currentIndexRef.current));
                timeoutRef.current = setTimeout(typeNextChar, delay);
            } else if (onCompleteRef.current) {
                onCompleteRef.current();
            }
        };

        timeoutRef.current = setTimeout(typeNextChar, delay);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
            }
        };
    }, [text, delay, shouldStart, displayedText]);

    if (!shouldStart) return null;

    return (
        <span>
            {displayedText}
            {displayedText.length < text.length && (
                <Box
                    component="span"
                    sx={{
                        display: 'inline-block',
                        width: '3px',
                        height: '1.2em',
                        bgcolor: 'currentColor',
                        ml: 0.5,
                        borderRadius: '2px',
                        animation: 'softBlink 1.2s ease-in-out infinite',
                        '@keyframes softBlink': {
                            '0%, 50%': { opacity: 0.8 },
                            '51%, 100%': { opacity: 0.3 },
                        },
                    }}
                />
            )}
        </span>
    );
};

