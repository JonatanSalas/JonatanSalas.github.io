import React from "react";

import Grid from "material-ui/Grid/Grid";
import Typography from "material-ui/Typography/Typography";

export default class Index extends React.Component {
    render() {
        return (
            <Grid direction="column" spacing={0} container>
                <Grid item>
                    <Typography align="center" color="default" type="display1">
                        Welcome!
                    </Typography>
                </Grid>
                <Grid item style={{ paddingTop: 16 }}>
                    <Typography
                        align="center"
                        color="default"
                        type="subheading"
                    >
                        My name is <bold>Jonatan E. Salas</bold>. I'm a young
                        Software Engineer with a passion for all sort of things
                        technology-related. My main focuses include mobile
                        development using React Native, along with frontend
                        development through React/Redux, and backend web
                        development using Node.js. Currently, I'm working as the
                        Lead Frontend Engineer at{" "}
                        <a
                            href="https://www.grupoamerica.com/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Grupo América
                        </a>
                        , based in Palermo, Buenos Aires.
                    </Typography>
                </Grid>
            </Grid>
        );
    }
}
