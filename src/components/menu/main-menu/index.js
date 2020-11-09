import React from "react";
import NavBar, { NavItem, NavLink } from "../../shared/navbar";
import { MainMenuWrap } from "./mainmenu.stc";
import { inferSlug } from "../../../utils/utilFunctions";

export const MainMenu = ({ menuData, ...props }) => {
  const menuarr = menuData;
  return (
    <MainMenuWrap {...props}>
      <NavBar>
        {menuarr.map((menu, i) => {
          return (
            <NavItem key={`mainmenu-${i}`}>
              <NavLink path={inferSlug(menu.node.path)}>
                {menu.node.title}
              </NavLink>
            </NavItem>
          );
        })}

        <NavItem key={`mainmenu-podcast`}>
          <NavLink path="/podcast">Podcast</NavLink>
        </NavItem>

        <NavItem key={`mainmenu-about`}>
          <NavLink path="/about">About</NavLink>
        </NavItem>

        <NavItem key={`mainmenu-contact`}>
          <NavLink path="https://forms.gle/cNYaLepbJHVLFMcLA" target="_blank">
            Contact
          </NavLink>
        </NavItem>
      </NavBar>
    </MainMenuWrap>
  );
};
