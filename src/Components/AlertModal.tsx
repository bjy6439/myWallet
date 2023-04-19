import { Button, Grid, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AlertModal = ({
  modalOn,
  setModalOn,
}: {
  modalOn: boolean;
  setModalOn: any;
}) => {
  const closeModal = () => {
    setModalOn(false);
  };
  return (
    <Modal
      open={modalOn}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid container>
          <Grid item xs>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              준비중입니다.
            </Typography>
          </Grid>
          <Grid item>
            <Button onClick={closeModal}>x</Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default AlertModal;
