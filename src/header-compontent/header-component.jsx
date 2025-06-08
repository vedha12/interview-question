import React, { useState } from "react";
import "./header.css";
import Content from "../route.json";
import {
  Drawer,
  Grid,
  IconButton,
  Typography,
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
} from "@mui/material";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Javascript from "../interview-question/javascript";
import ReactQuestion from "../interview-question/react";
import Angular from "../interview-question/angular";
import Node from "../interview-question/node";
import Postgresql from "../interview-question/sql";
import Mongodb from "../interview-question/mongodb";
const drawerWidth = 240;
export default function HeaderComponent() {
  const navigator = useNavigate();
  const [menu, setMenu] = useState(true);
  const [isActive, setIsActive] = useState(0);
  const handleChange = (index, data) => {
    setIsActive(index);
    navigator(data.routeLink);
  };

  const handleClickMenu = () => {
    setMenu((menu) => !menu);
  };

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleClickMenu}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              My React App
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="persistent"
          anchor="left"
          open={menu}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            {Content.map((val, index) => (
              <Grid
                key={index}
                className={
                  isActive === index ? "sideMenu sideHover" : "sideHover"
                }
                container
                onClick={() => handleChange(index, val)}
                spacing={1}
                sx={{
                  margin: 2,
                  alignItems: "center",
                  padding: "6px",
                  border: " 1.2px solid white",
                }}
              >
                <img width={"35px"} src={val.Icon} />
                <Typography> {val.heading}</Typography>
              </Grid>
            ))}
          </Box>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            marginLeft: menu ? `${0}px` : 0,
            transition: "margin 0.3s",
          }}
        >
          <Toolbar />
          <Routes>
            <Route path="/javascript" element=<Javascript /> />
            <Route path="" element=<Navigate to="/javascript" /> />
            <Route path="/react" element=<ReactQuestion /> />
            <Route path="/angular" element=<Angular /> />
            <Route path="/node" element=<Node /> />
            <Route path="/postgresql" element=<Postgresql /> />
            <Route path="/mongodb" element=<Mongodb /> />
          </Routes>
        </Box>
      </Box>
    </div>
  );
}
