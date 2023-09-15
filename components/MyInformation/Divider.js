import * as React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

export default function InsetDividers() {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
    >
     
      <Divider
        variant="inset"
        component="li"
        sx={{
          width: "100%", // Adjust the width as needed
          marginLeft: "auto", // Center the divider
          marginRight: "auto", // Center the divider
        }}
      />
    
    </List>
  );
}
