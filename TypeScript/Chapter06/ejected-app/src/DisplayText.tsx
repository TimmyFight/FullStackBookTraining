import React, { useState, FC } from "react";

interface DisplayTextProps {
  getUserFullName: (username: string) => Promise<string>;
}

const DisplayText: FC<DisplayTextProps> = ({ getUserFullName }) => {
  const [txt, setTxt] = useState("");
  const [msg, setMsg] = useState("");

  const onChangeTxt = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTxt(e.target.value);
  };

  const onClickShowMsg = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setMsg(`Welcome on the React Testing training, ${await getUserFullName(txt)}!`);
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
      <div>
        Elemnt for testing purposes only
      </div>
    </form>
  );
}

export default DisplayText;
