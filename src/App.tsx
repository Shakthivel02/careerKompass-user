import { ReactElement, useEffect } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme, { colors } from "./const/theme";
import Header from "./components/Header";
import { Router } from "react-router-dom";
import styled from "styled-components";
import history from "./const/history";
import Routes from "./routes";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import BREAKPOINTS from "./const/breakpoint";
import useBreakpoint from "use-breakpoint";
import { updateIsMenuOpen } from "./redux/menu/actions";
import FooterComponent from "./components/Footer";
import "./App.css";

interface BodyProps {
  isShowOverlay?: boolean;
}

const Body = styled.div<BodyProps>`
  display: flex;
  min-height: calc(100vh - 40px);
`;

interface GlobalStylesProps {
  isMobileMenuOpen?: boolean;
}

export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  body {
    @import url('https://fonts.googleapis.com/css?family=Open+Sans');
    font-family: "Open Sans", sans-serif;
    overflow-x: hidden;
    overflow: ${({ isMobileMenuOpen }) =>
      isMobileMenuOpen ? "hidden" : "1px"}; 
  }
  #container {
    z-index: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? "-1" : "0")};
  }
  .react-datepicker-popper {
    z-index: 999;
    padding: 0 !important;
  }
  .input-group-text {
    background: none;
    border: none;
  }
  td {
    border-bottom: 1px solid ${colors.lightGrey};
    text-align: center;
    font-weight:500;
  }
  th {
    border: none;
    text-align: center;
  }
  .btn-link {
    color: ${colors.purple};
  }
  .btn-link:hover {
    color: ${colors.lightGrey};
  }
  .btn:focus {
    box-shadow: none;
  }
  .react-datepicker-wrapper {
    .form-control.is-valid {
        border-color: ${colors.purple};
    }
  }
`;

const App = (): ReactElement => {
  const { isLoggedIn, isMenuOpen } = useSelector(
    (state: RootState) => ({
      isLoggedIn: state.login.isLoggedIn,
      isMenuOpen: state.menu.isMenuOpen,
    }),
    shallowEqual
  );
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  const isMobileMenuOpen = isMenuOpen && breakpoint === "mobile";
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [breakpoint]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles isMobileMenuOpen={isMobileMenuOpen} />
      <Router history={history}>
        <Body
          isShowOverlay={isMobileMenuOpen}
          onClick={() => {
            setTimeout(() => {
              if (isMobileMenuOpen) {
                dispatch(updateIsMenuOpen(false));
              }
            }, 500);
          }}
        >
          <Routes />
        </Body>
      </Router>
    </ThemeProvider>
  );
};

export default App;
