import { useEffect } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

function First() {
  useEffect(() => {
    fetch("http://127.0.0.1:5000/auth/login", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
}

function Second() {
  useEffect(() => {
    fetch("http://127.0.0.1:5000/am-i-approved", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <></>;
}

export default function App() {
  return (
    <BrowserRouter>
      <NavLink to="/first">First</NavLink>
      <NavLink to="/second">Second</NavLink>
      <Switch>
        <Route path="/first" component={First} />
        <Route path="/second" component={Second} />
      </Switch>
    </BrowserRouter>
  );
}
