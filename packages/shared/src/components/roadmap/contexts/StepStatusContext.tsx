import React, { createContext, useContext, useMemo, useCallback } from 'react';
import { useLocalStorage, useColorMode } from '@alchemist/shared';
import type { StepStatus } from '../data/types';
import { TOTAL_STEPS, getLearningPathData, type LearningPathItem } from '../data/planets';

interface StepStatusContextType {
    stepStatuses: Array<StepStatus | undefined>;
    updateStepStatus: (index: number, newStatus: StepStatus) => void;
    updateMultipleStepStatuses: (updates: Array<{ index: number; status: StepStatus }>) => void;
    getStepStatus: (index: number) => StepStatus | undefined;
    learningPathData: LearningPathItem[];
}

const StepStatusContext = createContext<StepStatusContextType | undefined>(undefined);

export const useStepStatusContext = () => {
    const context = useContext(StepStatusContext);
    if (!context) {
        throw new Error('useStepStatusContext must be used within a StepStatusProvider');
    }
    return context;
};

interface StepStatusProviderProps {
    children: React.ReactNode;
}

export const StepStatusProvider: React.FC<StepStatusProviderProps> = ({ children }) => {
    const { mode } = useColorMode();
    const isDarkMode = mode === 'dark';

    // Load and save step statuses from/to localStorage
    // Store as array: [status0, status1, status2, ...] where undefined means use base status
    const [savedStatusesRaw, setSavedStatusesRaw] = useLocalStorage<Array<StepStatus | undefined>>(
        'roadmap-step-statuses',
        Array(TOTAL_STEPS).fill(undefined)
    );

    // Ensure the array is always the correct length
    const savedStatuses = useMemo(() => {
        const statuses = [...savedStatusesRaw];
        // Pad or trim to match TOTAL_STEPS
        while (statuses.length < TOTAL_STEPS) {
            statuses.push(undefined);
        }
        return statuses.slice(0, TOTAL_STEPS);
    }, [savedStatusesRaw]);

    // Wrapper to update statuses with proper length
    const setSavedStatuses = useCallback((updater: (prev: Array<StepStatus | undefined>) => Array<StepStatus | undefined>) => {
        setSavedStatusesRaw(prev => {
            const updated = updater(prev);
            // Ensure correct length
            while (updated.length < TOTAL_STEPS) {
                updated.push(undefined);
            }
            return updated.slice(0, TOTAL_STEPS);
        });
    }, [setSavedStatusesRaw]);

    // Get base learning path data (with default statuses)
    const baseLearningPathData = useMemo(() => getLearningPathData(isDarkMode), [isDarkMode]);

    // Apply saved statuses from localStorage to learning path data
    const learningPathData = useMemo(() => {
        return baseLearningPathData.map((item, index) => ({
            ...item,
            status: savedStatuses[index] !== undefined ? savedStatuses[index]! : item.status
        }));
    }, [baseLearningPathData, savedStatuses]);

    // Helper function to update status and save to localStorage
    const updateStepStatus = useCallback((index: number, newStatus: StepStatus) => {
        if (index < 0 || index >= TOTAL_STEPS) {
            console.warn(`Invalid step index: ${index}. Must be between 0 and ${TOTAL_STEPS - 1}`);
            return;
        }
        setSavedStatuses(prev => {
            const updated = [...prev];
            updated[index] = newStatus;
            return updated;
        });
    }, [setSavedStatuses]);

    // Helper function to update multiple step statuses in a single state update
    // This prevents React batching from overwriting updates when called multiple times
    const updateMultipleStepStatuses = useCallback((updates: Array<{ index: number; status: StepStatus }>) => {
        setSavedStatuses(prev => {
            const updated = [...prev];
            updates.forEach(({ index, status }) => {
                if (index >= 0 && index < TOTAL_STEPS) {
                    updated[index] = status;
                } else {
                    console.warn(`Invalid step index: ${index}. Must be between 0 and ${TOTAL_STEPS - 1}`);
                }
            });
            return updated;
        });
    }, [setSavedStatuses]);

    // Helper function to get status for a specific step
    const getStepStatus = useCallback((index: number): StepStatus | undefined => {
        if (index < 0 || index >= TOTAL_STEPS) {
            console.warn(`Invalid step index: ${index}. Must be between 0 and ${TOTAL_STEPS - 1}`);
            return undefined;
        }
        return savedStatuses[index];
    }, [savedStatuses]);

    const value = useMemo(
        () => ({
            stepStatuses: savedStatuses,
            updateStepStatus,
            updateMultipleStepStatuses,
            getStepStatus,
            learningPathData,
        }),
        [savedStatuses, updateStepStatus, updateMultipleStepStatuses, getStepStatus, learningPathData]
    );

    return (
        <StepStatusContext.Provider value={value}>
            {children}
        </StepStatusContext.Provider>
    );
};

