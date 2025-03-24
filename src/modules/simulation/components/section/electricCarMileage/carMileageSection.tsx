import { useState } from 'react'
import { useNodeNavigator } from '@simulation/context/NodeNavigatorContext'

import { InputResponseType } from '@simulation/components/InputResponseType'
import RangeWithButtons from '@simulation/components/RangeWIthButtons'
import PropsSectionType from '@simulation/components/section/PropsSectionType'

export default function CarMileageSection(propsSection: PropsSectionType) {

    const questionName = "carMileage";
    const [rangeValue, setRangeValue] = useState(12000);
    const nodeNavigator = useNodeNavigator()

    return(
        <div className={"flex flex-col items-center"}>

            <h2>Nombre de km moyen par année ?</h2>

            <div className={"text-[#2A8831] flex flex-col items-center"}>
                <p><span className={"text-[6.4rem]"}>{rangeValue}</span> kms</p>


                <RangeWithButtons step={1000} value={rangeValue} min={1000} max={24000} setRangeValue={setRangeValue}/>
            </div>
        </div>
    );
}