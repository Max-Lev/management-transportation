import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});

export class EmployeesListComponent extends React.Component {

    state = {
        checked: [0],
        selectedEmployees: [],
        employees: []
    };


    async componentDidMount() {
        this.setState({
            employees: this.props.employees
        }, () => {
            console.log('employees async state:', this.state);
        });
    };

    handleToggle = (listitem, key) => {

        let newSelectedList = [...this.state.checked];

        if (this.state.checked.indexOf(key) === -1) {
            newSelectedList.push(key)
        } else {
            newSelectedList = newSelectedList.filter((value) => value !== key);
        }
        this.setState({ checked: newSelectedList }, () => {
            console.log(this.state)
        });

    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <List>
                    {
                        this.props.employees.map((employee, index) => (
                            <ListItem key={index} role={undefined} dense button onClick={() => this.handleToggle(employee, index)} >


                                {`${index + 1}.`} <Checkbox checked={this.state.checked.indexOf(index) !== -1} tabIndex={-1} disableRipple />

                                <ListItemText primary={`${employee.first_name} ${employee.last_name}`} />

                                <ListItemSecondaryAction>

                                    <IconButton aria-label="Comments">

                                        <CommentIcon />

                                    </IconButton>

                                </ListItemSecondaryAction>

                            </ListItem>

                        ))}
                </List>
            </div>
        );
    }
}

EmployeesListComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmployeesListComponent);