import { Slider } from "@components/Slider";
import { PrimaryText } from "@components/PrimaryText";
import { items, responsive } from "./config";
import { SliderSliceLayout } from "@components/SliderSliceLayout";

export const Articles = () => (
  <SliderSliceLayout
    id="articles"
    title={
      <>
        <PrimaryText>My</PrimaryText> Articles
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
      partialVisible
    />
  </SliderSliceLayout>
);
