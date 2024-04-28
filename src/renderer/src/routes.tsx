import App from './App'
import Portal from '@/pages/portal';
import DashboardList from "@/pages/dashboardList";

const routes = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: 'portal',
                element: <Portal/>,
                children: [
                    {
                        path: 'dashboardList',
                        element: <DashboardList/>
                    }
                ]
            },
        ]
    }
];


export default routes;

