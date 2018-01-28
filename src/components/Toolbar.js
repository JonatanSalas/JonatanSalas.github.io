import React from "react";
import AppBar from "material-ui/AppBar";
import Link from "react-router-dom/Link";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles";

const styles = {
    root: {
        width: "100%"
    },
    flex: {
        flex: 1,
        color: '#FFFFFF'
    }
};

const SimpleToolbar = ({ classes, children, title }) => (
    <div className={classes.root}>
        <AppBar position="static" color="primary">
            <Toolbar>
                <Link to="/" className={classes.flex}>
                    <Typography
                        type="title"
                        color="inherit"
                    >
                        {title}
                    </Typography>
                </Link>
                {children}
            </Toolbar>
        </AppBar>
    </div>
);

export default withStyles(styles)(SimpleToolbar);
