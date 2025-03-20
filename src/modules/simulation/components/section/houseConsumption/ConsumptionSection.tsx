import { Form, ImageBuilder } from '@digico/ui'

import { InputCard } from '@simulation/components/InputCard'
import { InputResponseType } from '@simulation/components/InputResponseType'
import { radio_types } from '@simulation/components/section/houseConsumption/index'
import { PropsSectionType } from '@simulation/components/section/PropsSectionType'
import { StepNavigation } from '@simulation/components/StepNavigation'

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
                        value={type.value}
                        name={inputName}
                        onClick={() => {
                            const data: InputResponseType = {
                                label: inputName,
                                response: type.value
                            }
                            handleValue([data], true);
                        }}
                    >

                        <div className={"w-[46.6rem] h-[14.7rem] flex justify-evenly items-center gap-[2.5rem]"}>
                            <div className={"max-w-[15.1rem] max-h-[14rem] flex items-center justify-center"}>
                                <ImageBuilder src={type.imagePath} />
                            </div>

                            <div className={"flex flex-col gap-[0.9rem]"}>
                                <p className={"text-[2.4rem]"}>{type.label}</p>
                                <p className={"text-[2rem] text-[#90B1C9]"}>{type.subLabel}</p>
                            </div>
                        </div>

                    </InputCard>
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