import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Timeline from "../pages/Timeline/Timeline";
import Stats from "../pages/Stats/Stats";
import ErrorPage from "../pages/Error/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'timeline',
                element: <Timeline />,
            },
            {
                path: 'stats',
                element: <Stats />,
            }
        ],
        errorElement: <ErrorPage />,
    },

]);

export default router;