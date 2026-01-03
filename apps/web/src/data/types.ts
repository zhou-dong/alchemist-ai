// Step status type
export type StepStatus = 'locked' | 'unlocked' | 'finished';

// Helper functions to check status
export const isLocked = (status: StepStatus): boolean => status === 'locked';
export const isUnlocked = (status: StepStatus): boolean => status === 'unlocked';
export const isFinished = (status: StepStatus): boolean => status === 'finished';
export const isAccessible = (status: StepStatus): boolean => status === 'unlocked' || status === 'finished';

