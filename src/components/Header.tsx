import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
} from '@nextui-org/react'
import { NavLink } from 'react-router-dom'
import Logo from './svg/Logo'
// import ThemeToggle from "./ThemeToggle";
import { appConfig } from '@/lib/constant'

export default function App() {
  return (
    <Navbar isBordered maxWidth="2xl">
      <NavbarBrand>
        <NavLink
          to="/"
          className="flex gap-2 self-center text-orange-600 font-semibold whitespace-nowrap"
        >
          <Logo />
          <p className="self-center text-2xl whitespace-nowrap">
            {appConfig.siteName}
          </p>
        </NavLink>
      </NavbarBrand>

      <NavbarContent as="div" justify="end">
        {/* <ThemeToggle /> */}

        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://image.jiafengfmc.cn/file/39b413a7c5baf7f843e38.png"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  )
}
