import React from 'react'
import Propimage2 from './Propimage2'
import image from '../../../Images/1.jpg'

import { NATURE_IMAGES } from './data'

const Propimage1 = () => {
  return (
<div>
      <main>
        <section id="nature-concepts">
          <h2>NATURE IMAGES</h2>
          <ul>
          {NATURE_IMAGES.map((natureitems)=><Propimage2 {...natureitems}/>)}

        {/*<Propimage2 title={NATURE_IMAGES[0].title} image={NATURE_IMAGES[0].image} 
            description={NATURE_IMAGES[0].description} />
            <Propimage2 {...NATURE_IMAGES[1]} />
            <Propimage2 title="Nature" image={image} description="Welcome to the world"  />
            <Propimage2 title="Nature" image={image} description="Welcome to the world"  />*/}
            
          </ul>
        </section>
      </main>
    </div>
  )
}

export default Propimage1
