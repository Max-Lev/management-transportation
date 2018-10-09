import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { navigationList_A } from './nav-items';
import { styles } from './styles';
import './styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppRoutes } from './../routes/routes';

class MiniDrawer extends React.Component {
    state = {
        open: false,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {

        const { classes, theme } = this.props;

        return (
            <Router>

                <section className={classes.root}>

                    <AppBar position="absolute" className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
                        <Toolbar disableGutters={!this.state.open}>

                            <IconButton color="inherit" aria-label="Open drawer"
                                onClick={this.handleDrawerOpen}
                                className={classNames(classes.menuButton, this.state.open && classes.hide)}>
                                <MenuIcon />
                            </IconButton>

                            <Typography variant="title" color="inherit" noWrap>Mini variant drawer</Typography>
                        </Toolbar>
                    </AppBar>

                    <Drawer variant="permanent" open={this.state.open}
                        classes={{
                            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                        }}>

                        <div className={classes.toolbar}>
                            <IconButton onClick={this.handleDrawerClose}>
                                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                            </IconButton>
                        </div>

                        <Divider />

                        <List>{navigationList_A}</List>

                        <Divider />

                    </Drawer>

                    <main className={classes.content}>

                        <div className={classes.toolbar} />

                        <React.Fragment>
                            <Switch>
                                {
                                    AppRoutes.map((item, index) => {
                                        return <Route exact strict key={index} component={item.component} path={item.path}></Route>
                                    })
                                }
                            </Switch>
                        </React.Fragment>

                    </main>

                </section>

            </Router>
        );
    }
}

MiniDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);