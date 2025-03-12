import { Grid } from '@digico/ui'

import { InputCard } from '@simulation/components/InputCard'
import { enterprises } from '@simulation/components/section/enterprise/index'
import { PropsSectionType } from '@simulation/components/section/PropsSectionType'
import { StepNavigation } from '@simulation/components/StepNavigation'

export const EnterpriseTypeSection = ({ handleValue, onBack, onValid }: PropsSectionType) => {

    const questionName = "enterpriseType";
    
    return(
        <div className={"flex flex-col items-center gap-[3.6rem]"}>
            <h2> { "Quel type d'entreprise êtes-vous ?" }</h2>
            <Grid className={"gap-x-[1.8rem] gap-y-[2.1rem]"}>
                {enterprises.map((enterprise) => (
                    <Grid.Col column={3} key={enterprise.id}>
                        <InputCard
                            id={enterprise.id}
                            label={enterprise.label}
                            value={enterprise.value}
                            name={questionName}
                            onClick={() => {
                                handleValue('enterpriseType', enterprise.value);
                                onValid();
                            }}
                            logoPath={enterprise.svgPath}
                            logoStyle={""}
                            boxStyle={"w-[35.1rem] h-[13.4rem]"}
                        />
                    </Grid.Col>
                ))}
            </Grid>

            <StepNavigation showSkip={false} showBack={true} onBack={onBack} showSubmit={false}/>
        </div>
    )
}