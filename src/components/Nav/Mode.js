import { useState } from "react";
// Styled
import styled from "styled-components";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdjust } from "@fortawesome/free-solid-svg-icons";

const Mode = () => {
  const [darkMode, setDarkMode] = useState(false);

  if (darkMode === false) {
    document.documentElement.style.setProperty("--main-color", "#fdda3e");
    document.documentElement.style.setProperty("--secondary-color", "#fff");
    document.documentElement.style.setProperty("--joenapper", "#1f1f1f");
    document.documentElement.style.setProperty("--header-color", "#333333");
    document.documentElement.style.setProperty("--body-color", "#f4f4f4");
    document.documentElement.style.setProperty("--body-text-color", "#4d4d4d");
    document.documentElement.style.setProperty(
      "--custom-shadow",
      "1px 1px 5px 1px #ccc"
    );
  } else {
    document.documentElement.style.setProperty("--main-color", "#3a3a3a");
    document.documentElement.style.setProperty("--secondary-color", "#18191A");
    document.documentElement.style.setProperty("--joenapper", "#fff");
    document.documentElement.style.setProperty("--header-color", "#fff");
    document.documentElement.style.setProperty("--body-color", "#696969");
    document.documentElement.style.setProperty("--body-text-color", "#f4f4f4");
    document.documentElement.style.setProperty(
      "--custom-shadow",
      "1px 1px 5px 1px #000"
    );
  }
  return (
    <ModeContainer>
      <FontAwesomeIcon
        className="mode"
        icon={faAdjust}
        onClick={() => setDarkMode(!darkMode)}
      />
    </ModeContainer>
  );
};

const ModeContainer = styled.li`
  list-style: none;
  cursor: pointer;

  .mode {
    font-size: 2.5rem;
    transition: 0.2s ease-in-out;
  }
`;

export default Mode;
