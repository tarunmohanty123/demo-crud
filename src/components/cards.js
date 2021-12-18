import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Avatar, Box, IconButton } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        minHeight: 136,
        margin: "10px",
    },
    container: {
        display: "flex",
        justifyContent: "flex-end",
    },
    avatarIcon: {
        display: "flex",
        justifyContent: "space-evenly",
        padding: "0px 20px",
        alignItems: "center",
    },
});

export default function Cards({ each, index, handelDelate }) {
    // here i mention(catch) those props which i send from App.js component.
    const classes = useStyles();
    //you can't use useStyles function in jsx so we have to store that into a variable.
    return (
        <Card className={classes.root}>
            <Box className={classes.container}>
                <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                >
                    <EditIcon />
                </IconButton>
                <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    onClick={() => handelDelate(index)} //as i told you onClick is a javascript event, Here i send index cuz it's a unique value. 
                >
                    <DeleteIcon />
                </IconButton>
            </Box>
            <Box className={classes.avatarIcon}>
                <Avatar alt={each.name} src="" />
                <Box fontSize={16} fontWeight={600}>
                    {each.name}
                    {/* here i bind that array element */}
                </Box>
            </Box>
        </Card>
    );
}
