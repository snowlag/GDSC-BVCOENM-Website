import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
export default function EventCard(props) {
    const {
        name,
        description,
        posterLink,
        eventLink,
        isCompleted,
        hasVideo,
        youtubeLinkId,
        startTime,
        startDate,
        endDate,
        endTime,
        registerLink,
        year
    } = props

    // Model for video hooks
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 2,
    };

    console.log(props)
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={posterLink}
                    alt={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary"  >
                        Date : {startDate} - {endDate} {year}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Time : {startTime} - {endTime}
                    </Typography>
                </CardContent>
                <CardActions>
                    {!isCompleted && <Button onClick={() => window.open(registerLink, "_blank")} size="small">Register</Button>}
                    <Button onClick={() => window.open(registerLink, "_blank")} size="small">Learn More</Button>
                    {hasVideo && <Button onClick={handleOpen} size="small">Watch</Button>}
                </CardActions>
            </Card>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <iframe
                        width="1140"
                        height="641"
                        src={`https://www.youtube.com/embed/${youtubeLinkId}`}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>

                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description} 
                    </Typography>
                </Box>
            </Modal>
        </>
    );
}