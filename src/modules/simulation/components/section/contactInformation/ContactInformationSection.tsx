import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { Form } from '@digico/ui'
import countries from '@simulation/countries.json';

import { InputResponseType } from '@simulation/components/InputResponseType'
import PropsSectionType from '@simulation/components/section/PropsSectionType'

export default function ContactInformationSection(propsSection: PropsSectionType) {

    const inputEmailName = 'contactEmail'
    const inputPhoneName = 'contactPhone'
    const inputZipcodeName = 'contactZipcode'
    const inputCountry = 'contactCountry'

    const { setValue, getValues } = useFormContext();

    useEffect(() => {
        setValue(inputCountry, "BE")
    }, [setValue])

    return (
        <div className={"flex flex-col items-center"}>

            <h2>Vos informations de contact</h2>

            <Form.Group className={" w-[78.2rem] h-[46.4rem] px-[4.8rem] py-[5.1rem] bg-white border-2 border-[#9DBFD3] rounded-[1.4rem] text-[#023A65]"}>

                <div className={"flex flex-col gap-[6rem]"}>
                    <Form.Row>
                        <Form.Field name={inputEmailName} id={inputEmailName} label="Email" placeholder="..." />
                        <Form.Field name={inputPhoneName} id={inputPhoneName} label="Téléphone" placeholder="..." />
                    </Form.Row>
                    <Form.Row>
                        <Form.Field name={inputZipcodeName} id={inputZipcodeName} label="Code postal" placeholder="..." />
                        <Form.Select name={inputCountry} label={"Pays"} options={countries}/>
                    </Form.Row>
                </div>

                <div className={"flex flex-col gap-[1rem]"}>
                    <p className={"text-[1.2rem] text-[#90B1C9]"}>En cliquant sur voir mon offre j’accepte d’être recontacté(e)
                        et que les données saisies soient exploitées dans le cadre de la relation commerciale
                        qui pourrait découler de ce contact et conformément à nos conditions générales et vie privée.</p>
                    <p className={"text-[1.2rem] text-[#90B1C9]"}>Par la suite, si vous souhaitez modifier ou supprimer
                        vos données, ou simplement savoir quelles données sont stockées dans notre base de données,
                        vous pouvez envoyer un email à l$apos;adresse suivante :</p>
                </div>

            </Form.Group>
        </div>
    );
}