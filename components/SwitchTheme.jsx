"use client";

import { Switch } from "@nextui-org/react";
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

export function SwitchTheme() {
  
  const { theme, setTheme } = useTheme()

  return (
    <Switch
    size="sm"
    color="secondary"

    className=" shrink-0  mx-3  "
    onClick={()=> {
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }}
  
  />
  )
};