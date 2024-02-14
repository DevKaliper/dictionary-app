"use client";

import { Switch } from "@nextui-org/react";
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

export function SwitchTheme() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <Switch
    size="sm"
    color="primary"

    className=" shrink-0  mx-3  "
    checked={setTheme("light")}
  
  />
  )
};