import React from 'react';
import GoogleAutocomplete from '../common/GoogleAutocomplete';

const eventsForm = ({ handleChange, handleSubmit, data, updateLocation }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Name</label>
        <input className="input" name="name" placeholder="Name" onChange={handleChange} value={data.name || ''}/>
        {data.errors.name && <small>{data.errors.name}</small>}
      </div>
      <div className="field">
        <label className="label">Date</label>
        <input className="input" type="date" name="date" placeholder="Date" onChange={handleChange} value={data.date || ''} />
        {data.errors.date && <small>{data.errors.date}</small>}
      </div>
      <div className="field">
        <label className="label">Start Time</label>
        <input className="input" type="time" name="startTime" placeholder="Start" onChange={handleChange} value={data.startTime || ''} />
        {data.errors.startTime && <small>{data.errors.startTime}</small>}
      </div>
      <div className="field">
        <label className="label">Event Type</label>
        <div className="control">
          <div className="select is-fullwidth">
            <select name="type" onChange={handleChange} value={data.type || ''}>
              <option value="" disabled>Please choose</option>
              <option>Sport</option>
              <option>Music</option>
              <option>Learning</option>
              <option>Theatre</option>
              <option>Food & Drink</option>
              <option>Gaming</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        {data.errors.type && <small>{data.errors.type}</small>}
      </div>
      <div className="field">
        <label className="label">Ticket Status</label>
        <div className="control">
          <div className="select is-fullwidth">
            <select name="status" onChange={handleChange} value={data.status || ''}>
              <option value="" disabled>Please choose</option>
              <option>Buying</option>
              <option>Selling</option>
              <option>Just Looking</option>
            </select>
          </div>
        </div>
        {data.errors.status && <small>{data.errors.status}</small>}
      </div>
      <div className="field">
        <label className="label">Image</label>
        <input className="input" name="image" placeholder="Image" onChange={handleChange} value={data.image || ''} />
        {data.errors.image && <small>{data.errors.image}</small>}
      </div>
      <div className="field">
        <label className="label">Description</label>
        <input className="input" name="description" placeholder="Description" onChange={handleChange} value={data.description || ''} />
        {data.errors.description && <small>{data.errors.description}</small>}
      </div>
      <div className="field">
        <label className="label">Location</label>
        <GoogleAutocomplete updateLocation={updateLocation} />
        {data.errors.location && <small>{data.errors.location}</small>}
      </div>

      <button className="button">Submit</button>
    </form>
  );
};

export default eventsForm;
