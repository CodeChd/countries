import SearchField from "../components/Search";
import FilterDropdown from "../components/FilterDropdown";
import CountryCard from "../components/CountryCard";
import {useEffect, useMemo, useState} from "react";
import COUNTRIES_API from '../api/countries.ts'

function Home() {
    const [countriesLoadinng, setCountriesLoading] = useState<string>("status")
    const [countries, setCountries] = useState<[]>([])

    //Search & region filtering
    const [region, setRegion] = useState<string>("all")
    const [searchTerm, setSearchTerm] = useState<string>("")

    // Fetch countries data
    useEffect(() => {
        const ApiCall = async () => {
            setCountriesLoading("idle")
            try {
                const fetchedData = region.toLowerCase() === "all" ? await COUNTRIES_API.all() : await COUNTRIES_API.getByRegion(region)
                setCountriesLoading("successful")
                if (countriesLoadinng === "successful") {
                    setCountries(fetchedData)
                }

            } catch (e) {
                setCountriesLoading("rejected")
                if (countriesLoadinng === "rejected") {
                    setCountries([])
                }
            }
        }
        ApiCall()

    }, [countriesLoadinng, region]);

    // Filtered or Unfiltered result data
    const countriesState = useMemo(() => {
        return !searchTerm ? countries : countries.filter(({name: {common: commonName}}: { name: { common: string } }) => commonName.toLowerCase().startsWith(searchTerm)
        )
    }, [searchTerm, countries])

    return (
        <>
            <div aria-label="Options" className="flex justify-between py-8 w-full px-4">
                <SearchField searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                <FilterDropdown>
                    <FilterDropdown.Item>All</FilterDropdown.Item>
                    <FilterDropdown.Item>Africa</FilterDropdown.Item>
                    <FilterDropdown.Item>America</FilterDropdown.Item>
                    <FilterDropdown.Item setRegion={setRegion}>Asia</FilterDropdown.Item>
                    <FilterDropdown.Item>Europe</FilterDropdown.Item>
                    <FilterDropdown.Item>Oceania</FilterDropdown.Item>
                </FilterDropdown>
            </div>

            <div aria-label="Country Lists" className="px-4 grid grid-cols-4 gap-12">
                {
                    countriesState.map(data => {
                        const {name: {common: countryName}} = data
                        return <CountryCard key={countryName} countries={data}/>
                    })
                }
            </div>

        </>
    );
}

export default Home;