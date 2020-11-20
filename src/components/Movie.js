import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import {NavLink} from 'react-router-dom';

//import {fetchFilmPersonnal,CLICK} from "../store/action"
const Alert = (props) =>{
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '380px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Movie = ({id,image,release_date,titre,overview,listUser,idPresent,vote}) =>{
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);



  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const addFilm = (personnalFilm) =>{
    
  let filmStorage = JSON.parse(localStorage.getItem('filmList'));

  if(filmStorage == null){
    localStorage.setItem("filmList",JSON.stringify(personnalFilm))
  }else if(typeof filmStorage === "object" && !Array.isArray(filmStorage)){
    localStorage.setItem("filmList",JSON.stringify([filmStorage,personnalFilm]))
  }else{
    filmStorage.push(personnalFilm)
    localStorage.setItem("filmList",JSON.stringify(filmStorage))
  } 

  setOpen(true);
}
   
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {titre.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={titre}
        subheader={release_date}
      />
      <CardMedia
        className={classes.media}
        image={`http://image.tmdb.org/t/p/w220_and_h330_face${image}`}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {`${overview.substr(0, 100)}[....]`}
        </Typography>
      </CardContent>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">Note</Typography>
          <Rating name="disabled" value={vote/2} disabled />
        </Box>
        
      <CardActions disableSpacing>
        {
          idPresent? 
            <span></span>
          :
          <div style={{display:"flex",flexDirection:"column"}}>
          <NavLink exact to={`/details/${id}`} style={{textDecoration:"none"}}>
            <Button variant="contained" color="primary" style={{marginBottom:"1%"}}>
                Details
            </Button>
          </NavLink>
           <Button variant="contained" color="primary" onClick={()=>addFilm(listUser)} style={{marginBottom:"1%"}}>
            Add to my wishlist
          </Button>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              The film has been added to the list
            </Alert>
          </Snackbar>
          </div>
        }
      </CardActions>
    </Card>
  );
}


export default Movie