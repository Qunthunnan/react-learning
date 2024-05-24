import { Component } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export class Cards extends Component {
    render() {
        const {image, imageDescr, title, content, btns} = this.props;
        const btnComponents = btns.map((item, i) => (<Button key={i} size="small">{item}</Button>))
        return (
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                sx={{ height: 140 }}
                image={image}
                title={imageDescr}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {content}
                    </Typography>
                </CardContent>
                <CardActions>
                    {btnComponents}
                </CardActions>
          </Card>
        )
    }
}