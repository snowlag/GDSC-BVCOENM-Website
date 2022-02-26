import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InfoIcon from "@mui/icons-material/Info";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import "./style.css";

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
    year,
  } = props;

  // Model for video hooks
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#2a2a2a",
    boxShadow: 24,
    p: 2,
  };

  const cardStyle = {
    "border-radius": "15px 50px 30px 5px",
    "background-color": "#2d2d2d",
    "box-shadow": "0.1em 0.1em 0.5em #a6f616,-0.1em -0.1em 0.4em #ffffff",
  };

  console.log(props);
  return (
    <>
      <div
        className="card mb-3"
        style={{ borderColor: "black", backgroundColor: "transparent" }}
      >
        <div className="eventCard">
          <div className="row g-0">
            <div className="col-md-3">
              <div className="poster-container">
                <img src={posterLink} className="event-image" alt="..." />
              </div>
            </div>
            <div className="col-md-9">
              <div className="card-body event-body">
                <h1 className="card-title">{name}</h1>
                <h4 className="card-text event-desc">{description}</h4>
                <Typography
                  variant="h5"
                  gutterBottom
                  color="gray"
                  component="div"
                >
                  Event Date :{startDate} - {endDate}
                </Typography>
                <Typography
                  variant="h5"
                  gutterBottom
                  color="gray"
                  component="div"
                >
                  Event Time :{startTime} - {endTime}
                </Typography>
                <Stack direction="row" spacing={2}>
                  {!isCompleted && (
                    <Button
                      startIcon={<HowToRegIcon />}
                      color="success"
                      variant="outlined"
                      onClick={() => window.open(registerLink, "_blank")}
                      size="large"
                    >
                      Register
                    </Button>
                  )}
                  <Button
                    color="primary"
                    startIcon={<InfoIcon />}
                    variant="outlined"
                    onClick={() => window.open(registerLink, "_blank")}
                    size="large"
                  >
                    Learn More
                  </Button>
                  {hasVideo && (
                    <Button
                      startIcon={<YouTubeIcon />}
                      size="large"
                      variant="outlined"
                      color="error"
                      onClick={handleOpen}
                    >
                      Watch
                    </Button>
                  )}
                </Stack>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="watch-model">
            <iframe
              class="iframe-player"
              src={`https://www.youtube.com/embed/${youtubeLinkId}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>

            <Typography color="white" gutterBottom variant="h5" component="div">
              {name}
            </Typography>
          </div>
        </Box>
      </Modal>
    </>
  );
}
