import App from './App'
import DashboardList from "./pages/DashboardList";

const routes = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: 'dashboardList',
                element: <DashboardList/>,
            }
        ]
    }
];


export default routes;

