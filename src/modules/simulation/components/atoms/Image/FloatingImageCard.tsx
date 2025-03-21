import ImageProps from '@simulation/components/atoms/Image/ImageProps'

export default function FloatingImageCard(props: ImageProps) {
    return (
        <div className={"max-w-[15.4rem] relative -top-5"}>
            <img src={props.path} alt={props.alt} />
        </div>
    )
}