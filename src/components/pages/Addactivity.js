// DynamicForm.js
import React, { useState } from 'react';

const Addactivity = () => {
  const [formData, setFormData] = useState({
    selectedOption: '',
    EmailId: '',
    ActivityDate: '',
    PlantationLoc: '',
    Evidence: '',
    StartLoc: '',
    EndLoc : '',
    ccawarded: '',
    distance: '',
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    setFormData({ ...formData, image });
  };

  const handleSelectChange = (e) => {
    const selectedOption = e.target.value;
    setFormData({ ...formData, selectedOption });
  };

  return (
    <div>
      <h1>Dynamic Form</h1>
      <label>
        Select an option:
        <select name="selectedOption" onChange={handleSelectChange} value={formData.selectedOption}>
          <option value="">Select</option>
          <option value="afforestation">Afforestation</option>
          <option value="carpooling">Carpooling</option>
          <option value="evTravel">EvTravel</option>
          <option value="walkCycle">WalkCycle</option>
        </select>
      </label>

      {formData.selectedOption === 'afforestation' && (
        <div>
          <label>
            Email Id:
            <input
              type="text"
              name="EmailId"
              value={formData.EmailId}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Activity Date:
            <input
              type="Date"
              name="ActivityDate"
              value={formData.ActivityDate}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Plantation Location:
            <input
              type="text"
              name="PlantationLoc"
              value={formData.PlantationLoc}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Upload Image:
            <input 
            type="file" 
            name="image" 
            accept="image/*" 
            onChange={handleImageChange} 
            />
          </label>
        </div>

      )}

      {formData.selectedOption === 'carpooling' && (
        <div>
          <label>
            Email Id:
            <input
              type="text"
              name="EmailId"
              value={formData.EmailId}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Activity Date:
            <input
              type="Date"
              name="ActivityDate"
              value={formData.ActivityDate}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Start Location:
            <input
              type="text"
              name="StartLoc"
              value={formData.StartLoc}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            End Location:
            <input
              type="text"
              name="EndLoc"
              value={formData.EndLoc}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Upload Image:
            <input 
            type="file" 
            name="image" 
            accept="image/*" 
            onChange={handleImageChange} 
            />
          </label>
        </div>
      )}

{formData.selectedOption === 'evTravel' && (
        <div>
          <label>
            Email Id:
            <input
              type="text"
              name="EmailId"
              value={formData.EmailId}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Activity Date:
            <input
              type="Date"
              name="ActivityDate"
              value={formData.ActivityDate}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Start Location:
            <input
              type="text"
              name="StartLoc"
              value={formData.StartLoc}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            End Location:
            <input
              type="text"
              name="EndLoc"
              value={formData.EndLoc}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Upload Image:
            <input 
            type="file" 
            name="image" 
            accept="image/*" 
            onChange={handleImageChange} 
            />
          </label>
        </div>
      )}

{formData.selectedOption === 'walkCycle' && (
        <div>
          <label>
            Email Id:
            <input
              type="text"
              name="EmailId"
              value={formData.EmailId}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Activity Date:
            <input
              type="Date"
              name="ActivityDate"
              value={formData.ActivityDate}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Distance:
            <input
              type="text"
              name="distance"
              value={formData.distance}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Upload Image:
            <input 
            type="file" 
            name="image" 
            accept="image/*" 
            onChange={handleImageChange} 
            />
          </label>
        </div>
      )}

      {/* Display form data */}
      <div>
        <h2>Form Data:</h2>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Addactivity;
