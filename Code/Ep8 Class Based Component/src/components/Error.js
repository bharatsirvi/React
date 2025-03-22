import { useRouteError } from "react-router";
const Error = () => {
  const error = useRouteError();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <h1>{error.status + " OOPS SOMETHING WENT WRONG"}</h1>
    </div>
  );
};
export default Error;
