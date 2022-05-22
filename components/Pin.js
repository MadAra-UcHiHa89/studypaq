import React from "react";

const styles = {
  pin: {
    margin: "15px 10px",
    padding: 0,
    borderRadius: "16px",
    backgroundColor: "red",
  },
  sm: {
    gridRowEnd: "span 26",
  },
  md: {
    gridRowEnd: "span 33",
  },
  lg: {
    gridRowEnd: "span 45",
  },
};
function Pin({ size, url }) {
  console.log("Inside Pin", url);
  return (
    <div
      className="transform  transition duration-500 hover:scale-110"
      style={{ ...styles.pin, ...styles[size], cursor: "pointer" }}
    >
      <img
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "16px",
          objectFit: "cover",
        }}
        src={url}
        alt=""
      />
    </div>
  );
}

export default Pin;
