import React,{useState} from 'react'
import './UserProfile.css'
import { Typography,Tabs, Tab,  } from '@mui/material';
import UserAbout from './insideprofile/about/UserAbout';
import UserFamily from './insideprofile/family/UserFamily';
import UserEducation from './insideprofile/education/UserEducation';
import UserPhoto from './insideprofile/photo/UserPhoto';
import UserLife from './insideprofile/life/UserLife';
import UserPreference from './insideprofile/preferences/UserPreference';
import Other from './insideprofile/others/Other';
import UserPrivacy from './insideprofile/privacy/UserPrivacy';

function UserProfile() {
  const [value, setValue] = useState(0);
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderContent = () => {
    switch (value) {
      case 0:
        return <UserAbout />;
      case 1:
        return <UserFamily/>;
      case 2:
        return <UserEducation/>;
      case 3:
        return <UserPhoto/>;
      case 4:
        return <UserLife/>;
      case 5:
        return <UserPreference/>;
      case 6:
        return <Other/>;
      case 7:
        return <UserPrivacy/>
      default:
        return null;
    }
  };
  return (
    <div className='userprofile-dashboard-container'>
      <div className="userprofile-dashboard-heading">
        <Typography variant="h4">My Profile</Typography>
      </div>
      <div className='userprofile-sub-container'>
        <div className='tabs-list'>
      <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          className="userprofile-tabs"
        >
          <Tab className='tab-list-1' label="About" />
          <Tab className='tab-list-2' label="Family & Religious" />
          <Tab className='tab-list-3' label="Education" />
          <Tab className='tab-list-4' label="photo" />
          <Tab className='tab-list-5' label="lifestyle" />
          <Tab className='tab-list-6' label="parents & preference" />
          <Tab className='tab-list-7' label="others" />
          <Tab className='tab-list-8' label="privacy settings" />
        </Tabs>
        </div>
        <div className="userprofile-tab-content">{renderContent()}</div>
      </div>
      
    </div>
  )
}

export default UserProfile;
