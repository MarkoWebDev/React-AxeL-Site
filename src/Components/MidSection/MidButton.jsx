import React from "react";

const MidButton = ({ buttons, filter, selected }) => {
  return (
    <div className="flex items-center pt-8">
      {buttons.map((button) => {
        return (
          <button
            className={
              selected === button.id ? "pushable mr-4" : "pushable mr-4"
            }
            key={button.id}
            onClick={() => filter(button.id)}
          >
            <span className={selected === button.id ? "front2" : "front"}>
              {button.name}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default MidButton;
