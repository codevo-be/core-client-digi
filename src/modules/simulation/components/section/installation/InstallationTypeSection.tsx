import { InputCard } from '@simulation/components/InputCard'
import { InputResponseType } from '@simulation/components/InputResponseType'
import { installations } from '@simulation/components/section/installation/index'
import { PropsSectionType } from '@simulation/components/section/PropsSectionType'
import { ImageBuilder } from '@digico/ui'

export default function InstallationTypeSection({ handleValue }: PropsSectionType) {

    const inputName = "installationType"

    return(
        <div className={"flex flex-col items-center gap-[4rem] font-"}>
            <h2>{"Type d'installation"}</h2>

            <div className={"flex gap-[1.2rem]"}>
                {installations.map((installation) => {

                    return (
                        <InputCard
                            key={installation.id}
                            id={installation.id}
                            value={installation.value}
                            name={inputName}
                            onClick={() => {
                                const data: InputResponseType = {
                                    label: inputName,
                                    response: installation.value
                                }

                                handleValue([data], true);
                            }}
                        >

                            <div className={"flex gap-[3.4rem] items-center w-[46.3rem] h-[16.7rem]"}>
                                <div className={"max-w-[16.1rem]"}>
                                    <ImageBuilder src={installation.logoPath} />
                                </div>

                                <p>{installation.label}</p>
                            </div>

                        </InputCard>
                    )
                })}
            </div>
        </div>
    )
}