import Container from "../Container";

function NavigationHeader() {
    return (
        <header className="bg-white drop-shadow-sm">
            <Container>
                <nav className="p-4 flex justify-between items-center ">
                    <h1 className=" text-3xl font-bold">Where in the world?</h1>

                    <div aria-label="light and dark mode button">
                        <img src="/icons/moonicon.svg" alt=" moon-icon" width='18' height='18'
                             className=" inline-block mr-2 align-sub"/>
                        <button className=" inline-block ml-2 text-lg">Dark mode</button>
                    </div>
                </nav>
            </Container>
        </header>
    );
}

export default NavigationHeader;