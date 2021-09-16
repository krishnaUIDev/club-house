import React from "react";
import LottieView from "lottie-react-native";

const Animate = ({ loop, speed, source }) => {
  return <LottieView source={source} loop={loop} autoPlay speed={speed} />;
};

export default Animate;

// export default class BasicExample extends React.Component {
//   componentDidMount() {
//     this.animation.play();
//   }

//   render() {
//     return (
//       <LottieView
//         ref={(animation) => {
//           this.animation = animation;
//         }}
//         source={require(`${this.props?.url}`)}
//       />
//     );
//   }
// }
