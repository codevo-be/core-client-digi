import { enterprises } from '@simulation/config/enterpriseTypes'
import { useNodeNavigator } from '@simulation/context/NodeNavigatorContext'

import FloatingImageCard from '@simulation/components/atoms/Image/FloatingImageCard'
import CardTitle from '@simulation/components/atoms/Text/CardTitle'
import SectionTitle from '@simulation/components/atoms/Text/SectionTitle'
import { InputResponseType } from '@simulation/components/InputResponseType'
import InputCard from '@simulation/components/molecules/InputCard'
import PropsSectionType from '@simulation/components/section/PropsSectionType'

type EnterpriseTypeSectionProps = PropsSectionType;

export default function EnterpriseTypeSection(props: EnterpriseTypeSectionProps) {
    const inputName = "enterpriseType";
    const nodeNavigator = useNodeNavigator();

    const handleOnClick = (response: string) => {
        const data: InputResponseType = {
            label: inputName,
            value: response
        }
        props.handleValue([data]);
        nodeNavigator.goNext();
    }

    return (
        <div className={"flex flex-col items-center gap-16"}>
            <SectionTitle>Quel type d&apos;entreprise êtes-vous ?</SectionTitle>

                <div className={'flex flex-wrap gap-x-[1.8rem] gap-y-[2.1rem]'}>
                {enterprises.map((enterprise) => (

                        <InputCard
                            key={enterprise.id}
                            id={enterprise.id}
                            value={enterprise.value}
                            name={inputName}
                            onClick={() => {
                                handleOnClick(enterprise.value)
                            }}
                            type={'radio'}
                        >

                            <div className={'w-[35.1rem] h-[13.4rem] flex items-center gap-[1.8rem] relative'}>
                                <FloatingImageCard path={enterprise.imagePath!} />

                                <CardTitle>{enterprise.label}</CardTitle>
                            </div>

                        </InputCard>
                ))}
            </div>
        </div>
    )
}