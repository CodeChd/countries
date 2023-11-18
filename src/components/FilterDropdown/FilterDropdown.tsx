import {MouseEvent, ReactNode, useState} from "react";
import {regions} from "../../data/regions.ts";

type Props = {
    children?: ReactNode;
    setRegion?: (e: string) => void
    isCLicked?: boolean

};

function FilterDropdown({setRegion}: Props) {
    const [isClicked, setIsClicked] = useState<boolean>(false);

    function toggleHandler(): void {
        setIsClicked(!isClicked);
    }

    function regionHandler(e: MouseEvent<HTMLButtonElement>): void {
        if (setRegion) {
            const button = e.currentTarget as HTMLButtonElement;
            setRegion(button.value);
        }
    }

    return (
        <div className="relative">

            <div
                aria-label="Dropdown Toggle"
                className="relative flex gap-4 justify-center  bg-white p-2 px-8 rounded-md drop-shadow-md"
            >
                <p className="whitespace-nowrap text-md">Filter by region</p>
                <img src="/icons/arrowicon.svg" alt="arrow-icon"
                     className={`relative h-4 top-1 ${isClicked ? "rotate-180" : ""}`}/>
                <button onClick={toggleHandler} className="absolute inset-0"></button>
            </div>

            <FilterDropdown.Menu isCLicked={isClicked}>
                {
                    regions.map((region) => <li key={region} className="cursor-pointer">
                        <button onClick={regionHandler} value={region}>{region}</button>
                    </li>)
                }
            </FilterDropdown.Menu>

        </div>
    );
}

const Menu = ({children, isCLicked}: Props) => {
    return (
        <ul
            aria-label="Dropdown Menu"
            className={`absolute list-none bg-white p-4 mt-2 w-full drop-shadow-sm rounded-sm ${isCLicked ? "" : "hidden"}`}
        >
            {children}
        </ul>
    )
};

FilterDropdown.Menu = Menu

export default FilterDropdown;