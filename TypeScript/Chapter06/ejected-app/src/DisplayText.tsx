import React, { useState } from "react";

const DisplayText = () => {
  const [txt, setTxt] = useState("");
  const [msg, setMsg] = useState("");

  const onChangeTxt = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTxt(e.target.value);
  };

  const onClickShowMsg = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setMsg(`Welcome on the React Testing training, ${txt}!`);
  };

  return (
    <form>
      <div>
        <label>What is your name?</label>
      </div>
      <div>
        <input data-testid="user-input" value={txt} onChange={onChangeTxt} />
      </div>
      <div>
        <button data-testid="input-submit" onClick={onClickShowMsg}>Show the message</button>
      </div>
      <div>
      <label data-testid="final-msg">{msg}</label>
      </div>
    </form>
  );
}

export default DisplayText;
