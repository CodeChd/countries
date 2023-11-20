import SearchField from "../../../components/Search";
import FilterDropdown from "../../../components/FilterDropdown";

type Props = {
    searchTerm: string
    setSearchTerm: (e: string) => void
    setRegion: (e: string) => void
}

function Forms({searchTerm, setSearchTerm, setRegion}: Props) {
    return (
        <div aria-label="Options" className="flex max-md:flex-col max-md:gap-4 justify-between py-8 w-full px-4 ">
            <SearchField searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <FilterDropdown setRegion={setRegion}/>
        </div>
    );
}

export default Forms;