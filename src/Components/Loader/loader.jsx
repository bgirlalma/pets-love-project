import { useEffect, useState } from "react";
import { LoaderContainer, ProgressBar, Percentage } from "./loader.styled";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [size, setSize] = useState({ width: 100, height: 100 });


  useEffect(() => {
    const updateSide = () => {
      if (window.innerWidth > 768) {
        setSize({ width: 200, height: 200 });
      } else if(window.innerWidth > 1280) {
setSize({ width: 300, height: 300})
      }
    }

    updateSide()
    window.addEventListener('resize', updateSide)

    return () => window.removeEventListener('resize', updateSide)
  }, [])

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
          height={size.height}
          width={size.width}
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
