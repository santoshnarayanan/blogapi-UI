import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Posts = ({ posts }) => {
  if (!posts || posts.length === 0) return <p>Can not find any posts, sorry</p>;

  return (
    <Container maxWidth="md" component="main">
      <Grid container spacing={5} alignItems="flex-start">
        {posts.map((post) => (
          <Grid item key={post.id} xs={12} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "grey.100",
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              {/* Person image at the top */}
              <CardMedia
                component="img"
                height="240"
                image={
                  post.image || "https://randomuser.me/api/portraits/men/32.jpg"
                }
                alt={post.title}
                sx={{
                  objectFit: "cover",
                }}
              />

              {/* Content below image */}
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h2"
                  sx={{
                    fontSize: "16px",
                    textAlign: "left",
                    fontWeight: 500,
                  }}
                >
                  {post.title.length > 50
                    ? `${post.title.substr(0, 50)}...`
                    : post.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "baseline",
                    fontSize: "12px",
                    textAlign: "left",
                  }}
                >
                  {post.excerpt.length > 60
                    ? `${post.excerpt.substr(0, 60)}...`
                    : post.excerpt}
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
