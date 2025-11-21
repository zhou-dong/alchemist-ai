import { useMemo, useCallback } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import type { StepStatus } from '../../data/types';
import { TOTAL_STEPS, type LearningPathItem } from '../../data/planets';

/**
 * Custom hook to manage step statuses with localStorage persistence
 * @param baseLearningPathData - Base learning path data with default statuses
 * @returns Object with learningPathData (with applied statuses) and updateStepStatus function
 */
export const useStepStatus = (baseLearningPathData: LearningPathItem[]) => {
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

  // Apply saved statuses from localStorage
  const learningPathData = useMemo(() => {
    return baseLearningPathData.map((item, index) => ({
      ...item,
      status: savedStatuses[index] !== undefined ? savedStatuses[index]! : item.status
    }));
  }, [baseLearningPathData, savedStatuses]);

  // Helper function to update status and save to localStorage
  const updateStepStatus = useCallback((index: number, newStatus: StepStatus) => {
    setSavedStatuses(prev => {
      const updated = [...prev];
      updated[index] = newStatus;
      return updated;
    });
  }, [setSavedStatuses]);

  return {
    learningPathData,
    updateStepStatus,
    savedStatuses,
  };
};

