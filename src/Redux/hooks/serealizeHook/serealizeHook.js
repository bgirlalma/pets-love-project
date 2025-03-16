import createTransform from "redux-persist/es/createTransform";

const useSerealize = createTransform(
    (inboundState) => {
        console.log("Saving state:", inboundState);
        return {
          ...inboundState
          
        };
    },
    (outboundState) => {
        console.log("Loaded state:", outboundState); 
        return {
          outboundState
        },
        {writeList: ['userAuth']}
    }
)

export default useSerealize;