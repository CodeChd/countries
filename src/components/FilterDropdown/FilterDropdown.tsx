import {ReactNode, useState} from "react";

type Props = {
    children: ReactNode;
    setRegion?: (e: string) => void
};

function FilterDropdown({children}: Props) {
    const [isClicked, setIsClicked] = useState<boolean>(false);
    function filterHandler() {
        setIsClicked(!isClicked);
    }


    return (
        <div className="relative">
            <div
                aria-label="Dropdown Toggle"
                className="relative flex gap-4 justify-center  bg-white p-2 px-8 rounded-md drop-shadow-md"
            >
                <p className="whitespace-nowrap text-md">Filter by region</p>
                <img src="/icons/arrowicon.svg" alt="arrow-icon" className={`relative h-4 top-1 ${isClicked ? "rotate-180" : ""}`}/>
                <button onClick={filterHandler} className="absolute inset-0"></button>
            </div>
            <div
                aria-label="Dropdown Menu"
                className={`absolute bg-white mt-2 w-full drop-shadow-sm rounded-sm ${isClicked ? "" : "hidden"}`}
            >
                {children}
            </div>
        </div>
    );
}

const Item = ({children, setRegion}: Props) => {
    function regionHandler(e) {
            setRegion(e.target.value)
    }

    return <a onClick={regionHandler} className="px-6 py-1 block">{children}</a>;
};


FilterDropdown.Item = Item;
export default FilterDropdown;