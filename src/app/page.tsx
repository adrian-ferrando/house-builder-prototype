import Drawer from "@/components/Drawer";
import RightBar from "@/components/RightBar";
import BottomBar from "@/components/BottomBar";

export default function HomePage() {
  return (
    <main className="w-full h-full">
      <section className="w-full h-full flex flex-col">
        <div className="flex flex-grow">
          <div className="flex-grow cursor-grab">
            <Drawer />
          </div>

          <div className="w-1/4 h-full bg-gray-200">
            <RightBar />
          </div>
        </div>

        <div className="w-full h-24 bg-gray-300">
          <BottomBar />
        </div>
      </section>
    </main>
  );
}
