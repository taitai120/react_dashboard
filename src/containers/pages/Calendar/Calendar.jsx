import React, { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    useTheme,
} from "@mui/material";
import Header from "../../../components/Header";
import { tokens } from "../../../theme";
import { Modal, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const Calendar = () => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([]);
    const [date, setDate] = useState({
        id: "",
        title: "",
        start: "",
        end: "",
        allDay: "",
    });

    const handleDateClick = (selected) => {
        // setOpen(true);
        const title = prompt("Please enter a new title for your event");
        // const title = "";
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr} - ${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            });
        }
    };

    const handleClose = () => setOpen(false);

    const handleEventClick = (selected) => {
        if (
            window.confirm(
                `Are you sure you want to delete the event '${selected.event.title}'`
            )
        ) {
            selected.event.remove();
        }
    };

    const handleFormSubmit = (values) => {
        console.log(values);
    };

    return (
        <Box m="20px">
            <Header title="CALENDAR" subtitle="Full Calendar Interative Page" />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant="h2">Create New Event</Typography>
                    <Formik onSubmit={handleFormSubmit} initialValues={date}>
                        {({
                            values,
                            errors,
                            touched,
                            handleBlur,
                            handleChange,
                            handleSubmit,
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <Box
                                    display="grid"
                                    gap="30px"
                                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                                    sx={{
                                        "& > div": {
                                            gridColumn: "span 4",
                                        },
                                    }}
                                >
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Title"
                                        onBlur={handleBlur}
                                        value={values.title}
                                        name="title"
                                        onChange={handleChange}
                                        error={
                                            !!touched.title && !!errors.title
                                        }
                                        helperText={
                                            touched.title && errors.title
                                        }
                                        sx={{ gridColumn: "span 2" }}
                                    />
                                </Box>
                                <Box
                                    display="flex"
                                    justifyContent="end"
                                    mt="20px"
                                >
                                    <Button
                                        type="submit"
                                        color="secondary"
                                        variant="contained"
                                    >
                                        Create
                                    </Button>
                                </Box>
                            </form>
                        )}
                    </Formik>
                </Box>
            </Modal>
            <Box display="flex" justifyContent="space-between">
                <Box
                    flex="1 1 20%"
                    background={colors.primary[400]}
                    p="15px"
                    borderRadius="4px"
                >
                    <Typography>Events</Typography>
                    <List>
                        {currentEvents.map((event) => (
                            <ListItem
                                key={event.id}
                                sx={{
                                    background: colors.greenAccent[500],
                                    margin: "10px 0",
                                    borderRadius: "2px",
                                }}
                            >
                                <ListItemText
                                    primary={event.title}
                                    secondary={
                                        <Typography>
                                            {formatDate(event.start, {
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric",
                                            })}
                                        </Typography>
                                    }
                                ></ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </Box>
                {/* CALENDAR */}
                <Box flex="1 1 100%" ml="15px">
                    <FullCalendar
                        height="75vh"
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin,
                        ]}
                        headerToolbar={{
                            left: "prev, next today",
                            center: "title",
                            right:
                                "dayGridMonth, timeGridWeek, timeGridDay, listMonth",
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={(events) => setCurrentEvents(events)}
                        initialEvents={[
                            {
                                id: "1",
                                title: "Happy new year",
                                date: "2022-11-29",
                            },
                            {
                                id: "2",
                                title: "Tmorrow",
                                date: "2022-11-29",
                            },
                        ]}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Calendar;
