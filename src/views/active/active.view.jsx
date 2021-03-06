import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './active.css';
const styles = {
    root: {
        width: 500,
        border: '1px solid red'
    },
};

export class ActiveView extends React.Component {

    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <section className="bottom-navigation-container">
                <BottomNavigation value={value} onChange={this.handleChange} showLabels className={classes.root}>

                    <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />

                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />

                    <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />

                </BottomNavigation>
            </section>
        );
    }
}

ActiveView.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActiveView);