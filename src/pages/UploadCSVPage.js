import React, { useState } from 'react';
import API from '../utils/api';


const UploadCSVPage = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  // const history = useHistory();

  // Handle file change
  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle form submission
  const onSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setError('Please select a file first');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await API.post('/upload-tasks', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setSuccessMessage('File uploaded and tasks distributed successfully.');
      setError('');
      // Optionally navigate to another page after successful upload
      // history.push('/some-other-page');
    } catch (err) {
      setError('Error uploading the file. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload CSV File</h2>
      <form onSubmit={onSubmit}>
        <div>
          <input type="file" accept=".csv" onChange={onFileChange} />
        </div>
        {error && <p className="error">{error}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadCSVPage;
