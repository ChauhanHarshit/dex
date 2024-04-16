import LandingPage from "./pages/LandingPage";
import SwapPage from "./pages/SwapPage";


const AppRoutes = [

    {
        path: "/",
        page: <LandingPage />,
    },

    {
        path: "/dex-swap",
        page: <SwapPage />,
    }
]


export default AppRoutes;