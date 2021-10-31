import { Box, Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "space-between",
    // width: "100%",
    Height: 320,
    cursor: "pointer",
  },
  btn: {
    backgroundColor: "#0072a1",
    color: "white",
    marginTop: "1rem",
    "&:hover": {
      backgroundColor: "#0072a1",
    },
  },
});

function OppCard({ company, location, paragraph, deadline, job }) {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" color="textSecondary" gutterBottom>
          {job}
        </Typography>
        <Typography variant="h5" color="textSecondary" gutterBottom>
          {company}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {location}
        </Typography>

        <Typography variant="body2" color="textSecondary" gutterBottom>
          {paragraph}
        </Typography>
        <Typography variant="body2" color="secondary">
          {deadline}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default OppCard;
