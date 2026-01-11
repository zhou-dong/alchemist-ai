import { WrapperProvider } from '../../components/wrapper/WrapperProvider';
import ThetaSketchOverview from './ThetaSketchOverview';
import StartButton from '../../components/StartButton';

function ThetaSketchPageContent({
}) {


    const handleStart = () => {
    }

    return (
        <>
            <StartButton onStart={handleStart} />
            <ThetaSketchOverview />
        </>
    );
}

export default function ThetaSketchPage() {
    return (
        <WrapperProvider title="Theta Sketch: KMV Evolution">
            <ThetaSketchPageContent />
        </WrapperProvider>
    );
}
