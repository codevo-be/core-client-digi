import ImageProps from '@simulation/components/atoms/Image/ImageProps'

export default function CardImage(props: ImageProps) {
    return (
        <div className={"w-[16.1rem] h-[16.1rem] max-w-[16.1rem] max-h-[16.1rem]"}>
            <img src={props.path} alt={props.alt} className={"w-full h-full object-cover"} />
        </div>
    )
}