import LoadingLists from "../LoadingLists";
import CountryCard from "../CountryCard";

type Props = {
    countriesLoading: string
    countriesState: any
}

function CountryLists({countriesLoading, countriesState}: Props) {
    return (
        <div aria-label="Country Lists"
             className="px-4 grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-12">
            {
                countriesLoading === "idle" ?
                    <LoadingLists/> : countriesLoading === "successful" && countriesState.map(data => {
                    const {name: {common: countryName}} = data
                    return <div key={countryName}>
                        <CountryCard countries={data}/>
                    </div>
                })
            }
        </div>
    );
}

export default CountryLists;