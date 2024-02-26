import { Slider } from "@components/Slider";
import { PrimaryText } from "@components/PrimaryText";
import { items, responsive } from "./config";
import { SliderSliceLayout } from "@components/SliderSliceLayout";

export const Clients = () => (
  <SliderSliceLayout
    title={
      <>
        <PrimaryText>Companies</PrimaryText> I've Worked with
      </>
    }
  >
    <Slider
      items={items}
      autoPlay
      autoPlaySpeed={1}
      transitionDuration={3000}
      customTransition="all 3s linear"
      rewind={true}
      responsive={responsive}
      arrows={false}
      swipeable={false}
      itemClass="testry"
    />
  </SliderSliceLayout>
);
