import { Alert, AlertTitle } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../Store/modalSlice";
import { RootState } from "../Store/store";

const AlertModal = () => {
  const modal = useSelector((state: RootState) => state.modal.modal);
  const dispatch = useDispatch();
  return (
    <>
      {modal && (
        <Alert
          sx={alam}
          severity="info"
          variant="filled"
          onClose={() => {
            dispatch(closeModal());
          }}
        >
          <AlertTitle>Info</AlertTitle>
          죄송합니다. 해당 서비스는 준비중입니다. ^^
        </Alert>
      )}
    </>
  );
};

export default AlertModal;

const alam = {
  display: "flex",
  position: "absolute",
  bottom: 20,
  right: 20,
};
