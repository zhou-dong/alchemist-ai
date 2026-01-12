
import ThetaSketchOverview from './ThetaSketchOverview';
import StartButton from '../../components/StartButton';
import StepTitle from '@alchemist/theta-sketch/components/StepTitle';
import { useThetaSketchProgress } from '../../contexts/ThetaSketchProgressContext';
import NextPageButton from '@alchemist/theta-sketch/components/NextPageButton';

function ThetaSketchPageContent() {
    const { completeStep } = useThetaSketchProgress();
    const handleStart = () => {
        completeStep('theta-sketch');
    }

    return (
        <>
            <StepTitle title="Theta Sketch: KMV Evolution" />
            <StartButton onStart={handleStart} />
            <NextPageButton nextPagePath="/theta-sketch/roadmap" title="Go to Roadmap" />
            <ThetaSketchOverview />
        </>
    );
}

export default ThetaSketchPageContent;
