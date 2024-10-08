import React from 'react'
import InputField from '../components/InputField'

const JobPostingData = ({handleChange}) => {
    const now = new Date();
    const tewntyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000)
    const SevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000)
    const thirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000)

    // convert date to string 
    const tewntyFourHoursAgoDate =  tewntyFourHoursAgo.toISOString().slice(0, 10)
    const SevenDaysAgoDate =  SevenDaysAgo.toISOString().slice(0, 10)
    const thirtyDaysAgoDate =  thirtyDaysAgo.toISOString().slice(0, 10)
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Date of Posting</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All Time
        </label>

        <InputField
          handleChange={handleChange}
          value={tewntyFourHoursAgoDate}
          title="last 24 Hours"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={SevenDaysAgoDate}
          name="test"
          title="Last 7 days"
        />
        <InputField
          handleChange={handleChange}
          value={thirtyDaysAgoDate}
          name="test"
          title="Last Month"
        />
      </div>
    </div>
  )
}

export default JobPostingData