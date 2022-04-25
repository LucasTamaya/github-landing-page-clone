import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import "./ReadMore.scss";

function ReadMore({ img, title, subtitle }) {
  return (
    <div className="readMore" data-testid="readMore">
      <img className="readMore__img" src={img} alt="reade more img" />
      <h5 className="readMore__title">{title}</h5>
      <span className="readMore__subtitle">{subtitle}</span>
      <div className="readMore__line"></div>
      <button className="readMore__btn">
        Read More
        <ArrowRightAltIcon />
      </button>
    </div>
  );
}

export default ReadMore;
