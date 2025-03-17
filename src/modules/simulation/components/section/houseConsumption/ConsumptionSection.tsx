import { Form } from '@digico/ui'

import { InputCard } from '@simulation/components/InputCard'
import { radio_types } from '@simulation/components/section/houseConsumption/index'
import { PropsSectionType } from '@simulation/components/section/PropsSectionType'
import { StepNavigation } from '@simulation/components/StepNavigation'
import { InputResponseType } from '@simulation/components/InputResponseType'

export default function ConsumptionSection({ handleValue, onBack, onValid }: PropsSectionType) {

    const inputName = "houseConsumption";

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
                        name={inputName}
                        onClick={() => {
                            const data: InputResponseType = {
                                label: inputName,
                                response: type.value
                            }
                            handleValue([data], true);
                        }}
                        boxStyle={"w-[46.6rem] h-[14.7rem]"}
                        logoPath={undefined}
                    />
                ))
                }
            </div>

            <p>Ou</p>

            <div className={"flex gap-[1.6rem]"}>
                <div className={"border-2 border-[#8EACC5] bg-white p-10 rounded-2xl flex flex-col items-center gap-[1.9rem]"}>
                    <p className={"font-[2.8rem]"}>Je paie</p>
                    <Form.Field placeholder={"..."} suffix={"€/mois"}/>
                </div>

                <div className={"border-2 border-[#8EACC5] bg-white p-10 rounded-2xl flex flex-col items-center gap-[1.9rem]"}>
                    <p>Je connais ma consommation</p>
                    <Form.Field placeholder={"..."} suffix={"kWh/an"} />
                </div>
            </div>

            <StepNavigation showSkip={true} onSkip={ onValid } showBack={true} onBack={ onBack } showSubmit={false}/>
        </div>
    );
}