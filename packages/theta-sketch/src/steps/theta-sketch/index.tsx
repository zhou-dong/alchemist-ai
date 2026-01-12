
import ThetaSketchOverview from './ThetaSketchOverview';
import StartButton from '../../components/StartButton';
import StepTitle from '@alchemist/theta-sketch/components/StepTitle';
import { useThetaSketchProgress } from '../../contexts/ThetaSketchProgressContext';

function ThetaSketchPageContent() {
    const { completeStep } = useThetaSketchProgress();

    const handleStart = () => {
        completeStep('theta-sketch');
    }

    return (
        <>
            <StepTitle title="Theta Sketch: KMV Evolution" />
            <StartButton onStart={handleStart} />
            <ThetaSketchOverview />
        </>
    );
}

export default ThetaSketchPageContent;
