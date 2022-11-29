import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import { mockDataInvoices } from "../../../data/mockData";
import Header from "../../../components/Header";

const index = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        {
            field: "cost",
            headerName: "Cost",
            flex: 1,
            renderCell: (params) => (
                <Typography color={colors.greenAccent[500]}>
                    ${params.row.cost}
                </Typography>
            ),
        },
        {
            field: "phone",
            headerName: "Phone",
            flex: 1,
        },
        {
            field: "date",
            headerName: "Date",
            type: "Date",
            flex: 1,
        },
    ];
    return (
        <Box m="20px">
            <Header title="INVOICES" subtitle="List of Invoice Balances" />
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        background: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScoller": {
                        background: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        background: colors.blueAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                }}
            >
                <DataGrid
                    rows={mockDataInvoices}
                    columns={columns}
                    checkboxSelection
                />
            </Box>
        </Box>
    );
};

export default index;
