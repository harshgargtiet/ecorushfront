//DynamicForm.js
import React, { useState } from 'react';
import '../../App.css'
import axios from 'axios';

const Addactivity = () => {
  const [formData, setFormData] = useState({
    selectedOption: '',
    EmailId: '',
    ActivityDate: '',
    PlantationLoc: '',
    Evidence: '',
    StartLoc: '',
    EndLoc: '',
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

  const afforestationUrl = `http://localhost:5282/afforestation/addAfforestation`;

  const submitFormData = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(afforestationUrl, formData); // Pass formData to the POST request
      if (response.status === 200) {
        alert("POSTED");
      } else {
        // Handle other status codes if needed
        console.error('Upload failed:', response.status);
      }

      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1 className='Margin1'>Add an Activity</h1>
      <label className='Margin'>
        Select activity category: <t />
        <select name="selectedOption" onChange={handleSelectChange} value={formData.selectedOption} className='FormText1'>
          <option value="">Select</option>
          <option value="afforestation">Afforestation</option>
          <option value="carpooling">Carpooling</option>
          <option value="evTravel">EvTravel</option>
          <option value="walkCycle">WalkCycle</option>
        </select>
      </label>


      {formData.selectedOption === 'afforestation' && (
        <div>
          <br />
          <label className='Margin'>
            Email Id:<t />
            <input
              type="text"
              name="EmailId"
              value={formData.EmailId}
              onChange={handleInputChange}
              className='FormText' />
          </label>
          <br />
          <label className='Margin'>
            Activity Date:<t />
            <input
              type="Date"
              name="ActivityDate"
              value={formData.ActivityDate}
              onChange={handleInputChange} className='FormText'
            />
          </label>
          <br />
          <label className='Margin'>
            Plantation Location:<t />
            <input
              type="text"
              name="PlantationLoc"
              value={formData.PlantationLoc}
              onChange={handleInputChange} className='FormText'
            />
          </label>
          <br />
          <label className='Margin'>
            Upload Image:<t />
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange} className='FormText'
            />
          </label>
        </div>

      )}

      {formData.selectedOption === 'carpooling' && (
        <div>
          <label className='Margin'>
            <br />
            Email Id: <t /> {" "}
            <input
              type="text"
              name="EmailId"
              value={formData.EmailId}
              onChange={handleInputChange} className='FormText'
            />
          </label>
          <br />
          <label className='Margin'>
            Activity Date:<t />
            <input
              type="Date"
              name="ActivityDate"
              value={formData.ActivityDate}
              onChange={handleInputChange} className='FormText'
            />
          </label>
          <br />
          <label className='Margin'>
            Start Location:<t />
            <input
              type="text"
              name="StartLoc"
              value={formData.StartLoc}
              onChange={handleInputChange} className='FormText'
            />
          </label>
          <br />
          <label className='Margin'>
            End Location:<t />
            <input
              type="text"
              name="EndLoc"
              value={formData.EndLoc}
              onChange={handleInputChange} className='FormText'
            />
          </label>
          <br />
          <label className='Margin'>
            Upload Image:<t />
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange} className='FormText'
            />
          </label>
        </div>
      )}

      {formData.selectedOption === 'evTravel' && (
        <div>
          <br />
          <label className='Margin'>
            Email Id:<t />
            <input
              type="text"
              name="EmailId"
              value={formData.EmailId}
              onChange={handleInputChange} className='FormText'
            />
          </label>
          <br />
          <label className='Margin'>
            Activity Date:<t />
            <input
              type="Date"
              name="ActivityDate"
              value={formData.ActivityDate}
              onChange={handleInputChange} className='FormText'
            />
          </label>
          <br />
          <label className='Margin'>
            Start Location:<t />
            <input
              type="text"
              name="StartLoc"
              value={formData.StartLoc}
              onChange={handleInputChange} className='FormText'
            />
          </label>
          <br />
          <label className='Margin'>
            End Location:<t />
            <input
              type="text"
              name="EndLoc"
              value={formData.EndLoc}
              onChange={handleInputChange} className='FormText'
            />
          </label>
          <br />
          <label className='Margin'>
            Upload Image:<t />
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange} className='FormText'
            />
          </label>
        </div>
      )}

      {formData.selectedOption === 'walkCycle' && (
        <div>
          <br />
          <label className='Margin'>
            Email Id:<t />
            <input
              type="text"
              name="EmailId"
              value={formData.EmailId}
              onChange={handleInputChange} className='FormText'
            />
          </label>
          <br />
          <label className='Margin'>
            Activity Date:<t />
            <input
              type="Date"
              name="ActivityDate"
              value={formData.ActivityDate}
              onChange={handleInputChange} className='FormText'
            />
          </label>
          <br />
          <label className='Margin'>
            Distance:<t />
            <input
              type="text"
              name="distance"
              value={formData.distance}
              onChange={handleInputChange} className='FormText'
            />
          </label>
          <br />
          <label className='Margin'>
            Upload Image:<t />
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange} className='FormText'
            />
          </label>
        </div>
      )
      }

      <div>
        <label className='Margin'>
          <br />
          <button type="submit" value="Submit" className='submit' onSubmit={submitFormData} />
        </label>
      </div>

      {/* Display form data */}
      <div>
        <h2 className='Margin'>Form Data:</h2>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Addactivity;