import React, { useState } from "react";
import { Header } from "./components/Header/Header";
import { ImageDisplay } from "./components/ImageDisplay/ImageDisplay";
import { ItemSpecs } from "./components/ItemSpecs/ItemSpecs";
import styles from "./style.module.scss";
import roundArrowUp from "./assets/roundArrowUp.png";
import plus from "./assets/plus.png";
import minus from "./assets/minus.png";
import { Button } from "./components/Button/Button";
import { Modal } from "@mui/material";

export const App = () => {
  const [counter, setcounter] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const minusCounter = () => {
    if (counter === 1) return;

    setcounter(counter - 1);
  };

  const plusCounter = () => {
    setcounter(counter + 1);
  };

  return (
    <div>
      <Header />
      <div className={styles.contentBox}>
        <div className={styles.leftContent}>
          <ImageDisplay />
        </div>
        <div className={styles.rightContent}>
          <ItemSpecs />
        </div>
      </div>

      <div className={styles.cartBox}>
        <div className={styles.priceCounterBoxMobile}>
          <img onClick={minusCounter} src={minus} />
          <p>{counter}</p>
          <img onClick={plusCounter} src={plus} />
        </div>
        <div className={styles.cartContainer}>
          <img onClick={() => setIsOpen(true)} src={roundArrowUp} />
          <div className={styles.priceBox}>
            <p>$2,509.00</p>
            <span>Free shipping</span>
          </div>
          <div className={styles.priceCounterBox}>
            <img onClick={minusCounter} src={minus} />
            <p>{counter}</p>
            <img onClick={plusCounter} src={plus} />
          </div>

          <Button text={"Add to cart"} />
        </div>
      </div>

      <Modal
        open={isOpen}
        onBackdropClick={() => setIsOpen(false)}
        onClose={() => setIsOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          onClick={() => setIsOpen(false)}
          style={{ height: window.innerHeight }}
          className={styles.sizeGuideModal}
        >
          <div className={styles.modalWhiteBox}>
            <div className={styles.modalWhiteContainer}>
              <div className={styles.itemListBox}>
                <p className={styles.modalWhiteBoxHeading}>Item</p>
                <p className={styles.listItem}>Size: 10’x10’</p>
                <p className={styles.listItem}>Half wall</p>
                <p className={styles.listItem}>UV Printing</p>
                <p className={styles.listItem}>UV Wall</p>
                <p className={styles.listItem}>Mesh Wall</p>
                <p className={styles.listItem}>Half wall</p>
                <p className={styles.listItem}>UV Printing</p>
                <p className={styles.listItem}>8 Steel</p>
                <p className={styles.listItem}>Wheeled cover</p>
              </div>

              <div className={styles.quantityListBox}>
                <p className={styles.modalWhiteBoxHeading}>Quantity</p>
                <p className={styles.listItem}>1</p>
                <p className={styles.listItem}>4</p>
                <p className={styles.listItem}>2</p>
                <p className={styles.listItem}>5</p>
                <p className={styles.listItem}>1</p>
                <p className={styles.listItem}>2</p>
                <p className={styles.listItem}>5</p>
                <p className={styles.listItem}>9</p>
                <p className={styles.listItem}>1</p>
              </div>

              <div className={styles.priceListBox}>
                <p className={styles.modalWhiteBoxHeading}>Price</p>
                <div className={styles.alternativePrice}>
                  <p className={`${styles.listItem} ${styles.red}`}>$380</p>
                  <p className={`${styles.listItem} ${styles.strike}`}>$450</p>
                </div>
                <p className={styles.listItem}>$150</p>
                <p className={styles.listItem}>$20</p>
                <p className={styles.listItem}>$30</p>
                <p className={styles.listItem}>$100</p>
                <div className={styles.alternativePrice}>
                  <p className={`${styles.listItem} ${styles.red}`}>Free</p>
                  <p className={`${styles.listItem} ${styles.strike}`}>$100</p>
                </div>
                <p className={styles.listItem}>$60</p>
                <p className={styles.listItem}>$320</p>
                <div className={styles.alternativePrice}>
                  <p className={`${styles.listItem} ${styles.red}`}>Free</p>
                  <p className={`${styles.listItem} ${styles.strike}`}>$150</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
