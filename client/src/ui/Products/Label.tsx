interface LabelProps {
    text: string
}
export default function Label({text}: LabelProps){
    return (
        <>
            <h2 className="text-3xl mt-4">{text}</h2>
        </>
    )
}