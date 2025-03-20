import { useState } from 'react'
import { Button } from '@digico/ui'

import { InputResponseType } from '@simulation/components/InputResponseType'
import { PropsSectionType } from '@simulation/components/section/PropsSectionType'
import { StepNavigation } from '@simulation/components/StepNavigation'
import RangeWithButtons from '@simulation/components/RangeWIthButtons'

export default function CarMileageSection(propsSection: PropsSectionType) {

    const questionName = "carMileage";
    const [rangeValue, setRangeValue] = useState(12000);

    const min = 1000;
    const step = 1000;
    const max = 24000;

    return(
        <div className={"flex flex-col items-center"}>

            <h2>Nombre de km moyen par année ?</h2>

            <div className={"text-[#2A8831] flex flex-col items-center"}>
                <p><span className={"text-[6.4rem]"}>{rangeValue}</span> kms</p>


                <RangeWithButtons step={1000} value={rangeValue} min={1000} max={24000} setRangeValue={setRangeValue}/>
            </div>

            <StepNavigation
                showSkip={true}
                onSkip={() => {

                    const data: InputResponseType = {
                        label: questionName,
                        response: String(rangeValue)
                    }

                    propsSection.handleValue([data], false);
                    propsSection.onValid()
                }}
                showBack={true} onBack={propsSection.onBack}
                showSubmit={false}
            />
        </div>
    );
}