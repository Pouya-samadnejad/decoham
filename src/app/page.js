import Description from "@/components/Description";
import ImageSlider from "@/components/ImageSlider";
import Products from "@/components/Products";
import Title from "@/components/Title";

export default function Home() {
  return (
    <div>
      <ImageSlider />
      <Title>محصولات</Title>
      <Products />
      <Title>درباره ما</Title>
      <Description></Description>
    </div>
  );
}
