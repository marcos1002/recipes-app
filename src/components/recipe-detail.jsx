import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Button,
  useTheme,
  Grid,
} from '@mui/material';
import { chunk } from 'lodash';

const useStyles = (theme) => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    backgroundColor: '#f5f5f5',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  table: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  tableCell: {
    border: 'none',
    padding: theme.spacing(1),
  },
  tableImage: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '50%',
    marginBottom: theme.spacing(1),
  },
});

const RecipeDetail = ({ recipe, onReturn }) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <Card style={styles.card}>
      <CardMedia
        style={styles.media}
        image={recipe.image}
        title={recipe.title}
        height={200}
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {recipe.title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {recipe.readyInMinutes} minutes | {recipe.servings} servings
        </Typography>
        <Table style={styles.table}>
          <TableBody>
            {chunk(recipe.extendedIngredients, 3).map((ingredientGroup, index) => (
              <TableRow key={index}>
                {ingredientGroup.map((ingredient, j) => (
                  <TableCell key={j} style={styles.tableCell}>
                    <Grid container direction="column" alignItems="center">
                      <Grid item>
                        <img
                          src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                          alt={ingredient.name}
                          style={styles.tableImage}
                        />
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle2" align="center">
                          {ingredient.original}
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Typography variant="h6" component="h3">
          Instructions
        </Typography>
        {recipe.analyzedInstructions[0].steps.map((step, index) => (
          <Typography key={index} variant="body1">
            {index + 1}. {step.step}
          </Typography>
        ))}
        <Button
          onClick={onReturn}
          color="primary"
          variant="contained"
          style={styles.button}
        >
          Close
        </Button>
      </CardContent>
    </Card>
  );
};

export default RecipeDetail;
