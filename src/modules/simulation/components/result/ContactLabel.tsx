import { Button, ImageBuilder } from '@digico/ui'

type Props = {
    type: string,
    value: string
}

export default function ContactLabel(props: Props){

    let source;

    switch (props.type) {
        case "email":
            source = "/icons/noveway/email.svg";
            break;
        case "phone":
            source = "/icons/noveway/phone.svg";
            break;
        default:
            source = "";
    }

    return(
        <button type={"button"} className={"py-[1.1rem] px-[1.4rem] w-[29.2rem] h-[4.3rem] border-1 border-[#023A65] rounded-[0.9rem]" +
            " flex items-center gap-[1.3rem] " +
            "hover:cursor-pointer"}>
            <ImageBuilder src={source}/>
            <p className={"text-[1.6rem]"}>{props.value}</p>
        </button>
    )
}