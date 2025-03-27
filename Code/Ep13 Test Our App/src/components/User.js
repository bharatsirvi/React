import { useEffect, useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  useEffect(()=>{

    ////////

    return ()=>{
    // unmounting logic
    }
  })
  return (
    <div className="user-card">
      <h2>{props.name}</h2>
      <p> Location : Pali</p>
      <p>Contact : bharat@gmail.com</p>
      <h2>{"Count ->> " + count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
};

export default User;
