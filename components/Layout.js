import { background, position } from "@chakra-ui/react";
import React from "react";
import Pin from "./Pin";

const sizeArray = ["sm", "md", "lg"];

const styles = {
  pin_container: {
    margin: 0,
    padding: 0,
    width: "100vw",
    // backgroundColor: "#f5f5f5",
    justifyContent: "space-evenly",
    position: "absolute",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 250px)",
    gridAutoRows: "10px",
    // backgroundColor: " #FFDEE9",
    // backgroundImage: "linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)",
  },
};
function Layout(props) {
  //   console.log("Inside Layout", props.post);
  return (
    <div style={styles.pin_container}>
      {props.post.map((item) => {
        return (
          <Pin url={item} size={sizeArray[Math.floor(Math.random() * 3)]} />
        );
      })}
    </div>
  );
}

export default Layout;
