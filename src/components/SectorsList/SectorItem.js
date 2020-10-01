import React, {useState} from 'react';
import {useScreenSize} from "../../utils/useScreenSize";

const SectorItem = ({sector, number}) => {
  const [isToolTipShowing, setToolTipShowing] = useState(false);
  const [isDirectionSwitched, setDirectionSwitched] = useState(false);
  const toggleToolTip = (newValue) => {
    setDirectionSwitched(number % 3 === 0)
    setToolTipShowing(newValue)
  }
  const winSize = useScreenSize();
  return (
    <div className={`sectors-list-item ${
         winSize && isToolTipShowing
           ? "sectors-list-item-mobile"
            : ""}`}
         onMouseEnter={() => toggleToolTip(true)}
         onMouseLeave={() => toggleToolTip(false)}
         style={{
         background: `url(${sector.imgUrl}) center no-repeat`,
         backgroundSize: 'cover'
    }}>
      <p className={`sectors-list-item-name ${
        winSize && isToolTipShowing
          ? "sectors-list-item-mobile-name"
          : ""}`}>
        {sector.name}
      </p>
      { isToolTipShowing && <div className={`sectors-list-item-tooltip ${
        isDirectionSwitched 
          ? "sectors-list-item-tooltip-switched" 
          : ""
      }`}>
        <div className="sectors-list-item-tooltip-close"
             onClick={() => toggleToolTip(false)}>
          <span className="sectors-list-item-tooltip-close-span"/>
          <span className="sectors-list-item-tooltip-close-span"/>
        </div>
        <p className="sectors-list-item-tooltip-description">{sector.description}</p>
      </div>
      }
    </div>
  );
};

export default SectorItem;