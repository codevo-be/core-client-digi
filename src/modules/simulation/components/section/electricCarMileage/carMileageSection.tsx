import { useState } from 'react'

import { PropsSectionType } from '@simulation/components/section/PropsSectionType'
import { StepNavigation } from '@simulation/components/StepNavigation'
import { Button } from '@digico/ui'

export default function CarMileageSection(propsSection: PropsSectionType) {

    const questionName = "carMileage";
    const [rangeValue, setRangeValue] = useState(12000);

    const min = 1000;
    const step = 1000;
    const max = 24000;

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

    return(
        <div className={"flex flex-col items-center"}>

            <h2>Nombre de km moyen par année ?</h2>

            <div className={"text-[#2A8831] flex flex-col items-center"}>
                <p><span className={"text-[6.4rem]"}>{rangeValue}</span> kms</p>
                <div>
                    <Button type={"button"} onClick={minusClicked}>-</Button>
                    <input className={"w-[51.8rem] bg-[#2A8831]"} value={rangeValue} type={'range'} min={min} max={max} step={step} onChange={(event) => {
                        // @ts-ignore
                        setRangeValue(event.target.value);
                    }}/>
                    <Button type={"button"} onClick={plusClicked}>+</Button>
                </div>
            </div>

            <StepNavigation
                showSkip={true}
                onSkip={() => {
                    propsSection.handleValue(questionName, String(rangeValue), false);
                    propsSection.onValid()
                }}
                showBack={true} onBack={propsSection.onBack}
                showSubmit={false}
            />
        </div>
    );
}