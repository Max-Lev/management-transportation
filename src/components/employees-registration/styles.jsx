const stylesTheme = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'baseline'
    },
    textField: {
        // marginLeft: theme.spacing.unit,
        // marginRight: theme.spacing.unit,
        width: '100%',
        display: 'flex',
        flex: '1'
    },
    formControl: {
        margin: theme.spacing.unit,
        display: 'flex',
        flex: '1',
        minWidth: '120px',
        maxWidth: '300px',
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    }
});

export default stylesTheme;