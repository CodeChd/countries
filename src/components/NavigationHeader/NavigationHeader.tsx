import Container from "../Container";
import useDarkmode from "../../hooks/useDarkmode.ts";
import {useState} from "react";
import {DarkModeSwitch} from "react-toggle-dark-mode";

function NavigationHeader() {
    const [colorTheme, setTheme] = useDarkmode();
    const [darkmode, setDarkmode] = useState(colorTheme === 'light' );

    const toggleDarkMode = (checked: boolean) => {
        setTheme(colorTheme);
        setDarkmode(checked);
    };

    return (
        <header className="bg-white dark:bg-[#1B2E3B] drop-shadow-sm">
            <Container>
                <nav className="p-4 flex justify-between items-center ">
                    <h1 className=" text-3xl font-bold dark:text-slate-100 max-md:text-2xl">Where in the world?</h1>

                    <DarkModeSwitch onChange={toggleDarkMode} checked={darkmode}  size={40} />
                </nav>
            </Container>
        </header>
    );
}

export default NavigationHeader;