import { Slider } from "@components/Slider";
import { PrimaryText } from "@components/PrimaryText";
import { items, responsive } from "./config";
import { SliderSliceLayout } from "@components/SliderSliceLayout";

export const Projects = () => (
  <SliderSliceLayout
    id="projects"
    title={
      <>
        <PrimaryText>Recent</PrimaryText> Projects
      </>
    }
  >
    <Slider
      items={items}
      responsive={responsive}
      swipeable
      showDots
      keyBoardControl
      removeArrowOnDeviceType={["tablet", "mobile"]}
      draggable
      minimumTouchDrag={80}
      centerMode
    />
  </SliderSliceLayout>
);
