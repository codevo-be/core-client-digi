import { Form, ImageBuilder } from '@digico/ui'
import { radio_types } from '@simulation/config'
import { useNodeNavigator } from '@simulation/context/NodeNavigatorContext'

import { InputResponseType } from '@simulation/components/InputResponseType'
import { OldInputCard } from '@simulation/components/molecules/OldInputCard'
import PropsSectionType from '@simulation/components/section/PropsSectionType'
import CardInfosType from '@simulation/components/CardInfosType'

export default function ConsumptionSection({ handleValue }: PropsSectionType) {

    const inputName = "houseConsumption";
    const nodeNavigator = useNodeNavigator()

    return(
        <div className={"flex flex-col items-center gap-[5rem]"}>
            <h2>Consommation de votre maison</h2>

            <div className={"flex items-center justify-evenly gap-12"}>
                {radio_types.map((type: CardInfosType) => (
                    <OldInputCard
                        key={type.id}
                        id={type.id}
                        value={type.value}
                        name={inputName}
                        onClick={() => {
                            const data: InputResponseType = {
                                label: inputName,
                                value: type.value
                            }

                            handleValue([data]);
                            nodeNavigator.goNext()
                        }}
                    >

                        <div className={"w-[46.6rem] h-[14.7rem] flex justify-evenly items-center gap-[2.5rem]"}>
                            <div className={"max-w-[15.1rem] max-h-[14rem] flex items-center justify-center"}>
                                <ImageBuilder src={type.imagePath} />
                            </div>
                        </div>

                    </OldInputCard>
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

        </div>
    );
}