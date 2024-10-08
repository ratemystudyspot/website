import mainImage from "../../../public/testing/main.png";
import side1 from "../../../public/testing/side1.png";
import side2 from "../../../public/testing/side2.png";
import Image from "../../components/study-spot-page/Image";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <h1>Study Spot</h1>
      <Image mainImage={mainImage} sideImages={[side1, side2]} />

      {/* Footer */}
    </div>
  );
}
