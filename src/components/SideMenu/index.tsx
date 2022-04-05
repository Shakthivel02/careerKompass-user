import { ReactElement, useState } from "react";
import menuItems from "../../const/menu";
import {
  MenuContainer,
  ListItem,
  Anchor,
  MenuWrapper,
  FontIcon,
  ChevronIcon,
  Body,
  ListItemChild,
  AnchorChild,
} from "./subcomponents";
import { Menu } from "../../container/SideNavigation/typings";
import { useDispatch } from "react-redux";
import { updateHasSubMenu } from "../../redux/menu/actions";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface SideMenuProps {
  menus?: Array<Menu>;
}

const SideMenu = ({
  menus = menuItems.Sidemenu,
}: SideMenuProps): ReactElement => {
  const [selectedMenu, setSelectedMenu] = useState(-1);
  const dispatch = useDispatch();

  return (
    <MenuContainer>
      {menus.map((menu, index) => {
        const { childs = [] } = menu;
        const isSelected = selectedMenu === index;

        return (
          <>
            <ListItem
              key={`menu-${index}`}
              $isSelected={isSelected}
              onClick={() => {
                const hasChilds = !!childs?.length;
                setSelectedMenu(selectedMenu >= 0 ? -1 : index);
                if (hasChilds) {
                  dispatch(updateHasSubMenu(true));
                  setTimeout(() => {
                    dispatch(updateHasSubMenu(false));
                  }, 1000);
                }
              }}
            >
              <MenuWrapper>
                {menu?.childs && menu.childs.length ? (
                  <>
                    <Body $isSelected={isSelected}>
                      <FontIcon icon={menu?.icon} size="sm" />
                      {menu?.label}
                    </Body>
                    <ChevronIcon
                      icon={[
                        "fas",
                        selectedMenu === index
                          ? "chevron-down"
                          : "chevron-right",
                      ]}
                      size="sm"
                    />
                  </>
                ) : (
                  <>
                    <Anchor to={menu?.to} $isSelected={isSelected}>
                      <FontIcon icon={menu?.icon} size="sm" />
                      {menu?.label}
                    </Anchor>
                  </>
                )}
              </MenuWrapper>
            </ListItem>
            {selectedMenu >= 0 && selectedMenu === index && (
              <MenuContainer isChild key={`subMenu-${index}`}>
                {childs.map((child, index) => (
                  <ListItemChild key={`child-${index}`}>
                    <FontIcon icon={child?.icon as IconProp} size="sm" />
                    <AnchorChild to={child?.to}>{child?.label}</AnchorChild>
                  </ListItemChild>
                ))}
              </MenuContainer>
            )}
          </>
        );
      })}
    </MenuContainer>
  );
};

export default SideMenu;
