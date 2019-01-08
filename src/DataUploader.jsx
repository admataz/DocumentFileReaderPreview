import React, { useState, useRef } from "react";
import { toastr } from "react-redux-toastr";

function DataImporter({ importData = () => {} }) {
  const fileInput = useRef(null);
  const [uploadedJSON, setUploadedJSON] = useState(null);
  const reader = new FileReader();

  const onClickImport = () => {
    if (uploadedJSON) {
      importData(uploadedJSON);
    }
  };
  const onFileLoaded = () => {
    try {
      setUploadedJSON(JSON.parse(reader.result));
    } catch (error) {
      toastr.error("Not valid JSON", error.message);
    }
  };

  const onSelectFile = () => {
    const file = fileInput.current.files[0];
    reader.addEventListener("load", onFileLoaded, false);
    if (file) {
      console.log(reader.readAsBinaryString(file));
    }
  };

  return (
    <div className="items-list">
      <h2>Import Data from JSON</h2>
      <div className="row">
        <div className="col-md-12">
          <input type="file" ref={fileInput} onChange={onSelectFile} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <p>
            <button className="btn" onClick={onClickImport}>
              Go!
            </button>{" "}
          </p>
          <p>
            This will destroy all existing data in the database for matched
            schema in the import
          </p>
        </div>
      </div>
    </div>
  );
}

export default DataImporter;
