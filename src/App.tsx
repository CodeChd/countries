import NavigationHeader from "./components/NavigationHeader/NavigationHeader.tsx";
import {Outlet} from "react-router-dom";
import Container from "./components/Container";
function App() {
    return (
        <>
            <NavigationHeader/>
            <Container>
                <Outlet/>
            </Container>
        </>
    )
}
export default App
