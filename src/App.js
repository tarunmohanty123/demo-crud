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
  //store that userData array in a useState hook because as per our requirement we have to remove and add element into that array, As you know you can easily update new element by using useState hook.
  const handelDelate = (i) => {
    let list = [...registerUserData]; // copy that array
    list.splice(i, 2); //i is stands for index and 1 for how many element you want to remove from that index
    setRegisterUserData(list); // updated here that new array
  };
  return (
    <Box className={classes.root}>
      {/* Box is similar like div */}
      <Box className={classes.container}>
        {registerUserData.map((each, i) => ( //here i use the map method, it is just like forEach loop. here each stands for each element form that array and i for index.
          <Cards each={each} index={i} key={i} handelDelate={handelDelate} /> //As per our requirement we have to show each details on a card so i made a card component and pass each and i(index) as a props(what is props in react?), And pass handelDelate function for delete that element.
        ))}
      </Box>
      <Box>
        <AddUser />
        {/* Add user it's not a html tag it's our own component. If i want to say in my own language, component is just like our own html tag. Make your own html tag as per your requirement. */}
      </Box>
    </Box>
  );
}

export default App;
