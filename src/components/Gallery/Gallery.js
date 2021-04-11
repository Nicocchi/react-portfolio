import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

function Gallery(props) {
  if (!props.entries) {
    return <div></div>;
  }

  return (
    <div className="gallery-wrapper fade-in">
      {props.entries.map((entry) => (
        <div className="gallery-container" key={shortid.generate()}>
          <img
            width="100%"
            src={entry.fields.promoImage.fields.file.url}
            alt=""
          />
          <div className="gallery-content">
            <p>{entry.fields.title}</p>
          </div>
          <div className="gallery-hover">
            <p style={{ fontSize: "1.4vh" }}>{entry.fields.description}</p>
            <div>
              <span>
                {entry.fields.github ? (
                  <a
                    style={{ marginRight: "20px" }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={entry.fields.github}
                  >
                    Github
                  </a>
                ) : null}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={entry.fields.demoUrl}
                >
                  Site
                </a>
              </span>
              <span>
                {entry.fields.stack.map((value) => (
                  <p style={{ fontSize: "14px" }} key={shortid.generate()}>
                    {value}
                  </p>
                ))}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

Gallery.propTypes = {
  entries: PropTypes.array,
};

export default Gallery;
