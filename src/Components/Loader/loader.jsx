import { useEffect, useState } from "react";
import { LoaderContainer, ProgressBar, Percentage } from "./loader.styled";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progress);
          console.log("Завантаження");
          return 100;
        }
        return prev + 1;
      });
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <LoaderContainer>
      <ProgressBar>
        <TailSpin
          visible={true}
          height="100"
          width="100"
          color="fffff"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{
            padding: "20px",
            background:
              "linear-gradient(346deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.1) 100%)",
            borderRadius: "50%",
          }}
          wrapperClass=""
        />
      </ProgressBar>
      <Percentage>{progress}%</Percentage>
    </LoaderContainer>
  );
};

export default Loader;
