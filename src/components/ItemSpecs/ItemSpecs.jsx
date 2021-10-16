import { Modal } from "@mui/material";
import React from "react";
import { useState } from "react";
import styles from "./ItemSpecs.module.scss";
import tent from "../../assets/whiteTent.png";
import check from "../../assets/check.png";
import nullImage from "../../assets/null.png";
import arrowDown from "../../assets/arrowDown.png";
import colorFulPrintButton from "../../assets/colorFulPrintButton.png";

export const ItemSpecs = () => {
  const [state, setState] = useState("Basic");
  const [size, setSize] = useState("");
  const [frame, setFrame] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [frameModal, setFrameModal] = useState(false);
  const [color, setColor] = useState("");

  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <p className={styles.heading}>Canopy Tent</p>

        <div className={styles.specBox}>
          <p>Spec</p>
        </div>

        <div className={styles.wallTypeBox}>
          <div>
            <p
              onClick={() => setState("Basic")}
              className={state === "Basic" && styles.selected}
            >
              Basic
            </p>
            {state === "Basic" && (
              <center>
                <div className={styles.underline} />
              </center>
            )}
          </div>
          <div>
            <p
              onClick={() => setState("+Wall")}
              className={state === "+Wall" && styles.selected}
            >
              +Wall
            </p>
            {state === "+Wall" && (
              <center>
                <div className={styles.underline} />
              </center>
            )}
          </div>
          <div>
            <p
              onClick={() => setState("+Accessory")}
              className={state === "+Accessory" && styles.selected}
            >
              +Accessory
            </p>
            {state === "+Accessory" && (
              <center>
                <div className={styles.underline} />
              </center>
            )}
          </div>
        </div>

        <p className={styles.sizeHeading}>Size</p>

        <div className={styles.sizeListBox}>
          <div
            onClick={() => setSize("10’ x 10’")}
            className={`${styles.sizeRoundBox} ${
              size === "10’ x 10’" && styles.sizeRoundBoxSelected
            }`}
          >
            <p>10’ x 10’</p>
          </div>
          <div
            onClick={() => setSize("13’ x 13’")}
            className={`${styles.sizeRoundBox} ${
              size === "13’ x 13’" && styles.sizeRoundBoxSelected
            }`}
          >
            <p>13’ x 13’</p>
          </div>
          <div
            onClick={() => setSize("16’ x 16’")}
            className={`${styles.sizeRoundBox} ${
              size === "16’ x 16’" && styles.sizeRoundBoxSelected
            }`}
          >
            <p>16’ x 16’</p>
          </div>
          <div
            onClick={() => setSize("10’ x 15’")}
            className={`${styles.sizeRoundBox} ${
              size === "10’ x 15’" && styles.sizeRoundBoxSelected
            }`}
          >
            <p>10’ x 15’</p>
          </div>
          <div
            onClick={() => setSize("13’ x 20’")}
            className={`${styles.sizeRoundBox} ${
              size === "13’ x 20’" && styles.sizeRoundBoxSelected
            }`}
          >
            <p>13’ x 20’</p>
          </div>
          <div
            onClick={() => setSize("20’ x 20’")}
            className={`${styles.sizeRoundBox} ${
              size === "20’ x 20’" && styles.sizeRoundBoxSelected
            }`}
          >
            <p>20’ x 20’</p>
          </div>
          <div
            onClick={() => setSize("10’ x 20’")}
            className={`${styles.sizeRoundBox} ${
              size === "10’ x 20’" && styles.sizeRoundBoxSelected
            }`}
          >
            <p>10’ x 20’</p>
          </div>
          <div
            onClick={() => setSize("13’ x 26’")}
            className={`${styles.sizeRoundBox} ${
              size === "13’ x 26’" && styles.sizeRoundBoxSelected
            }`}
          >
            <p>13’ x 26’</p>
          </div>
        </div>

        <div onClick={() => setIsOpen(true)} className={styles.specBox}>
          <p>size guide</p>
        </div>

        <div className={styles.frameBox}>
          <p className={styles.sizeHeading}>Frame</p>

          <div
            onClick={() => setFrame("Y5 Economic steel")}
            className={`${styles.frameRoundBox} ${
              frame === "Y5 Economic steel" && styles.sizeRoundBoxSelected
            }`}
          >
            <p>Y5 Economic steel</p>
          </div>
          <div
            onClick={() => setFrame("Y6 Commercial Aluminum")}
            className={`${styles.frameRoundBox} ${
              frame === "Y6 Commercial Aluminum" && styles.sizeRoundBoxSelected
            }`}
          >
            <p>Y6 Commercial Aluminum</p>
          </div>
          <div
            onClick={() => setFrame("Y7 Heavy duty aluminum")}
            className={`${styles.frameRoundBox} ${
              frame === "Y7 Heavy duty aluminum" && styles.sizeRoundBoxSelected
            }`}
          >
            <p>Y7 Heavy duty aluminum</p>
          </div>

          <div onClick={() => setFrameModal(true)} className={styles.specBox}>
            <p>Compare Frames</p>
          </div>
        </div>

        <div className={styles.colorBox}>
          <img src={arrowDown} />
          <p className={styles.sizeHeading}>color</p>

          <div className={styles.colorListBox}>
            <div
              onClick={() => setColor("black")}
              style={{ background: "black" }}
              className={`${styles.colorRoundPallete} ${
                color === "black" && styles.colorRoundPalleteSelected
              }`}
            />

            <div
              onClick={() => setColor("white")}
              style={{ background: "white" }}
              className={`${styles.colorRoundPallete} ${
                color === "white" && styles.colorRoundPalleteSelected
              }`}
            />

            <div
              onClick={() => setColor("#F4C84E")}
              style={{ background: "#F4C84E" }}
              className={`${styles.colorRoundPallete} ${
                color === "#F4C84E" && styles.colorRoundPalleteSelected
              }`}
            />
            <div
              onClick={() => setColor("#275D3D")}
              style={{ background: "#275D3D" }}
              className={`${styles.colorRoundPallete} ${
                color === "#275D3D" && styles.colorRoundPalleteSelected
              }`}
            />
            <div
              onClick={() => setColor("#991F34")}
              style={{ background: "#991F34" }}
              className={`${styles.colorRoundPallete} ${
                color === "#991F34" && styles.colorRoundPalleteSelected
              }`}
            />
          </div>

          <div className={styles.noteText}>
            <p>You can also print any color, any deisgns</p>
            <p>
              through our <span>custom printing</span> service
            </p>
          </div>

          <img className={styles.customPrintButton} src={colorFulPrintButton} />
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
          <div className={styles.sizeGuideBox}>
            <p className={styles.sizeGuideHeading}>Size Guide</p>

            <div className={styles.mainSizeGuideContent}>
              <div className={styles.sizeGuideContentText}>
                <p className={styles.sizeGuideContentTextHeading}>
                  Y5 Economic steel
                </p>
                <p className={styles.sizeGuideContentTextPara}>
                  Clearance Height 6’10’’
                  <br /> Overall Height 10’15’’
                </p>
                <br />
                <br />
                <p className={styles.sizeGuideContentTextHeading}>
                  Y6 Commercial Aluminum
                </p>
                <p className={styles.sizeGuideContentTextPara}>
                  Clearance Height 6’8’’
                  <br />
                  Overall Height 10’10’’
                </p>
                <br />
                <br />
                <p className={styles.sizeGuideContentTextHeading}>
                  Y7 Heavy duty aluminum
                </p>
                <p className={styles.sizeGuideContentTextPara}>
                  Clearance Height 6’8’’
                  <br />
                  Overall Height 10’10’’
                </p>
              </div>

              <div className={styles.sizeGuideImageBox}>
                <div className={styles.tentBox}>
                  <img className={styles.tentImage} src={tent} />
                  <p className={styles.tentSizeText}>10’ x 10’</p>

                  <img className={styles.availImage} src={check} />
                  <img className={styles.availImage} src={nullImage} />
                  <img className={styles.availImage} src={check} />
                </div>
                <div className={styles.tentBox}>
                  <img className={styles.tentImage} src={tent} />
                  <p className={styles.tentSizeText}>10’ x 10’</p>

                  <img className={styles.availImage} src={nullImage} />
                  <img className={styles.availImage} src={check} />
                  <img className={styles.availImage} src={check} />
                </div>
                <div className={styles.tentBox}>
                  <img className={styles.tentImage} src={tent} />
                  <p className={styles.tentSizeText}>10’ x 10’</p>

                  <img className={styles.availImage} src={check} />
                  <img className={styles.availImage} src={nullImage} />
                  <img className={styles.availImage} src={check} />
                </div>
                <div className={styles.tentBox}>
                  <img className={styles.tentImage} src={tent} />
                  <p className={styles.tentSizeText}>10’ x 10’</p>

                  <img className={styles.availImage} src={check} />
                  <img className={styles.availImage} src={check} />
                  <img className={styles.availImage} src={check} />
                </div>
                <div className={styles.tentBox}>
                  <img className={styles.tentImage} src={tent} />
                  <p className={styles.tentSizeText}>10’ x 10’</p>

                  <img className={styles.availImage} src={nullImage} />
                  <img className={styles.availImage} src={check} />
                  <img className={styles.availImage} src={check} />
                </div>
                <div className={styles.tentBox}>
                  <img className={styles.tentImage} src={tent} />
                  <p className={styles.tentSizeText}>10’ x 10’</p>

                  <img className={styles.availImage} src={check} />
                  <img className={styles.availImage} src={check} />
                  <img className={styles.availImage} src={nullImage} />
                </div>
                <div className={styles.tentBox}>
                  <img className={styles.tentImage} src={tent} />
                  <p className={styles.tentSizeText}>10’ x 10’</p>

                  <img className={styles.availImage} src={check} />
                  <img className={styles.availImage} src={check} />
                  <img className={styles.availImage} src={check} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        open={frameModal}
        onBackdropClick={() => setFrameModal(false)}
        onClose={() => setFrameModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          onClick={() => setFrameModal(false)}
          style={{ height: window.innerHeight }}
          className={styles.sizeGuideModal}
        >
          <div className={styles.frameGuideBox}>
            <div className={styles.frameGuideContentBox}>
              <div className={styles.frameGuideHeadingBox}>
                <p className={styles.sizeHeading}>Y5 Economic steel</p>
                <p className={styles.learnMore}>Learn more</p>
              </div>

              <div className={styles.frameGuideListItemBox}>
                <p className={styles.sizeGuideContentTextHeading}>Steel</p>
                <p className={styles.sizeGuideContentTextPara}>Frame</p>
              </div>
              <div className={styles.frameGuideListItemBox}>
                <p className={styles.sizeGuideContentTextHeading}>0.05’’</p>
                <p className={styles.sizeGuideContentTextPara}>
                  Pole thickness
                </p>
              </div>
              <div className={styles.frameGuideListItemBox}>
                <p className={styles.sizeGuideContentTextHeading}>45mm</p>
                <p className={styles.sizeGuideContentTextPara}>Pole diameter</p>
              </div>
              <div className={styles.frameGuideListItemBox}>
                <p className={styles.sizeGuideContentTextHeading}>3</p>
                <p className={styles.sizeGuideContentTextPara}>
                  Size available
                </p>
              </div>
              <div className={styles.frameGuideListItemBox}>
                <p className={styles.sizeGuideContentTextHeading}>1 year</p>
                <p className={styles.sizeGuideContentTextPara}>
                  Frame warranty
                </p>
              </div>
            </div>
            <div className={styles.frameGuideContentBox}>
              <div className={styles.frameGuideHeadingBox}>
                <p className={styles.sizeHeading}>Y6 Commercial Aluminum</p>
                <p className={styles.learnMore}>Learn more</p>
              </div>

              <div className={styles.frameGuideListItemBox}>
                <p className={styles.sizeGuideContentTextHeading}>Aluminum</p>
                <p className={styles.sizeGuideContentTextPara}>Frame</p>
              </div>
              <div className={styles.frameGuideListItemBox}>
                <p className={styles.sizeGuideContentTextHeading}>0.06’’</p>
                <p className={styles.sizeGuideContentTextPara}>
                  Pole thickness
                </p>
              </div>
              <div className={styles.frameGuideListItemBox}>
                <p className={styles.sizeGuideContentTextHeading}>45mm</p>
                <p className={styles.sizeGuideContentTextPara}>Pole diameter</p>
              </div>
              <div className={styles.frameGuideListItemBox}>
                <p className={styles.sizeGuideContentTextHeading}>3</p>
                <p className={styles.sizeGuideContentTextPara}>
                  Size available
                </p>
              </div>
              <div className={styles.frameGuideListItemBox}>
                <p className={styles.sizeGuideContentTextHeading}>5 year</p>
                <p className={styles.sizeGuideContentTextPara}>
                  Frame warranty
                </p>
              </div>
            </div>
            <div className={styles.frameGuideContentBox}>
              <div className={styles.frameGuideHeadingBox}>
                <p className={styles.sizeHeading}>Y7 Heavy duty aluminum</p>
                <p className={styles.learnMore}>Learn more</p>
              </div>

              <div className={styles.frameGuideListItemBox}>
                <p className={styles.sizeGuideContentTextHeading}>Steel</p>
                <p className={styles.sizeGuideContentTextPara}>Frame</p>
              </div>
              <div className={styles.frameGuideListItemBox}>
                <p className={styles.sizeGuideContentTextHeading}>0.07’’</p>
                <p className={styles.sizeGuideContentTextPara}>
                  Pole thickness
                </p>
              </div>
              <div className={styles.frameGuideListItemBox}>
                <p className={styles.sizeGuideContentTextHeading}>57mm</p>
                <p className={styles.sizeGuideContentTextPara}>Pole diameter</p>
              </div>
              <div className={styles.frameGuideListItemBox}>
                <p className={styles.sizeGuideContentTextHeading}>9</p>
                <p className={styles.sizeGuideContentTextPara}>
                  Size available
                </p>
              </div>
              <div className={styles.frameGuideListItemBox}>
                <p className={styles.sizeGuideContentTextHeading}>10 year</p>
                <p className={styles.sizeGuideContentTextPara}>
                  Frame warranty
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
