import React, { useState } from 'react';
import styles from './ImageDispaly.module.scss'
import tent from '../../assets/tent.png'
import nails from '../../assets/nails.png'
import pillar from '../../assets/pillar.png'
import skeleton from '../../assets/skeleton.png'
import stick from '../../assets/stick.png'

export const ImageDisplay = () => {

    const [image, setImage] = useState(tent)

    return (
        <div className={styles.box}>
            <div className={styles.imagesListBox}>
                <img onClick={() => setImage(tent)} className={styles.listOfImage} src={tent} />
                <img onClick={() => setImage(nails)} className={styles.listOfImage} src={nails} />
                <img onClick={() => setImage(stick)} className={styles.listOfImage} src={stick} />
                <img onClick={() => setImage(pillar)} className={styles.listOfImage} src={pillar} />
                <img onClick={() => setImage(skeleton)} className={styles.listOfImage} src={skeleton} />
            </div>
            <div className={styles.imagesSlider}>
                <img className={styles.mainImage} src={image} />
            </div>
        </div>
    )
}
