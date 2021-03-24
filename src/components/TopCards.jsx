import React from "react";
import Color from "color";
import GoogleFont from "react-google-font-loader";
import { makeStyles } from "@material-ui/core/styles";
import NoSsr from "@material-ui/core/NoSsr";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { useFourThreeCardMediaStyles } from "@mui-treasury/styles/cardMedia/fourThree";

const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up("md")]: {
      justifyContent: "center"
    }
  }
}));

const useStyles = makeStyles(() => ({
  actionArea: {
    borderRadius: 16,
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)"
    }
  },
  card: ({ color }) => ({
    minWidth: 256,
    maxHeight: 700,
    borderRadius: 16,
    boxShadow: "none",
    "&:hover": {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`
    }
  }),
  content: ({ color }) => {
    return {
      backgroundColor: color,
      padding: "1rem 1.5rem 1.5rem"
    };
  },
  title: {
    fontFamily: "Keania One",
    fontSize: "1.1rem",
    color: "#fff",
    textTransform: "uppercase"
  },
  subtitle: {
    fontFamily: "Montserrat",
    color: "#fff",
    opacity: 0.87,
    marginTop: "2rem",
    fontWeight: 500,
    fontSize: 14
  }
}));

const CustomCard = ({ classes, image, title, subtitle }) => {
  const mediaStyles = useFourThreeCardMediaStyles();
  return (
    <CardActionArea className={classes.actionArea}>
      <Card className={classes.card}>
        <CardMedia classes={mediaStyles} image={image} />
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant={"h2"}>
            {title}
          </Typography>
          <Typography className={classes.subtitle}>{subtitle}</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export const SolidGameCardDemo = React.memo(function SolidGameCard() {
  const gridStyles = useGridStyles();
  const styles = useStyles({ color: "orange" });
  const styles2 = useStyles({ color: "purple" });
  const styles3 = useStyles({ color: "silver" });
  const styles4 = useStyles({ color: "black" });
  return (
    <>
      <Grid classes={gridStyles} container spacing={4} wrap={"nowrap"}>
        <Grid item>
          <CustomCard
            classes={styles}
            title={"Fury Sliver"}
            subtitle={"Be a Legend!"}
            image={
              "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/0/0/0000579f-7b35-4ed3-b44c-db2a538066fe.jpg?1562894979"
            }
          />
        </Grid>
        <Grid item>
          <CustomCard
            classes={styles2}
            title={"Wildcall"}
            subtitle={"Time to choose side!"}
            image={
              "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/0/0/00020b05-ecb9-4603-8cc1-8cfa7a14befc.jpg?1562633475"
            }
          />
        </Grid>
        <Grid item>
          <CustomCard
            classes={styles3}
            title={"Mystic Skyfish"}
            subtitle={"What are you waiting?"}
            image={
              "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/0/0/0002ab72-834b-4c81-82b1-0d2760ea96b0.jpg?1596250027"
            }
          />
        </Grid>
        <Grid item>
          <CustomCard
            classes={styles4}
            title={"Whiptongue Hydra"}
            subtitle={"Are you ready?"}
            image={
              "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/0/0/0005c844-787c-4f0c-8d25-85cec151642b.jpg?1592710235"
            }
          />
        </Grid>
      </Grid>
    </>
  );
});
export default SolidGameCardDemo;
