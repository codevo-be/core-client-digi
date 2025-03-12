import { InputCard } from '@simulation/components/InputCard'
import { installations } from '@simulation/components/section/installation/index'
import { PropsSectionType } from '@simulation/components/section/PropsSectionType'
import { StepNavigation } from '@simulation/components/StepNavigation'

export default function InstallationTypeSection({ handleValue, onValid }: PropsSectionType) {

    const questionName = "installationType;"

    return(
        <div className={"flex flex-col items-center gap-[4rem] font-"}>
            <h2>{"Type d'installation"}</h2>

            <div className={"flex gap-[1.2rem]"}>
                {installations.map((installation) => {

                    const logoSize = installation.logoSize;
                    console.log(logoSize);

                    return (
                        <InputCard
                            key={installation.id}
                            id={installation.id}
                            label={installation.label}
                            value={installation.value}
                            name={questionName}
                            onClick={() => {
                                handleValue('installationType', installation.value);
                                onValid();
                            }}
                            logoPath={installation.logoPath}
                            logoStyle={""}
                            boxStyle={"w-[46.3rem] h-[16.7rem]"}
                        />
                    )
                })}
            </div>

            <StepNavigation showSkip={false} showBack={false} showSubmit={false}/>
        </div>
    )
}