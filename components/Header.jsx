"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { ArrowDownIcon, LogoIcon, MoonIcon } from "./Icons";
import { SwitchTheme } from "./SwitchTheme";

const Header = ({type, types, setType}) => {

  return (
    <>
      <header className="flex w-full h-full items-center justify-between ">
        <LogoIcon/>
        <div className="flex  items-center">
          <Dropdown >
            <DropdownTrigger>
              <Button className="bg-transparent  border-r-1 border-white  rounded-none">
                <span className="text-right md:text-xl lg:text-2xl text-[14px] font-bold mr-[10px]" id="type">{type}</span>{" "}
               <ArrowDownIcon/>
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Dynamic Actions"
              items={types}>
              {(item) => (
                <DropdownItem onPress={(e)=>setType(e.target.outerText)} key={item.key}>{item.label}</DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>
          <SwitchTheme/>
          <MoonIcon/>
        </div>
      </header>
    </>
  );
};

export default Header;
