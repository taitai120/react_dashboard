import React, { useState } from "react";
import { ProSidebarProvider, SubMenu, Menu, MenuItem } from "react-pro-sidebar";
// import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "./../../theme";
import {
    HomeOutlined,
    PeopleOutline,
    ContactsOutlined,
    ReceiptOutlined,
    CalendarTodayOutlined,
    BarChartOutlined,
    PieChartOutline,
    TimelineOutlined,
    MenuOutlined,
    MapOutlined,
} from "@mui/icons-material";

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");
    return (
        <ProSidebarProvider>
            <Menu>
                <SubMenu label="Charts">
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                </SubMenu>
                <MenuItem> Documentation </MenuItem>
                <MenuItem> Calendar </MenuItem>
            </Menu>
        </ProSidebarProvider>
    );
};

export default Sidebar;
