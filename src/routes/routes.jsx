import DashboardView from '../views/dashboard/dashboard.view';
import ActiveView from '../views/active/active.view';

export class RoutesModel {
    constructor(path, component, title) {
        this.path = path;
        this.component = component;
        this.title = title;
    }
}
export const AppRoutes = [
    {
        ...new RoutesModel('/', DashboardView, 'Dashboard')
    },
    {
        ...new RoutesModel('/Active', ActiveView, 'Active')
    }
];

console.log(AppRoutes)