import React, { useState } from "react";
import styled from "styled-components";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";

const DetailContainer = styled.section`
  width: auto;
  display: flex;
  flex-direction: column;
`;

const DetailDialog = ({ row }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        component="div"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"DETAIL"}</DialogTitle>
        <DialogContent>
          <DialogContentText component="div" id="alert-dialog-description">
            <DetailContainer>
              <div>
                <h3>Title</h3>
                <p>{row.title}</p>
              </div>
              <div>
                <h3>Comments</h3>
                <p>{row.comments}</p>
              </div>
              <div>
                <h3>Star</h3>
                <p>{row.star}</p>
              </div>
              <div>
                <h3>Genre</h3>
                <p>{row.genre}</p>
              </div>
            </DetailContainer>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="outlined"
            color="primary"
            autoFocus
          >
            CLOSE
          </Button>
        </DialogActions>
      </Dialog>
      <Button
        component="button"
        variant="outlined"
        color="primary"
        onClick={handleOpen}
      >
        DETAIL
      </Button>
    </>
  );
};

export default DetailDialog;
