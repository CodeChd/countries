import {ChangeEvent} from "react";

type Props = {
    searchTerm: string
    setSearchTerm: (e: string) => void
}
function SearchField({searchTerm, setSearchTerm}: Props) {
    const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }
    return (
        <form className="w-full">
            <input onChange={searchHandler} value={searchTerm} type="text" placeholder="Search for a country..." className="bg-search dark:bg-[#1B2E3B] bg-[length:20px] bg-[10px] bg-no-repeat pl-10 p-2 w-[18rem] max-md:w-full rounded-md drop-shadow-md outline-indigo-600"/>
        </form>
    );
}
export default SearchField;