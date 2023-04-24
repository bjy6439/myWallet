import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { closeModal } from "../Store/modalSlice";
import { RootState, useAppDispatch } from "../Store/store";

const CardModal = () => {
  const isModal = useSelector((state: RootState) => state.modal.modal);
  const dispatch = useAppDispatch();

  return (
    <>
      <Modal
        open={isModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container>
            <Grid item xs={10}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
            </Grid>
            <Button
              onClick={() => {
                dispatch(closeModal());
              }}
            >
              x
            </Button>
          </Grid>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default CardModal;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
