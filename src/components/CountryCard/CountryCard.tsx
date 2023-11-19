import {Link} from "react-router-dom";

type Props = {
    countries: []
}
function CountryCard({ countries}: Props) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const {flags, name: { common: countryName }, population, region, capital} = countries

    return (
        <article className="bg-white dark:bg-[#1B2E3B] dark:text-slate-100 rounded-md overflow-hidden shadow-md">

            <Link to={`/country/details/${countryName}`} aria-label="Flag image container">
                <img src={flags.png} alt={countryName} className="object-cover max-w-full w-full h-48" />
            </Link>

            <div aria-label="Country card info" className="py-8 px-4">
                <h1 className="text-2xl font-bold mb-4 ">{countryName}</h1>

                <div className="text-md">
                    <p className="mb-1"><span className="font-bold">Population</span>: {population}</p>
                    <p className="my-1"><span className="font-bold">Region</span>: {region}</p>
                    <p className="mt-1"><span className="font-bold">Capital</span>: {capital}</p>
                </div>
            </div>

        </article>
    );
}

export default CountryCard;