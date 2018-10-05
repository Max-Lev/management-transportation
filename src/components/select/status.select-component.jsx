import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './status.style.css';

const styles = theme => ({});
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


class StatusSelectComponent extends React.Component {

    render() {

        const { classes, theme } = this.props;
        
        return (

            <div className="root">

                <FormControl className="formControl">

                    <InputLabel htmlFor="select-multiple">{this.props.componentLabel}</InputLabel>

                    <Select multiple={false}
                        value={this.props.employeeSelectedStatus}
                        onChange={this.props.eployeeStatusHandler}
                        input={<Input id="select-multiple" />}
                        MenuProps={MenuProps}>

                        {this.props.employeeStatusOptions.map(name => (
                            <MenuItem key={name} value={name}
                                style={{
                                    fontWeight: this.props.employeeSelectedStatus.indexOf(name) === -1
                                        ? theme.typography.fontWeightRegular
                                        : theme.typography.fontWeightMedium
                                }}>
                                {name}
                            </MenuItem>
                        ))}

                    </Select>

                </FormControl>
            </div>

        );
    }
}

StatusSelectComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(StatusSelectComponent);

