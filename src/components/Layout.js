import React from "react";
import Link from "react-router-dom/Link";
import Button from "material-ui/Button/Button";
import withStyles from "material-ui/styles/withStyles";

import Toolbar from "./Toolbar";

const styles = {
    button: {
        minHeight: 64,
        "&:hover": {
            borderBottom: "3px solid #9E1D38"
        }
    },
    root: {
        padding: 24
    },
    link: {
        color: "#FFFFFF"
    }
};

class Layout extends React.Component {
    static defaultProps = {
        title: "Jonatan E. Salas",
        menu: [
            {
                href: "/#interests",
                text: "Interests"
            },
            {
                href: "/#work",
                text: "Work"
            },
            {
                href: "/#contact",
                text: "Contact"
            },
            {
                href: "/blog",
                text: "Blog"
            }
        ]
    };

    render() {
        const { children, classes, menu, title } = this.props;

        return (
            <React.Fragment>
                <Toolbar title={title}>
                    {menu.map((item, idx) => (
                        <Link
                            id={idx}
                            key={idx}
                            to={item.href}
                            className={classes.link}
                        >
                            <Button className={classes.button} color="inherit">
                                {item.text}
                            </Button>
                        </Link>
                    ))}
                </Toolbar>
                <main className={classes.root}>{children}</main>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Layout);
