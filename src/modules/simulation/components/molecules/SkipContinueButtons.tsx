import ContinueButton from '@simulation/components/atoms/Button/ContinueButton'

interface SkipContinueButtonsProps {
    onClick: () => void;
}

export default function SkipContinueButtons(props: SkipContinueButtonsProps) {

    const handleOnContinueClicked = () => {

    }

    return(
        <div className={"flex flex-col items-center gap-[1.6rem]"}>
            <button
                type={"button"}
                className={"text-[2rem] text-[#023A65] hover:cursor-pointer underline underline-offset-2"}>
                Je ne sais pas
            </button>

            <ContinueButton onClick={handleOnContinueClicked} />
        </div>
    )
}