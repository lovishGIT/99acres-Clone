interface optionsType {
    text: string;
    value: string;
    link?: string;
}
const arrOptions: optionsType[] = [
    {
        text: "All India",
        value: "india",
        link: "/",
    },
    {
        text: "Punjab",
        value: "punjab",
        link: "/",
    },
    {
        text: "Hyderabad",
        value: "hyderabad",
        link: "/",
    },
    {
        text: "Bombay",
        value: "bombay",
        link: "/",
    },
];

export default function LogoSection() {
    return (
        <div className="w-[16%] flex justify-between">
            <h1 className="font-bold text-3xl cursor-pointer">99acres</h1>
            <select
                name="drop"
                id="drop"
                className="bg-transparent cursor-pointer"
            >
                {arrOptions.map((option) => (
                    <option
                        className="text-black cursor-pointer"
                        value={option.value}
                    >
                        {option.text}
                    </option>
                ))}
            </select>
        </div>
    );
}
