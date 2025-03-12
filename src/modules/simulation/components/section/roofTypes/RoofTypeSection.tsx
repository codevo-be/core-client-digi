import { InputCard } from '@simulation/components/InputCard'
import { PropsSectionType } from '@simulation/components/section/PropsSectionType'
import { roofTypes } from '@simulation/components/section/roofTypes/index'
import { StepNavigation } from '@simulation/components/StepNavigation'
import { Grid } from '@digico/ui'

export default function RoofTypeSection(propsSection: PropsSectionType) {
    const questionName = "roofType";

    return (
        <div className={"flex flex-col items-center gap-[3.6rem]"}>

            <h2>Type de toiture</h2>

            <Grid>
                {roofTypes.map((type) => (
                    <Grid.Col column={4} key={type.id}>
                        <InputCard
                            key={type.id}
                            id={type.id}
                            label={type.label}
                            value={type.value}
                            name={questionName}
                            onClick={() => {
                                propsSection.handleValue(questionName, type.value);
                                propsSection.onValid();
                            }}
                            boxStyle={"w-[46.6rem] h-[14.7rem]"}
                            logoPath={type.imagePath}
                            logoStyle={"w-[21.4rem] h-[11.4rem]"} //TODO si je fais un border j'ai une grosse border bleue
                        />
                    </Grid.Col>
                ))}
            </Grid>
            
            <StepNavigation
                showSkip={true} onSkip={propsSection.onValid}
                showBack={true} onBack={propsSection.onBack}
                showSubmit={false}
            />
        </div>
    );
}