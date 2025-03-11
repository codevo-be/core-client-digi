import { StepNavigation } from '@simulation/components/StepNavigation'

type Props = {
    handleValue: (label: string, response: string) => void;
    onBack: () => void;
    onValid: () => void;
}

export default function HouseSizeSection({ handleValue, onBack, onValid }: Props) {
    return(
        <div>
            <input placeholder={"input mètre carré"}/>
            <input placeholder={"input dimension"}/>

            <StepNavigation showSkip={true} onSkip={() => {
                handleValue('inputMetreCarré', 'something');
                handleValue('inputDimension', 'something');
                onValid();
            }} showBack={true} onBack={onBack} showSubmit={false}/>
        </div>
    );
}