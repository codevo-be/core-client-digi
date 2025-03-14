import { Box, Form } from '@digico/ui'

import { InputCard } from '@simulation/components/InputCard'
import { radio_types } from '@simulation/components/section/consumption/index'
import { PropsSectionType } from '@simulation/components/section/PropsSectionType'
import { StepNavigation } from '@simulation/components/StepNavigation'

export default function ConsumptionSection({ handleValue, onBack, onValid }: PropsSectionType) {

    const questionName = "consumptionType";

    return(
        <div className={"flex flex-col items-center gap-[5rem]"}>
            <h2>Consommation de votre maison</h2>

            <div className={"flex items-center justify-evenly gap-12"}>
                {radio_types.map((type) => (
                    <InputCard
                        key={type.id}
                        id={type.id}
                        label={type.label}
                        subLabel={type.subLabel}
                        value={type.value}
                        name={questionName}
                        onClick={() => {
                            handleValue(questionName, type.value);
                            onValid();
                        }}
                        boxStyle={"w-[46.6rem] h-[14.7rem]"}
                        logoPath={undefined}
                    />
                ))
                }
            </div>

            <Box>
                <Form.Field label={"Je paie"} />
            </Box>

            <Box>
                <Form.Field label={"Je connais ma consommation"} />
            </Box>

            <StepNavigation showSkip={true} onSkip={ onValid } showBack={true} onBack={ onBack } showSubmit={false}/>
        </div>
    );
}