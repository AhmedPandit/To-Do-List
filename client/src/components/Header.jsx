import { useState, useEffect } from "react";
import "./Header.css";
const Header = () => {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState("To Do List");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 80);
    }
  }, [index]);

  return (
    <div data-testid="header-1">
      <header>
        <h1 data-testid="header-2">{text}</h1>
      </header>
    </div>
  );
};

export default Header;
