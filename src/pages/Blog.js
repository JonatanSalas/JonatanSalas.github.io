import React from "react";
import Ellipsis from "react-dotdotdot";

import Grid from "material-ui/Grid/Grid";
import Card from "material-ui/Card/Card";
import CardMedia from "material-ui/Card/CardMedia";
import CardContent from "material-ui/Card/CardContent";
import CardActions from "material-ui/Card/CardActions";
import Typography from "material-ui/Typography/Typography";
import Button from "material-ui/Button/Button";

export default class Blog extends React.Component {
    state = {
        posts: require("../data/feed.json")
    };

    render() {
        const { posts } = this.state;

        return (
            <Grid direction="column" spacing={0} container>
                <Grid item style={{ paddingBottom: 24 }}>
                    <Typography type="headline">Latest Posts</Typography>
                </Grid>
                <Grid container>{posts.map(this.renderPostItem)}</Grid>
            </Grid>
        );
    }
    renderPostItem = (post, idx) => (
        <Grid
            item
            md={6}
            xs={12}
            sm={12}
            key={idx}
            style={{ paddingTop: 8, paddingBottom: 8 }}
        >
            <Card>
                <a
                    href={`https://medium.com/@jonatan_salas/${
                        post.uniqueSlug
                    }`}
                    target="_blank"
                >
                    <CardMedia
                        image={this.getImageById(
                            post.virtuals.previewImage.imageId
                        )}
                        title={post.title}
                        style={{
                            height: 200
                        }}
                    />
                </a>
                <CardContent>
                    <a
                        href={`https://medium.com/@jonatan_salas/${
                            post.uniqueSlug
                        }`}
                        target="_blank"
                    >
                        <Typography type="headline" component="h2">
                            <Ellipsis clamp={1}>{post.title}</Ellipsis>
                        </Typography>
                    </a>
                    <a
                        href={`https://medium.com/@jonatan_salas/${
                            post.uniqueSlug
                        }`}
                        target="_blank"
                    >
                        <Typography component="p">
                            <Ellipsis clamp={1}>
                                {post.content.subtitle}
                            </Ellipsis>
                        </Typography>
                    </a>
                </CardContent>
                <CardActions>
                    <a
                        href={`https://medium.com/@jonatan_salas/${
                            post.uniqueSlug
                        }`}
                        target="_blank"
                    >
                        <Button dense color="primary">
                            Read More
                        </Button>
                    </a>
                </CardActions>
            </Card>
        </Grid>
    );

    getImageById = id => `https://cdn-images-1.medium.com/max/1600/${id}`;
}
