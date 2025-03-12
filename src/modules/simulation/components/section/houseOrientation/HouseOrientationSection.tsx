import { InputCard } from '@simulation/components/InputCard'
import { orientationTypes } from '@simulation/components/section/houseOrientation/index'
import { StepNavigation } from '@simulation/components/StepNavigation'

type Props = {
    handleValue: (label: string, response: string) => void;
    onBack: () => void;
    onValid: () => void;
}

export default function HouseOrientationSection({ handleValue, onBack, onValid }: Props) {
    return(
        <div>
            {orientationTypes.map((type) => (
                <InputCard
                    key={type.id}
                    id={type.id}
                    label={type.label}
                    value={type.value}
                    name={'orientationType'}
                    onClick={() => {
                        handleValue('orientationType', type.value);
                        onValid();
                    }}/>
            ))}

            <StepNavigation showSkip={true} onSkip={onValid} showBack={true} onBack={onBack} showSubmit={false}/>
        </div>
    );
}