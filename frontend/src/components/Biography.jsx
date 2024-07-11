import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
      <div className='banner'>
        <img src={imageUrl} alt="aboutImg"/>
      </div>

      <div className="banner">
        <p>Biography</p>
        <h3>Who Are We</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minima laboriosam itaque vero dignissimos, culpa ut hic rerum explicabo, iusto sapiente provident facilis tenetur quod fugit sed vel repellat quidem fuga repellendus! Nihil nemo consectetur qui quo cupiditate molestiae repellendus. Nisi officiis aliquam ipsam ipsum eligendi alias commodi eveniet voluptatibus!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p>
          Lorem ipsum dolor sit amet.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur obcaecati inventore atque tenetur natus quibusdam mollitia, ex fugiat nobis! Nobis repellat vero doloribus alias nostrum rerum asperiores atque. Adipisci repudiandae quo labore iusto deserunt. Impedit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae soluta quas culpa?
        </p>
        <p>
          Lorem, ipsum dolor.
        </p>


      </div>
      
    </div>
  )
}

export default Biography
