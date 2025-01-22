import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Login from "../src/components/Login"; // Ajuste o caminho conforme necessário
import { setUser, setLogged } from "../src/store/actions/userActions"; // Ajuste o caminho conforme necessário

const mockStore = configureStore([]);

describe("Login component", () => {
  it("deve renderizar corretamente o componente Login", () => {
    const store = mockStore({
      user: {
        user: "",
      },
    });

    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    expect(screen.getByText("ENTRAR")).toBeInTheDocument();
  });

  it("deve desabilitar o botão quando o input estiver vazio", () => {
    const store = mockStore({
      user: {
        user: "",
      },
    });

    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const button = screen.getByText("ENTRAR");
    expect(button).toBeDisabled();
  });

  it("deve disparar ação setLogged", () => {
    const dispatch = jest.fn();
    const store = mockStore({
      user: {
        user: "Nanitita",
        logged: false,
      },
    });

    store.dispatch = dispatch;

    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const button = screen.getByText("ENTRAR");

    expect(button).not.toBeDisabled();

    fireEvent.click(button);

    expect(store.dispatch).toHaveBeenCalledWith(setLogged());
  });

  it("deve disparar a ação setUser", () => {
    const dispatch = jest.fn();
    const store = mockStore({
      user: {
        user: "",
        logged: false,
      },
    });

    // Mock da dispatch
    store.dispatch = dispatch;

    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const input = screen.getByPlaceholderText("Nome");

    // Simulando a mudança de valor no input
    fireEvent.change(input, { target: { value: "Nanitita" } });

    expect(dispatch).toHaveBeenCalledWith(setUser("Nanitita"));
  });

  it("não deve habilitar o botão se o input for vazio", async () => {
    const store = mockStore({
      user: {
        user: "",
        logged: false,
      },
    });

    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const button = screen.getByText("ENTRAR");
    expect(button).toBeDisabled();
  });
});
