
import ThetaSketchOverview from './ThetaSketchOverview';
import StartButton from '../../components/StartButton';
import StepTitle from '@alchemist/theta-sketch/components/StepTitle';

function ThetaSketchPageContent({
}) {


    const handleStart = () => {
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
