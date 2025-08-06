// src/components/Posts.js
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CardHeader from "@mui/material/CardHeader";

const Posts = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return (
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          No posts available.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        {posts.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <Card>
              {/* Card Header */}
              <CardHeader
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[200]
                      : theme.palette.grey[700],
                }}
                title={post.title}
              />

              {/* Post Image */}
              <CardMedia
                sx={{
                  paddingTop: "56.25%", // 16:9 aspect ratio
                }}
                image={post.image}
                title={post.title}
              />

              {/* Card Content */}
              <CardContent>
                <Typography
                  sx={{
                    fontSize: "16px",
                    textAlign: "left",
                    fontWeight: 600,
                  }}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  {post.title}
                </Typography>

                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "baseline",
                    fontSize: "12px",
                    textAlign: "left",
                    mb: 2,
                  }}
                  variant="body2"
                  color="text.secondary"
                  component="p"
                >
                  {post.excerpt}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Posts;
