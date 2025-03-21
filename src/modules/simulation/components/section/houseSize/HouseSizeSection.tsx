import { useFormContext } from 'react-hook-form'
import { Form } from '@digico/ui'

import { InputResponseType } from '@simulation/components/InputResponseType'
import { PropsSectionType } from '@simulation/components/section/PropsSectionType'
import { StepNavigation } from '@simulation/components/StepNavigation'
import { useNodeNavigator } from '@simulation/context/NodeNavigatorContext'

export default function HouseSizeSection(props: PropsSectionType) {

    const { getValues } = useFormContext();
    const nodeNavigator = useNodeNavigator()

    const inputDimensionLengthName = "houseDimensionLength";
    const inputDimensionWidthName = "houseDimensionWidth"
    const inputHouseSquareName = "houseSquare";

    return(
        <div className={"flex flex-col items-center gap-[5.7rem]"}>

            <h2>Indiquez les dimensions totales de votre maison</h2>

            <div className={"flex gap-[2.9rem]"}>
                <Form.Group className={"bg-white p-[2.9rem] h-[44.2rem] w-[46.3rem] rounded-2xl"}>
                    <p>Je connais le nombre de m2 de ma maison</p>
                    <Form.Field name={inputHouseSquareName} suffix={"m2"} placeholder={"..."}/>
                </Form.Group>

                <Form.Group className={"bg-white p-[2.9rem] h-[44.2rem] w-[46.3rem] rounded-2xl"}>
                    <p>
                        Je connais les dimensions de ma maison
                    </p>
                    <Form.Field name={inputDimensionLengthName} suffix={"m"} placeholder={"..."}/>
                    <Form.Field name={inputDimensionWidthName} suffix={"m"} placeholder={"..."}/>
                </Form.Group>
            </div>

            <StepNavigation showSkip={true} onSkip={() => {

                const houseSquareData: InputResponseType = {
                    label: inputHouseSquareName,
                    response: getValues(inputHouseSquareName) === null ? '' : getValues(inputHouseSquareName)
                }

                const houseDimensionLengthData: InputResponseType = {
                    label: inputDimensionLengthName,
                    response: getValues(inputDimensionLengthName) === null ? '' : getValues(inputDimensionLengthName)
                }

                const houseDimensionWidthData: InputResponseType = {
                    label: inputDimensionWidthName,
                    response: getValues(inputDimensionWidthName) === null ? '' : getValues(inputDimensionWidthName)
                }

                props.handleValue([houseSquareData, houseDimensionLengthData, houseDimensionWidthData])
                nodeNavigator.goNext()
            }} showSubmit={false}/>
        </div>
    );
}