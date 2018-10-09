import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import StatusSelectComponent from '../select/status.select-component';
import stylesTheme from './styles';
import EmployeeActiveStatusList from './employee-active-status.data';
import EmployeeRegistrationService from '../../services/employee-registration.service';
// import { Formik } from 'formik';
const styles = stylesTheme;

const employeeStatusOptions = EmployeeActiveStatusList;

const employeeRegistrationService = new EmployeeRegistrationService();

export class EmployeeRegistrationFormComponent extends React.Component {

    state = {
        name: employeeRegistrationService.stateModel.name,
        birthDate: '',
        employeeSelectedStatus: []
    };

    componentDidMount() { };

    setEmployeeName = (event) => {
        this.setState({ name: event.target.value }, () => {
            employeeRegistrationService.setState(this.state);
            console.log('setEmployeeName: ', this.state);
        });
    };

    eployeeStatusHandler = (event) => {
        this.setState({ employeeSelectedStatus: event.target.value }, () => {
            console.log(this.state)
        });
    };

    submitEmployee = (e) => {
        console.log('submit employee: ', e);
        debugger
    };


    render() {
        const { classes } = this.props;

        return (

            <form onSubmit={this.submitEmployee} className={classes.container} noValidate autoComplete="off" >

                <FormControl className={classes.formControl} required={true}>
                    <TextField id="standard-name" label="Name"
                        className={classes.textField} value={this.state.name}
                        onChange={this.setEmployeeName} margin="normal" />
                </FormControl>

                <StatusSelectComponent componentLabel='Employee Status'
                    employeeStatusOptions={employeeStatusOptions}
                    employeeSelectedStatus={this.state.employeeSelectedStatus}
                    eployeeStatusHandler={this.eployeeStatusHandler}>
                </StatusSelectComponent>

            </form>
        )
    }
}

EmployeeRegistrationFormComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmployeeRegistrationFormComponent);