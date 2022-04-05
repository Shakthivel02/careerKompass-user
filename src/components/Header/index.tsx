import { ReactElement } from "react";
import {
  DropdownToggle,
  HeaderWrapper,
  ProfileDropDown,
  ProfileWrapper,
} from "./subcomponents";
import DesktopMenu from "./DesktopMenu";
import { Dropdown } from "react-bootstrap";
import { colors } from "../../const/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { handleLogout } from "../../redux/login/api";
import { useHistory } from "react-router-dom";
import ROUTES from "../../const/routes";
import { updateIsLoggedIn } from "../../redux/login/action";

const Header = (): ReactElement => {
  const { email } = useSelector((state: RootState) => ({
    email: state.login.userInfo?.email,
    isLoggedIn: state.login.isLoggedIn,
  }));

  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <>
      <HeaderWrapper>
        <DesktopMenu />
        <ProfileWrapper>
          <ProfileDropDown>
            <DropdownToggle variant="success" id="profile-dropdown">
              <FontAwesomeIcon
                icon={["fas", "user-circle"]}
                size="2x"
                color={colors.heavyGray}
              />
            </DropdownToggle>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  dispatch(handleLogout());
                  dispatch(updateIsLoggedIn(false));
                  history.push(ROUTES.LOGIN);
                }}
              >
                {"Logout"}
              </Dropdown.Item>
              <Dropdown.Item>{`User: ${email}`}</Dropdown.Item>
            </Dropdown.Menu>
          </ProfileDropDown>
        </ProfileWrapper>
      </HeaderWrapper>
    </>
  );
};

export default Header;
