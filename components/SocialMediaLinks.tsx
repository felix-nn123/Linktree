import React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { Divider, TextField } from "@mui/material";
import { TextFields } from "@mui/icons-material";
import ImagePicker from "./ImagePicker";

const SocialMediaLinks = () => {
  return (
    <>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Platforms
          </ListSubheader>
        }
      >
        <Divider className="w-full bg-black" />
        <ListItemButton
          style={{ marginBottom: "0.8px" }}
          className="bg-[#0f342a] text-white hover:bg-white hover:text-[#0f342a]  border hover:border-[#0f342a]"
        >
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Sent mail" />
        </ListItemButton>
        <ListItemButton
          style={{ marginBottom: "0.8px" }}
          className="bg-[#0f342a] text-white hover:bg-white hover:text-[#0f342a]  border hover:border-[#0f342a]"
        >
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
      </List>

      <Divider className="w-full mt-5 mb-5 bg-black" />

      <TextField
        id="filled-basic"
        label="Please, Add the url to the link your want to share"
        variant="filled"
        className="w-full mb-2"
      />

      <ImagePicker />
    </>
  );
};

export default SocialMediaLinks;
