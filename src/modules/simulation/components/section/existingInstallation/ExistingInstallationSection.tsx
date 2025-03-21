import { ImageBuilder } from '@digico/ui'
import { useNodeNavigator } from '@simulation/context/NodeNavigatorContext'

import { InputCard } from '@simulation/components/InputCard'
import { InputResponseType } from '@simulation/components/InputResponseType'
import { existingInstallations } from '@simulation/components/section/existingInstallation/index'
import { PropsSectionType } from '@simulation/components/section/PropsSectionType'
import { StepNavigation } from '@simulation/components/StepNavigation'

export default function ExistingInstallationSection(props: PropsSectionType) {

    const inputName = "existingInstallation";
    const nodeNavigator = useNodeNavigator()

    return (
        <div className={"flex flex-col items-center gap-[9rem]"}>
            <h2>Avez-vous déjà une installation photovoltaïque existante ?</h2>

            <div className={"flex gap-10"}>
                {existingInstallations.map((type) => (
                   <InputCard
                       key={type.id}
                       id={type.id}
                       value={type.value}
                       name={inputName}
                       onClick={() => {
                           const data: InputResponseType = {
                               label: inputName,
                               response: type.value
                           }

                           props.handleValue([data]);
                            nodeNavigator.goNext()
                       }}
                   >

                       <div className={"w-[46.6rem] h-[12.8rem] flex gap-[3.7rem] items-center"}>
                           <div className={"max-w-[11.6rem] h-[12.2rem] flex items-center justify-center"}>
                               <ImageBuilder src={type.imagePath} />
                           </div>

                           <div className={"flex flex-col"}>
                               <p className={""}>{type.label}</p>
                               <p className={"text-[2rem] text-[#90B1C9]"}>{type.subLabel}</p>
                           </div>
                       </div>

                   </InputCard>
                ))}
            </div>

            <StepNavigation showSkip={false} showSubmit={false}/>
        </div>
    );
}