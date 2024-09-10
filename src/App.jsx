import React from 'react'
import "./App.css"
import Images from './Components/Images'
import Usestate from './Components/Basicusestate/Inc-Dec'
import Multiplestate from './Components/Basicusestate/Multiplestate'
import Screensize from './Components/Eventlisteners/Screensize'
import Nested from './Components/Nestedcomponents/Nested'
import Adding from './Components/Nestedcomponents/Adding'
import Incomponents from './Components/Nestedcomponents/Incomponents'
import Prop2 from './Components/Props/Prop2'
import Propsdestr1 from './Components/Props/Propsdestructuring/Propsdestr1'
import Basicform from './Components/Formsubmits/Basicform'
import Basicusestate from './Components/Usestate/Basicusestate'
import Usestates from './Components/Usestate/Usestates'
import Propimage1 from './Components/Props/Propswithimages/Propimage1'
import Arrays from './Components/Arrays/Arrays'
import Ternarybasic from './Components/Ternaryoperator/Ternarybasic'
import Clickevent from './Components/Events/Mouseevents/Clickevent'
import Doubleclick from './Components/Events/Mouseevents/Doubleclick'
import Mouseover from './Components/Events/Mouseevents/Mouseover'
import Keydown from './Components/Events/Keyboardevents/Keydown'
import Submit from './Components/Events/Formevents/Submit'
import Formsubmit from './Components/Events/Formevents/Formsubmit'
import Focus from './Components/Events/Formevents/Focus'
import Blur from './Components/Events/Formevents/Blur'
import Submitform from './Components/Formsubmits/Submitform'
import Nestedarray from './Components/Arrays/Nestedarray'
import Tampletlitters from './Components/Tampletsliters/Tampletlitters'
import Fetchmethod from './Components/Methods/Fetchmethod'
import Dataposting from './Components/Methods/Dataposting'
import Mainpage from './Components/Crudoperations/Mainpage'
import { carData } from './data1'
import Sampleevent from './Components/Crudoperations/Sampleevent'




const App = () => {
  return (
    <div>
     { /*<Images/>
      <Usestate/>
      <Multiplestate/>
      <Nested/>
      <Incomponents/>
      <Prop2/>
      <Propsdestr1/>
      <Basicform/>
      <Basicusestate/>
      <Usestates/>
      <Propimage1/>
      <Arrays/>
      <Ternarybasic/>
      <Clickevent/><br></br>
      <Doubleclick/><br></br>
      <Mouseover/>
      <Keydown/>
      <Submit/>
      <Formsubmit/>
      <Focus/>
      <Blur/>
      <Screensize/>
      <Submitform/>
      <Arrays/>
      <Nestedarray/>
      <Tampletlitters/>
      <Fetchmethod/>
      <Dataposting/>
      
      
      <Sampleevent carData = {carData}/>*/}

      
      <Mainpage/>
      
  
      
      
    </div>
  )
}

export default App
