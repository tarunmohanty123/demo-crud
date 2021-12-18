import "./App.css";
import { Box, makeStyles } from "@material-ui/core";
import Cards from "./components/cards";
import AddUser from "./components/AddUser";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    height: "500px",
    margin: "20px auto",
    padding: "0px 10px",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
}));

const userData = [
  {
    name: "Tarun mohanty",
  },
  {
    name: "Goutam mohanty",
  },
  {
    name: "Happy mohanty",
  },
  {
    name: "Kishu mohanty",
  },
  {
    name: "Ranjit mohanty",
  },
];

function App() {
  const classes = useStyles();
  const [registerUserData, setRegisterUserData] = useState([...userData]);
  const handelDelate = (i) => {
    let list = [...registerUserData]; 
    list.splice(i, 2); 
    setRegisterUserData(list); 
  };
  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        {registerUserData.map((each, i) => ( 
          <Cards each={each} index={i} key={i} handelDelate={handelDelate} /> 
        ))}
      </Box>
      <Box>
        <AddUser />
      </Box>
    </Box>
  );
}

export default App;
