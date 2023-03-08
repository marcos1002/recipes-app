import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const styles = {
  container: {
    width: 800,
    margin: '20px auto',
  },
  card: {
    display: 'flex',
    marginBottom: 16,
  },
  media: {
    margin: 'auto',
    height: 200,
    width: 200,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 16,
    width: '500px',
  },
  title: {
    fontSize: 24,
    margin: '8px 0',
  },
  detailsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detail: {
    marginLeft: 8,
    marginRight: 8,
  },
};

const RecipeList = ({ recipes, onSelect }) => (
  <div style={styles.container}>
    <Grid container direction="column" alignItems="center" spacing={2}>
      {recipes.map((recipe) => (
        <Grid item key={recipe.id}>
          <Card style={styles.card} onClick={() => onSelect(recipe.id)}>
            <CardMedia
              style={styles.media}
              image={`https://spoonacular.com/recipeImages/${recipe.image}`}
              title={recipe.title}
            />
            <CardContent style={styles.content}>
              <Typography style={styles.title} gutterBottom variant="h5" component="h2">
                {recipe.title}
              </Typography>
              <div style={styles.detailsContainer}>
                <Typography style={styles.detail}>{recipe.servings} servings</Typography>
                <Typography style={styles.detail}>
                  {recipe.readyInMinutes} minutes
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </div>
);

export default RecipeList;
