import { InputCard } from '@simulation/components/InputCard'
import { existingInstallations } from '@simulation/components/section/existingInstallation/index'
import { PropsSectionType } from '@simulation/components/section/PropsSectionType'
import { StepNavigation } from '@simulation/components/StepNavigation'
import { InputResponseType } from '@simulation/components/InputResponseType'
import { ImageBuilder } from '@digico/ui'

export default function ExistingInstallationSection(props: PropsSectionType) {

    const inputName = "existingInstallation";

    return(
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

                           props.handleValue([data], true);
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

            <StepNavigation showSkip={false} showBack={true} onBack={props.onBack} showSubmit={false}/>
        </div>
    );
}