import React from 'react'


import { createRoot } from 'react-dom/client'
import App from './App.jsx'


// this practice is not recommended,because it may voilate the convention of the library.
function MyApp(){
  return(
    /* react doesn't understand this html or javascript code, hence it is converted into 
     react understable format (this process(converting into tree) is known as parsing , it is done by compiler or transpiler) */
    <div>
      <h2>Hi! how are you?</h2>
    </div>
  )
}


// custom rendering
// const ReactElement = {
//   // here the syntax is not correct. therefore it won't work.
//   type: 'a', // type of element
//   props: {
//       href: "htts://google.com",
//       target:'_blank'
//   },
//   children: 'click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)



const anotherUser = "chintu"
// react render
const reactElement = React.createElement(
  'a', // tag is the first parameter
  {href:'https://google.com', target:'_blank'},
  'click me to visit google',// direct text
  anotherUser
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
    // <MyApp />
    // MyApp ()
    // <ReactElement/> // object are not executed in this manner
    // ReactElement
    // anotherElement
    // reactElement 

  
  // </StrictMode>,
)
