import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const DropdownMenu = ({ className, links, children }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <Wrapper
      className={className}
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
    >
      {children}
      {menuOpen ? <Menu links={links} /> : null}
    </Wrapper>
  );
};
export default DropdownMenu;

const Menu = ({ links }) => (
  <MenuHitBox>
    <MenuWrapper>
      {links.map((link) => (
        <MenuItem>
          <MenuLink to={link.to}>{link.label}</MenuLink>
        </MenuItem>
      ))}
    </MenuWrapper>
  </MenuHitBox>
);

const Wrapper = styled.div`
  position: relative;
  cursor: default;
  &::after{
    content: "";
    width: .4em;
    height: .4em;
    transform: rotate(45deg);
    margin-left: 8px;
    margin-top: 2px;
    vertical-align: top;
    border-right: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
    display: inline-block;
  }
`;

const MenuHitBox = styled.div`
  position: absolute;
  top: calc(100% - 1px);
  left: -35px;
  border: 10px solid transparent;
  border-left-width: 20px;
  border-bottom-width: 20px;
  border-right-width: 20px;
`;

const MenuWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  background: #fff;
  list-style: none;
  margin: 0px;
  padding: 0px;
  padding-top: 5px;
  box-shadow: 0px 10px 24px -4px rgba(0, 0, 0, 0.2),
    0px 3px 5px -3px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  border: 1px solid #eee;
`;

const MenuItem = styled.li`
  margin: 0px;
  padding: 10px;
  padding-bottom: 0px;
  white-space: nowrap;
  &:last-child {
    padding-bottom: 10px;
  }
`;

const MenuLink = styled(Link)`
  margin: 0px;
  text-decoration: none;
  padding: 5px;
  color: inherit;
  cursor: pointer;
`;
