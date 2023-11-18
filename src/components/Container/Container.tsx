import {ReactNode} from "react";
type Container = {
    children: ReactNode
}
function Container({children}: Container) {
    return (
        <div className="max-w-7xl mx-auto">{children}</div>
    );
}
export default Container;