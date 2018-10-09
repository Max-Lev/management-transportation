import React from 'react';
import EmployeesListComponent from '../../components/employees-list/employees-list.component';
import firebaseApp from '../../config/firebase';
import Typography from '@material-ui/core/Typography';
export class EmployeesView extends React.Component {

    state = {
        employees: []
    }

    componentDidMount() {
        this.isUserAuth();
    };

    isUserAuth() {
        firebaseApp.auth().signInWithEmailAndPassword('maxlevtov@gmail.com', '987495').then((auth) => {
            console.log('user: ', auth.user.email + '-' + auth.user.uid)
            this.getEmployees();
        });
    };

    getEmployees() {

        var db = firebaseApp.firestore();

        db.collection('employees').onSnapshot(employees => {
            const employeesList = [];
            employees.forEach(employee => {
                employeesList.push(employee.data());
            });
            this.setState({ employees: employeesList }, () => {
                console.log(this.state)
            });
        });

    };

    render() {
        return (
            <React.Fragment>
                {
                    this.state.employees.length !== 0 &&
                    <React.Fragment>
                        <Typography variant="headline">Employees</Typography>
                        <EmployeesListComponent employees={this.state.employees}></EmployeesListComponent>
                    </React.Fragment>
                }

            </React.Fragment>
        )
    }
};

export default EmployeesView;


