
type button = {
    label:string;
}
export const Button = ({label}:button) => {
    return(
        <>
        <button className="font-bold py-2 px-4 rounded text-white bg-black">{label}</button>
        </>
    )
}