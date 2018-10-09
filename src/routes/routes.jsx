import DashboardView from '../views/dashboard/dashboard.view';
import ActiveView from '../views/active/active.view';
import EmployeesView from '../views/employees/employees.view';

export class RoutesModel {
    constructor(path, component, title) {
        this.path = path;
        this.component = component;
        this.title = title;
    }
};

export const AppRoutes = [
    {
        ...new RoutesModel('/', EmployeesView, 'Employees')
    },
    {
        ...new RoutesModel('/Dashboard', DashboardView, 'Dashboard')
    },
    {
        ...new RoutesModel('/Active', ActiveView, 'Active')
    }
];

console.log(AppRoutes)