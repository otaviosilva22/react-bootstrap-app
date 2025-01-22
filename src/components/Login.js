import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setLogged } from "../store/actions/userActions";

const Login = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    console.log("Click");
    if (user === "Nanitita") dispatch(setLogged());
  };

  const handleInputChange = (event) => {
    dispatch(setUser(event.target.value));
  };

  return (
    <section className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-10 col-md-3">
          <div id="form">
            <input
              type="text"
              className="form-control"
              placeholder="Nome"
              value={user}
              onChange={handleInputChange}
            ></input>
            <button
              type="button"
              onClick={handleButtonClick}
              className="btn btn-outline-primary form_btn"
              disabled={!user}
            >
              ENTRAR
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
