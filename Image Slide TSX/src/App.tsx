import { useState } from "react";
import Image1 from "./assets/couple1.jpg";
import Image2 from "./assets/couple2.jpg";
import Image3 from "./assets/couple3.jpg";
import Image4 from "./assets/couple4.jpg";
import Image5 from "./assets/couple5.jpg";
import ImageSlider from "./ImageSlider";

function App() {
  const Image: string[] = [Image1, Image2, Image3, Image4, Image5];
  const [imageIndex, setImageIndex] = useState<number>(0);

  return (
    <div>
      <ImageSlider
        Image={Image}
        currentIndex={imageIndex}
        setCurrentIndex={setImageIndex}
      />
    </div>
  );
}

export default App;
