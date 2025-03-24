import { useFormContext } from 'react-hook-form'
import { houseConsumptionDefaultTypes } from '@simulation/config/houseConsumptionDefaultTypes'
import { useNodeNavigator } from '@simulation/context/NodeNavigatorContext'

import Input from '@simulation/components/atoms/Input/Input'
import CardSubTitle from '@simulation/components/atoms/Text/CardSubTitle'
import CardTitle from '@simulation/components/atoms/Text/CardTitle'
import SectionTitle from '@simulation/components/atoms/Text/SectionTitle'
import { InputResponseType } from '@simulation/components/InputResponseType'
import InputCardContainer from '@simulation/components/molecules/CardContainer'
import InputCard from '@simulation/components/molecules/InputCard'
import SkipContinueButtons from '@simulation/components/molecules/SkipContinueButtons'
import PropsSectionType from '@simulation/components/section/PropsSectionType'

type HouseConsumptionSectionProps = PropsSectionType

export default function HouseConsumptionSection(props: HouseConsumptionSectionProps) {

    const { getValues } = useFormContext()

    const inputName = "houseConsumption"
    const nodeNavigator = useNodeNavigator()

    const pPerMonthName = "pricePerMonth"
    const kPerYearName = "KWhPerYear"

    const handleData = (value: string) => {
        const data: InputResponseType = {
            label: inputName,
            value: value
        }

        props.handleValue([data])
    }

    const onDefaultClicked = (value: string) => {
        handleData(value)
        nodeNavigator.goNext()
    }

    return (
        <div className={"flex flex-col items-center gap-[3.7rem]"}>
            <SectionTitle>Consommation de votre maison</SectionTitle>

            <div className={"flex gap-[2.9rem] flex-wrap w-full"}>
                {houseConsumptionDefaultTypes.map((type) => (
                    <InputCard
                        key={type.id}
                        id={type.id}
                        type={'radio'}
                        value={type.value}
                        name={inputName}
                        onClick={() => onDefaultClicked(type.value)}
                    >

                        <div className={"w-[46.6rem] h-[14.7rem]"}>


                            <CardTitle>{type.label}</CardTitle>
                            <CardSubTitle>{type.subLabel}</CardSubTitle>
                        </div>

                    </InputCard>
                ))}
            </div>


            <SectionTitle>Ou</SectionTitle>

            <div className={"flex gap-[2.6rem]"}>
                <InputCardContainer className={"w-[46.4rem] h-[18.3rem] flex flex-col items-center justify-center gap-[1.9rem]"}>

                    <CardTitle>Je paye</CardTitle>
                    <Input name={pPerMonthName}
                           type={'number'}
                           placeholder={"..."}
                           suffix={true}
                           suffixContent={
                        <p>
                            €/mois
                        </p>
                    }
                           className={"h-[5.2rem] w-[24.3rem]"}
                    />

                </InputCardContainer>

                <InputCardContainer className={"w-[46.4rem] h-[18.3rem] flex flex-col items-center justify-center gap-[1.9rem]"}>

                    <CardTitle>Je connais ma consommation</CardTitle>
                    <Input name={kPerYearName}
                           type={'number'}
                           placeholder={"..."}
                           suffix={true}
                           suffixContent={
                        <p>
                            kWh/an
                        </p>
                    }
                           className={"h-[5.2rem] max-w-[24.3rem]"}
                    />

                </InputCardContainer>
            </div>

            <SkipContinueButtons
                onContinueClick={() => {
                    const pPerMonthValue = getValues(pPerMonthName);
                    const kPerYearValue = getValues(kPerYearName);

                    const pPerMonthData: InputResponseType = {
                        label: pPerMonthValue,
                        value: pPerMonthValue
                    }
                    const kPerYearData: InputResponseType = {
                        label: kPerYearName,
                        value: kPerYearValue
                    }

                    props.handleValue([pPerMonthData, kPerYearData])
                }}
            />
        </div>
    )
}