import React from 'react';
import EmployeeRegistrationFormComponent from '../../components/employees-registration/registration.form';

export default class DashboardView extends React.Component {

    render() {
        return (
            <React.Fragment>
                <EmployeeRegistrationFormComponent></EmployeeRegistrationFormComponent>
            </React.Fragment>
        )
    }
}