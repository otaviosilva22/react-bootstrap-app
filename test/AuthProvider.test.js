import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import AuthProvider from "../src/components/AuthProvider";

jest.mock("../src/components/Home", () => () => <div>Home Component</div>);
jest.mock("../src/components/Login", () => () => <div>Login Component</div>);
jest.mock("../src/components/Footer", () => () => <div>Footer Component</div>);

const mockStore = configureStore([]);

describe("AuthProvider Component", () => {
  it("deve renderizar o componente Home quando o usuário estiver logado", () => {
    const store = mockStore({
      user: {
        logged: true,
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <AuthProvider />
      </Provider>
    );

    expect(getByText("Home Component")).toBeInTheDocument();
  });

  it("deve renderizar componente de Login quando não logado", () => {
    const store = mockStore({
      user: {
        logged: false,
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <AuthProvider />
      </Provider>
    );

    expect(getByText("Login Component")).toBeInTheDocument();
    expect(getByText("Footer Component")).toBeInTheDocument();
  });
});
