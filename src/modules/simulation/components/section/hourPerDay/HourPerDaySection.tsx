import { useState } from 'react'
import { Button } from '@digico/ui'

import { PropsSectionType } from '@simulation/components/section/PropsSectionType'
import { StepNavigation } from '@simulation/components/StepNavigation'
import { InputResponseType } from '@simulation/components/InputResponseType'

export default function HourPerDaySection(props: PropsSectionType) {

    const inputName = 'hourAtHouse'

    const [rangeValue, setRangeValue] = useState(5);

    const min = 2;
    const step = 1;
    const max = 9;

    const minusClicked = () => {
        const newValue = rangeValue - step;
        if (newValue < min) setRangeValue(min)
        else setRangeValue(newValue)
    }

    const plusClicked = () => {
        const newValue = rangeValue + step;
        if (newValue > max) setRangeValue(max)
        else setRangeValue(newValue)
    }

    return (
        <div className={"flex flex-col items-center"}>
            <h2>En moyenne, combien d$apos;heures par jour êtes-vous à la maison ?</h2>

            <div className={"text-[#2A8831] flex flex-col items-center"}>
                <p><span className={"text-[6.4rem]"}>{rangeValue}</span> heures</p>
                <div>
                    <Button type={"button"} onClick={minusClicked}>-</Button>
                    <input className={"w-[51.8rem] bg-[#2A8831]"} value={rangeValue} type={'range'} min={min} max={max} step={step} onChange={(event) => {
                        // @ts-ignore
                        setRangeValue(event.target.value);
                    }}/>
                    <Button type={"button"} onClick={plusClicked}>+</Button>
                </div>
            </div>

            <StepNavigation showSkip={true} onSkip={() => {
                const data: InputResponseType = {
                    label: inputName,
                    response: String(rangeValue)
                }

                props.handleValue([data], false);
                props.onValid();
            }} showBack={true} onBack={props.onBack} showSubmit={false} />
        </div>
    );
}