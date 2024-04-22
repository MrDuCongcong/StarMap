import App from './App'
import Project from "./pages/project";

const routes = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: 'project',
                element: <Project/>,
            }
        ]
    }
];


export default routes;

