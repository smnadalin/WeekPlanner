function Modal({
  modalData,
  handleModalCancel,
  handleModalSave,
  handleModalChange,
}) {
  const hours = [
    "5pm",
    "6pm",
    "7pm",
    "8pm",
    "9pm",
    "10pm",
    "11pm",
    "12am",
    "1am",
    "2am",
    "3am",
    "4am",
    "5am",
  ];
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const colours = [
    { colour: "Red", colourHex: "#7d294b" },
    { colour: "Green", colourHex: "#3d7880" },
    { colour: "Pink", colourHex: "#85547d" },
    { colour: "Purple", colourHex: "#59297d" },
    { colour: "Blue", colourHex: "#29417d" },
    { colour: "Yellow", colourHex: "#7d7d29" },
  ];

  return (
    <div className="Modal">
      <div className="ModalContent">
        <h1>{`Task for ${hours[modalData.hour]} on ${days[modalData.day]}`}</h1>
        <div className="InputContainer">
          <label htmlFor="TaskName">Task Name</label>
          <input id="TaskName" name="TaskName" onChange={handleModalChange} />
          <label htmlFor="TaskDescription">Task Description</label>
          <textarea
            id="TaskDescription"
            name="TaskDescription"
            onChange={handleModalChange}
          />
          <label>Colour</label>

          {colours.map((e) => {
            return (
              <div className="ColourContainer">
                <label className="LabelColour">
                  <input
                    name={e.colour}
                    className="InputColour"
                    type="radio"
                    value={e.colour}
                    checked={modalData.colour === e.colour}
                    onChange={handleModalChange}
                  />
                  {e.colour}
                </label>
                <span
                  className="ColourPreview"
                  style={{ backgroundColor: e.colourHex }}
                ></span>
              </div>
            );
          })}
        </div>
        <div className="ButtonContainer">
          <button className="CancelButton" onClick={handleModalCancel}>
            Cancel
          </button>
          <button className="SaveButton" onClick={handleModalSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
