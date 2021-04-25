import React from "react";

function MainFooter() {
  let date = new Date();
  return (
    <div className="Main-footer d-flex justify-content-end">
      <footer className="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite> {date.toString()}
      </footer>
    </div>
  );
}

export default MainFooter;
