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
        backgroundColor:"#2a2a2a",
        boxShadow: 24,

        p: 2,
    };

    console.log(props)
    return (
        <>
            <Card style={{ "border-radius": "15px 50px 30px 5px", "background-color": "#2d2d2d" }} className="eventCard " sx={{ maxWidth: 345 }}>
                <div className="darkDiv">
                    <CardMedia
                        component="img"
                        height="140"
                        image={posterLink}
                        alt={name}
                    />
                    <CardContent>

                        <Typography gutterBottom variant="h5" component="div" color="white">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" color="darkgrey">
                            {description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" color="darkgrey" >
                            Date: {startDate} - {endDate} {year}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" color="darkgrey">
                            Time: {startTime} - {endTime}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <div className="darkDiv">
                            {!isCompleted && <Button color="success" onClick={() => window.open(registerLink, "_blank")} size="small">Register</Button>}
                            <Button color="primary" onClick={() => window.open(registerLink, "_blank")} size="small">Learn More</Button>
                            {hasVideo && <Button variant="outlined" color="error" onClick={handleOpen} size="small">Watch</Button>}
                        </div>
                    </CardActions>
                </div>
            </Card>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="watch-model">
                        <iframe
                            width="1140"
                            height="641"
                            src={`https://www.youtube.com/embed/${youtubeLinkId}`}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>

                        <Typography color="white" gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography  color="gray" variant="body2" >
                            {description}
                        </Typography>
                    </div>
                </Box>


            </Modal>
        </>
    );
}