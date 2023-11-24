import { useState } from "react";
import React from "react";
import "../styles/_actions.scss";

const Actions = ({ buttonStates, handleClick }) => {
  return (
    <>
      <div className="actionsContainer">
        <div className="actions">
          {Object.keys(buttonStates).map((buttonId) => (
            <React.Fragment key={buttonId}>
              <button
                type="button"
                className={`button ${buttonStates[buttonId] ? "" : "toShadow"}`}
                onClick={() => handleClick(buttonId)}
              >
                {buttonStates[buttonId] ? (
                  <img
                    className={`${buttonId} visible`}
                    src={`/w_${buttonId}.png`}
                    alt={buttonId}
                  />
                ) : (
                  <img
                    className={`${buttonId} hidden`}
                    src={`/c_${buttonId}.png`}
                    alt={buttonId}
                  />
                )}
              </button>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Actions;
