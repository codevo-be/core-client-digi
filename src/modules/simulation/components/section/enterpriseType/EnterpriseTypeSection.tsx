import { Grid, ImageBuilder } from '@digico/ui'

import { InputCard } from '@simulation/components/InputCard'
import { InputResponseType } from '@simulation/components/InputResponseType'
import { enterprises } from '@simulation/components/section/enterpriseType/index'
import { PropsSectionType } from '@simulation/components/section/PropsSectionType'
import { StepNavigation } from '@simulation/components/StepNavigation'

export default function EnterpriseTypeSection(props: PropsSectionType) {

    const inputName = "enterpriseType";
    
    return(
        <div className={"flex flex-col items-center gap-[3.6rem]"}>
            <h2> { "Quel type d'entreprise êtes-vous ?" }</h2>
            <Grid className={"gap-x-[1.8rem] gap-y-[2.1rem]"}>
                {enterprises.map((enterprise) => (
                    <Grid.Col column={3} key={enterprise.id}>

                        <InputCard
                            id={enterprise.id}
                            value={enterprise.value}
                            name={inputName}
                            onClick={() => {
                                const data: InputResponseType = {
                                    label: inputName,
                                    response: enterprise.value
                                }
                                props.handleValue([data], true);
                            }}
                        >

                            <div className={"w-[35.1rem] h-[13.4rem] flex items-center gap-[1.8rem]"}>

                                <div className={"w-[13.4rem]"}>
                                    <ImageBuilder src={enterprise.svgPath} />
                                </div>

                                <p>{enterprise.label}</p>
                            </div>

                        </InputCard>

                    </Grid.Col>
                ))}
            </Grid>

            <StepNavigation showSkip={false} showBack={false} showSubmit={false}/>
        </div>
    )
}