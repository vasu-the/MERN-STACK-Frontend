import React, { useState } from 'react';
import axios from 'axios';

function UploadCSV() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please select a file');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('/api/upload-csv', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      alert('CSV uploaded and tasks distributed');
    } catch (err) {
      setError('Error uploading CSV');
    }
  };

  return (
    <div>
      <h2>Upload CSV</h2>
      <form onSubmit={handleFileUpload}>
        <input type="file" accept=".csv, .xlsx, .xls" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default UploadCSV;
