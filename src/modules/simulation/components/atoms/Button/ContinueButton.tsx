import { useNodeNavigator } from '@simulation/context/NodeNavigatorContext'

interface ContinueButtonProps {
    onClick: () => void;
}

export default function ContinueButton(props: ContinueButtonProps) {

    const nodeNavigator = useNodeNavigator()

    const handleOnClick = () => {
        props.onClick();
        nodeNavigator.goNext();
    }

    return(
        <button
            className={"bg-linear-to-tr from-[#2F8FF5] to-[#19B4DC] text-white text-[2rem] p-4 " +
                "w-[18.5rem] h-[6.1rem] rounded-[3rem] hover:cursor-pointer"}
            onClick={handleOnClick}
            type={"button"}
        >
            <div className={"flex items-center gap-[1.4rem]"}>

                <div className={"bg-white w-[4.2rem] h-[4.2rem] rounded-full flex items-center justify-center"}>
                    <img src={"/icons/noveway/next_arrow.svg"}  alt={"next arrow"}/>
                </div>


                <p>Continuer</p>
            </div>

        </button>
    )
}