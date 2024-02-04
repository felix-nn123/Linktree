"use client";
import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import OfflineShareIcon from "@mui/icons-material/OfflineShare";
import ClearIcon from "@mui/icons-material/Clear";
import { Divider, IconButton } from "@mui/material";
import SocialMediaLinks from "./SocialMediaLinks";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Slider = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Button
        startIcon={<OfflineShareIcon />}
        className="bg-[#0f342a] hover:bg-[#0b0707] p-3 w-2/3 text-white mt-10 mb-10 rounded-3xl"
        variant="contained"
        onClick={handleClickOpen}
      >
        SHARE LINKS TO VARIOUS SOCIAL MEDIA PLATFORMS
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className="bg-slate-300 flex items-center">
          <div className="flex-1 text-[#0f342a] text-lg">
            Select a Link and share to a given platform
          </div>
          <div>
            <IconButton onClick={handleClose}>
              <ClearIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent className="bg-slate-300 flex flex-col justify-center items-center">
          <Divider className="bg-white w-1/3 ml-auto mr-auto mb-5" />
          <SocialMediaLinks />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default Slider;
