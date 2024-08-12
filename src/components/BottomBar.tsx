import { Button } from "./Button";
import { BottombarIcons } from "./icons/bottombar";

export default function BottomBar() {
  return (
    <div className="flex items-center justify-center w-full h-full mx-auto gap-x-[2px]">
      <Button>
        <span>Doors</span>
        <BottombarIcons.Door className="h-12 w-12" />
      </Button>

      <Button>
        <span>Windows</span>
        <BottombarIcons.Window className="h-12 w-12" />
      </Button>

      <Button>
        <span>Autorotate</span>
        <BottombarIcons.Autoloop className="h-12 w-12" />
      </Button>

      <Button>
        <span>Walls</span>
        <BottombarIcons.Wall className="h-12 w-12" />
      </Button>

      <Button>
        <span>Roof</span>
        <BottombarIcons.Roof className="h-12 w-12" />
      </Button>
    </div>
  );
}
