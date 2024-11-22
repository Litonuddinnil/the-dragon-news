 
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";

 
const route = createBrowserRouter([
    {
        path:"/",
        element: <Root></Root>
    },
    {
        path:"/news",
        element: <h1>News Layout</h1>
    },
    {
        path:"auth",
        element: <h1>Login</h1>
    },
    {
        path:"*",
        element: <h1>Error</h1>
    }
]);

export default route;