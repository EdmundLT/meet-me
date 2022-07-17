import { Circle } from "better-react-spinkit";
import Image from "next/image";
function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <Image
          src={require("../public/images/whatsapp.png")}
          alt="loading"
          height={200}
          width={200}
          style={{ marginBottom: 10 }}
        />
        <Circle color="#3CbC28" size={60} />
      </div>
    </center>
  );
}

export default Loading;
