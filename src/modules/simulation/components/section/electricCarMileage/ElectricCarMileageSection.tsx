import { useState } from 'react'

import { PropsSectionType } from '@simulation/components/section/PropsSectionType'
import { StepNavigation } from '@simulation/components/StepNavigation'

export default function ElectricCarMileageSection(propsSection: PropsSectionType) {

    const questionName = "electricCarMileage";
    const [rangeValue, setRangeValue] = useState("12000");

    return(
        <div>

            <p>{rangeValue} kms</p>
            <input type={"range"} min={1000} max={24000} step={1000} onChange={(event) =>{
                setRangeValue(event.target.value);
            }}/>

            <StepNavigation
                showSkip={true}
                onSkip={() => {
                    propsSection.handleValue(questionName, rangeValue);
                    propsSection.onValid()
                }}
                showBack={true} onBack={propsSection.onBack}
                showSubmit={false}
            />
        </div>
    );
}