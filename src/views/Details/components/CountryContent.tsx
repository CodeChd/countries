import {renderLanguages} from "../../../utils/renderLanguages.ts";
import {renderCurrency} from "../../../utils/renderCurrency.ts";

type Props = {
    countryState: any;
};

function CountryContent({countryState}: Props) {
    const nativeName = countryState?.name?.official
    const flagImg = countryState?.flags?.png;
    const countryName = countryState?.name?.common;
    const population = countryState?.population;
    const region = countryState?.region;
    const subregion = countryState?.subregion;
    const capital = countryState?.capital;
    const borders = countryState?.borders;
    const languages = countryState?.languages;
    const topLevelDomain = countryState?.tld;
    const currencyName = countryState?.currencies?.[renderCurrency(countryState?.currencies)[0]]?.name;


    return (
        <div className="grid grid-cols-2 max-xl:grid-cols-1 max-xl:gap-4 mt-8 dark:text-slate-100">
            <div className="xl:w-[35rem] xl:h-[25rem]">
                <img src={flagImg} alt={countryName} className=" h-full w-full "/>
            </div>

            <div className="py-4 flex flex-col justify-between">
                <h1 title="Country Name" className="text-2xl font-bold">{countryName}</h1>

                <div className="my-4 flex gap-20 ">
                    <ul className="flex flex-col gap-4">
                        <li><span className="font-bold text-md">Native Name</span>: {nativeName}</li>
                        <li><span className="font-bold text-md">Population</span>: {population}</li>
                        <li><span className="font-bold text-md">Region</span>: {region}</li>
                        <li><span className="font-bold text-md">Sub Region</span>: {subregion}</li>
                        <li><span className="font-bold text-md">Capital</span>: {capital}</li>
                    </ul>

                    <ul className="flex flex-col gap-2">
                        <li><span className="font-bold text-md">Top Level Domain</span>: {topLevelDomain}</li>
                        <li><span className="font-bold text-md">Currencies</span>: {currencyName}</li>
                        <li><span className="font-bold text-md">Languages</span>: {renderLanguages(languages)}</li>
                    </ul>
                </div>
                <div className="flex gap-4 items-center">
                    <p className="font-bold text-md md:whitespace-nowrap">Border Countries: </p>

                    <ul className="flex flex-wrap gap-4 ">
                        {
                                !borders
                                ?
                                <p className="bg-white drop-shadow-md p-1 px-4 dark:bg-[#1B2E3B] dark:text-slate-100">Unavailable!</p>
                                :
                                borders.map((border: string) => (
                                    <li key={border} className="bg-white drop-shadow-md p-1 px-4 dark:bg-[#1B2E3B] dark:text-slate-100 ">{border}</li>
                                ))
                        }
                    </ul>

                </div>

            </div>

        </div>
    );
}

export default CountryContent;