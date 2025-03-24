import { useState } from 'react'

import { InputResponseType } from '@simulation/components/InputResponseType'
import RangeWithButtons from '@simulation/components/RangeWIthButtons'
import { PropsSectionType } from '@simulation/components/section/PropsSectionType'
import { useNodeNavigator } from '@simulation/context/NodeNavigatorContext'

export default function HourPerDaySection(props: PropsSectionType) {

    const inputName = 'hourAtHouse'

    const [rangeValue, setRangeValue] = useState(5);
    const nodeNavigator = useNodeNavigator()

    return (
        <div className={"flex flex-col items-center"}>
            <h2>En moyenne, combien d&apos;heures par jour êtes-vous à la maison ?</h2>

            <div className={"text-[#2A8831] flex flex-col items-center"}>
                <p><span className={"text-[6.4rem]"}>{rangeValue}</span> heures</p>
                <RangeWithButtons step={1} value={rangeValue} min={1} max={9} setRangeValue={setRangeValue} />
            </div>
        </div>
    );
}