// //Import
// import React from "react";
// import {Text, View, Image} from "react-native";

// // // Class Component
// // class App extends React.Component {
// //   render(){ //fungsi render adl fungsi yg dijalankan pertama kali
// //     return(
// //       // JSX = html dlm JS
// //       <Text>Hello People</Text>
// //     );
// //   }
// // }

// // function component
// const App = () => {
//   return (
//     <View>
//       <Text>Hello world!</Text>
//       <View style={{width: 100, height: 100, backgroundColor: 'yellow'}}></View>
//       <Image 
//         source={require('./image/hello.png')}
//         style={{width:200, height:200}} 
//       />
//     </View>
//   );
// };

// // Export
// export default App;


import React from 'react';
import SignIn from './src/Screen/SignIn';
// import {View, Text, Image, ScrollView, TextInput} from 'react-native';
// import CoreComponents from './src/CoreComponent';

const App = () => {
  // return <CoreComponents title="Hellowwwwww" />;
  return <SignIn/>
};

// const CoreComponents = () => {
//   return (
//     <ScrollView>
//       <Text>Some text</Text>
//       <View>
//         <Text>Some more text</Text>
//          <View style={{width: 300, height: 100, backgroundColor: 'yellow'}}></View>
//         <Image
//           source={{
//             uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
//           }}
//           style={{width: 200, height: 200}}
//         />
//         <View style={{width: 300, height: 100, backgroundColor: 'blue'}}></View>
//       </View>
//       <TextInput
//         style={{
//           height: 40,
//           borderColor: 'gray',
//           borderWidth: 1,
//         }}
//         defaultValue="Hello, Let's write some new!"
//       />
//     </ScrollView>
//   )
// }

//Export
export default App;