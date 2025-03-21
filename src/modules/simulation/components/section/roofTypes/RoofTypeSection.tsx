import { Grid, ImageBuilder } from '@digico/ui'

import { InputCard } from '@simulation/components/InputCard'
import { InputResponseType } from '@simulation/components/InputResponseType'
import { PropsSectionType } from '@simulation/components/section/PropsSectionType'
import { roofTypes } from '@simulation/components/section/roofTypes/index'
import { StepNavigation } from '@simulation/components/StepNavigation'
import { useNodeNavigator } from '@simulation/context/NodeNavigatorContext'

export default function RoofTypeSection(propsSection: PropsSectionType) {
    const inputName = "roofType";
    const nodeNavigator = useNodeNavigator()

    return (
        <div className={"flex flex-col items-center gap-[3.6rem]"}>

            <h2>Type de toiture</h2>

            <Grid>
                {roofTypes.map((type) => (
                    <Grid.Col column={4} key={type.id}>
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

                                propsSection.handleValue([data]);
                                nodeNavigator.goNext()
                            }}
                        >

                            <div className={"w-[46.6rem] h-[14.7rem] flex items-center gap-[3.4rem]"}>
                                <div className={"w-[21.4rem] h-[11.4rem] flex justify-center items-center overflow-hidden rounded-2xl"}>
                                    <ImageBuilder src={type.imagePath} className={"h-full w-full object-cover"} />
                                </div>

                                <p>{type.label}</p>
                            </div>

                        </InputCard>
                    </Grid.Col>
                ))}
            </Grid>
            
            <StepNavigation
                showSkip={true} onSkip={ nodeNavigator.goNext }
                showSubmit={false}
            />
        </div>
    );
}