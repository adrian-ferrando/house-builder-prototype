"use client";

import { Leva } from "leva";
import { useControlsContext } from "@/contexts/ControlsProvider";

export default function RightBar() {
  const { controls } = useControlsContext();

  console.log(controls);
  return (
    <div>
      pepoclown
      <Leva fill />
    </div>
  );
}
