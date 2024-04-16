import LandingPage from "./pages/LandingPage";
import SwapPage from "./pages/SwapPage";
import TransactionPage from './pages/TransactionPage.jsx'

const AppRoutes = [

    {
        path: "/",
        page: <LandingPage />,
    },
    {
        path: "/dex-swap",
        page: <SwapPage />,
    },
    {
        path: "/dex-swap/transaction-successfull",
        page: <TransactionPage />,
    }
]


export default AppRoutes;