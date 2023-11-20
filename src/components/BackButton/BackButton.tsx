import {Link} from "react-router-dom";

function BackButton() {
    return (
        <Link to="/" className="p-2 px-8 mb-8 bg-white dark:bg-[#1B2E3B] dark:text-slate-100 drop-shadow-md rounded flex gap-4 items-center w-36">
            <img src="/icons/backicon.svg" alt="back button" width="15"/>
            Back
        </Link>
    );
}

export default BackButton;