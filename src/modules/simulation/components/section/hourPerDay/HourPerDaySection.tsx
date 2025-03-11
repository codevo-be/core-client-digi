import { useState } from 'react'

import { StepNavigation } from '@simulation/components/StepNavigation'

type Props = {
    handleValue: (label: string, response: string) => void;
    onSkip: () => void;
    onBack: () =>  void;
}

export default function HourPerDaySection({ handleValue, onSkip, onBack }: Props) {

    const [rangeValue, setRangeValue] = useState("5");

    return (
        <div>
            <p>{rangeValue} heures</p>
            <input type={'range'} min={2} max={10} step={1} onChange={(event) => {
                setRangeValue(event.target.value);
            }}/>

            <StepNavigation showSkip={true} onSkip={() => {
                handleValue('perHourValue', rangeValue);
                onSkip();
            }} showBack={true} onBack={onBack} showSubmit={false} />
        </div>
    );
}