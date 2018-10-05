import React from 'react';
import EmployeeRegistrationFormComponent from './../../components/employees/registration.form';
export default class DashboardView extends React.Component {
    render() {
        return (
            <section>
                <EmployeeRegistrationFormComponent></EmployeeRegistrationFormComponent>
            </section>
        )
    }
}