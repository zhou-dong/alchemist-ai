// Narration utilities for estimating speech duration

// Average speaking rate: ~150 words per minute at rate 1.0
const WORDS_PER_SECOND = 150 / 60; // ~2.5 words per second

/**
 * Estimate speaking duration based on word count
 * @param text - The text to estimate duration for
 * @param rate - Speech rate (default: 1.0)
 * @returns Duration in seconds
 */
export function estimateNarrationDuration(text: string, rate: number = 1.0): number {
    // Remove punctuation and count only actual words
    const cleanedText = text.replace(/[.,!?;:'"()\-]/g, '');
    const wordCount = cleanedText.split(/\s+/).filter(w => w.length > 0).length;
    return wordCount / (WORDS_PER_SECOND * rate);
}

/**
 * Calculate step durations and cumulative start times from narrations
 * @param narrations - Record of step index to narration text
 * @param rate - Speech rate (default: 1.0)
 * @returns Object with durations and start times
 */
export function calculateStepTimings(narrations: Record<number, string>, rate: number = 1.0): {
    durations: Record<number, number>;
    startTimes: Record<number, number>;
    totalDuration: number;
} {
    const durations: Record<number, number> = {};
    const startTimes: Record<number, number> = {};
    
    let cumulativeTime = 0;
    Object.entries(narrations).forEach(([key, narration]) => {
        const stepIndex = parseInt(key);
        const duration = estimateNarrationDuration(narration, rate);
        durations[stepIndex] = duration;
        startTimes[stepIndex] = cumulativeTime;
        cumulativeTime += duration;
    });

    return {
        durations,
        startTimes,
        totalDuration: cumulativeTime,
    };
}
