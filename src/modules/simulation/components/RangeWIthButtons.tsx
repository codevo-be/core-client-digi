import { Dispatch, SetStateAction } from 'react'

import RangeButton from '@simulation/components/RangeButton'

type Props = {
    step: number;
    value: number;
    min: number;
    max: number;
    setRangeValue: Dispatch<SetStateAction<number>>;
}

export default function RangeWithButtons(props: Props) {

    const handleLeftButton = () =>{
        const newValue = props.value - props.step;
        if (newValue < props.min) props.setRangeValue(props.min)
        else props.setRangeValue(newValue)
    }

    const handleRightButton = () => {
        const newValue = props.value + props.step;
        if (newValue > props.max) props.setRangeValue(props.max)
        else props.setRangeValue(newValue)
    }

    return(
        <div className={"flex items-center gap-[3.4rem]"}>
            <RangeButton handleClick={handleLeftButton}>
                <p className={"text-center"}>-</p>
            </RangeButton>

            <input className={"w-[51.8rem] accent-[#2A8831]"} value={props.value} type={'range'} min={props.min} max={props.max} step={props.step}
                   onChange={(event) => {
                props.setRangeValue(Number(event.target.value));
            }}/>

            <RangeButton handleClick={handleRightButton}>
                <p className={"text-center"}>+</p>
            </RangeButton>
        </div>
    )
}