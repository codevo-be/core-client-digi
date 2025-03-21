import { installationTypes } from '@simulation/config/installationTypes'
import { useNodeNavigator } from '@simulation/context/NodeNavigatorContext'

import CardImage from '@simulation/components/atoms/Image/CardImage'
import CardTitle from '@simulation/components/atoms/Text/CardTitle'
import SectionTitle from '@simulation/components/atoms/Text/SectionTitle'
import { InputResponseType } from '@simulation/components/InputResponseType'
import InputCard from '@simulation/components/molecules/InputCard'
import PropsSectionType from '@simulation/components/section/PropsSectionType'

type InstallationTypeSection = PropsSectionType

export default function InstallationTypeSection(props: InstallationTypeSection) {
    const inputName = "installationType";
    const nodeNavigator = useNodeNavigator()

    const handleOnClick = (response: string) => {
        const data: InputResponseType = {
            label: inputName,
            response
        };

        props.handleValue([data]);
        nodeNavigator.goNext()
    }

    return (
        <div className="flex flex-col items-center gap-16">
            <SectionTitle content="Type d'installation" />

            <div className="flex gap-6">

                {installationTypes.map((installation) => (

                    <InputCard
                        key={installation.id}
                        id={installation.id}
                        type={'radio'}
                        name={inputName}
                        value={installation.value}
                        onClick={() => {
                            handleOnClick(installation.value)
                        }}
                    >

                        <div className="flex gap-8 items-center w-[46.3rem] h-[16.7rem]">
                            <CardImage path={installation.imagePath!} />
                            <CardTitle>{installation.label}</CardTitle>
                        </div>

                    </InputCard>
                ))}
            </div>
        </div>
    )
}