import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../home.css";
import { Link } from 'react-router-dom';

export default function MediaCard({project}) {
  
    const techs = project.technology
  
    return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={project.image}
        title={project.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {techs.map((tech) => (
                <div>{tech}</div>
            ))}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Link to={project._id}><Button size="small">Learn More</Button></Link>
      </CardActions>
    </Card>
  );
}
