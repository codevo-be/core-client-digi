import { InputCard } from '@simulation/components/InputCard'
import { installations } from '@simulation/components/section/installation/index'
import { StepNavigation } from '@simulation/components/StepNavigation'

type Props = {
    handleValue: (label: string, response: string) => void;
    onValid: () => void;
}

export const InstallationTypeSection = ({ handleValue, onValid }: Props) => {

    const questionName = "installationType;"

    return(
        <div className={"flex flex-col items-center gap-[4rem] font-"}>
            <h2 className={"text-[#006EC2] text-[2.8rem]"}>{"Type d'installation"}</h2>

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
                            logoStyle={"w-[16rem] h-[16rem]"}
                            boxStyle={"w-[46.3rem] h-[16.7rem] border-[#8EACC5] hover:border-8"}
                            textStyle={"text-[#006EC2] text-[2.8rem]"}
                        />
                    )
                })}
            </div>

            <StepNavigation showSkip={false} showBack={false} showSubmit={false}/>
        </div>
    )
}