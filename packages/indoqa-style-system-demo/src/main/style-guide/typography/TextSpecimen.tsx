import * as React from 'react'

export const headerText = 'The spectacle before us was indeed sublime'

export const longText = `
  Apparently we had reached a great height in the atmosphere, for the sky was
  a dead black, and the stars had ceased to twinkle. By the same illusion which
  lifts the horizon of the sea to the level of the spectator on a hillside, the
  sable cloud beneath was dished out, and the car seemed to float in the middle
  of an immense dark sphere, whose upper half was strewn with silver.
  Looking down into the dark gulf below, I could see a ruddy light streaming
  through a rift in the clouds.
`

export const shortText = 'Vestibulum id ligula porta felis euismod semper eget lacinia odio sem.'

export const characters = (
  <React.Fragment>
    A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Ä Ö Ü À Â È É Ê Ë Î Ï Ô Œ Ù Û Ÿ&nbsp;
    a b c d e f g h i j k l m n o p q r s t u v w x y z ä ö ü ß à ç é è ê ë î ï ô œ ù û ÿ&nbsp;
    0 1 2 3 4 5 6 7 8 9&nbsp;
    ! " § % & / ( ) = ? + * # ' - _ – . : , ; € $ ¥ ¢ @ | {'{'} {'}'} ' » « „ “ {'<'} {'>'} ® © ×
  </React.Fragment>
)

export const longTextInlineStyle = (
  <React.Fragment>
    <p>
      Apparently we <b>had reached</b> a great height in the atmosphere, for the sky was&nbsp;
      a dead black, and the stars had ceased to twinkle. By the same illusion which&nbsp;
      lifts the <a href="https://www.google.com">horizon of the sea</a> to the level of the&nbsp;
      spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to&nbsp;
      float in the middle of an
    </p>
    <ul>
      <li>immense dark sphere,</li>
      <ul>
        <li>whose upper half</li>
        <li>was strewn with silver</li>
      </ul>
      <li>Looking down into the dark gulf</li>
    </ul>
    <p>
      below, I could see a ruddy<sup>1</sup> light <em>streaming through</em> a rift in the clouds.&nbsp;
      By the same illusion which lifts the horizon<sup>2</sup> of the <i>sea to the level of the spectator</i>&nbsp;
      on a hillside, the sable cloud beneath was dished<sub>abc</sub> out, and the car seemed to float in&nbsp;
      the middle of an
    </p>
    <ol>
      <li>immense dark sphere,</li>
      <li>whose upper half</li>
    </ol>
    <p>
      was strewn with silver.
    </p>
    <p>
      Apparently we had reached a great height in the atmosphere, for the sky was&nbsp;
      a dead black, and the stars had ceased to twinkle.
    </p>
    <dt>Description lists</dt>
    <dd>A description list is perfect for defining terms.</dd>
    <dt>Euismod</dt>
    <dd>Donec id elit non mi porta gravida at eget <mark>metus</mark>.</dd>
  </React.Fragment>
)
