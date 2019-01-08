import React, { useState, useRef } from "react";
import T from "prop-types"

function FileInputReader({ dispatchData }) {
  const fileInput = useRef(null);
  const [fileContents, setFileContents] = useState(null);
  const reader = new FileReader();
  
  const onClickGo = () => {
    if (fileContents) {
      dispatchData(fileContents);
    }
  };

  const onFileLoaded = () => {
    try {
      setFileContents(reader.result);
    } catch (error) {
      console.error("There was a problem reading the file", error.message);
    }
  };

  const onSelectFile = () => {
    const file = fileInput.current.files[0];
    reader.addEventListener("load", onFileLoaded, false);
    if (file) {
      reader.readAsBinaryString(file)
    }
  };

  return (
    <>
      <input type="file" ref={fileInput} onChange={onSelectFile} />
        <button className="btn" onClick={onClickGo}>
          Go!
        </button>
    </>
  );
}

FileInputReader.propTypes = {
  dispatchData: T.func
}

FileInputReader.defaultProps = {
  dispatchData: fileData => console.log(fileData)
}



export default FileInputReader;
