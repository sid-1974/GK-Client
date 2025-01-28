import React, { createContext, useContext, useState, useEffect } from "react";
// import axios from "axios";
import {get} from '../../../api/api'

const UserContext = createContext();

const UserProviderComponent = ({ children }) => {
  // User Auth-data
  const [userData, setUserData] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  const clearUser = () => {
    setUserData(null);
    localStorage.removeItem("user");
  };

  // User profile-data
  const [aboutData, setAboutData] = useState(null);
  const [familyData, setFamilyData] = useState(null);
  const [educationData, setEducationData] = useState(null);
  const [lifestyleData, setLifestyleData] = useState(null);
  const [preferenceData, setPreferenceData] = useState(null);
  const [otherData, setOtherData] = useState(null);
  const [photoData, setPhotoData] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  

  const handleRequest = async (requestFn, setData) => {
    try {
      const response = await requestFn();
      setData(response.data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const fetchAboutData = () =>
    handleRequest(() => get("/user/user-about-details"), setAboutData);
  const fetchFamilyData = () =>
    handleRequest(() => get("/user/user-family-details"), setFamilyData);
  const fetchEducationData = () =>
    handleRequest(() => get("/user/user-education-details"),setEducationData );
  const fetchLifestyleData = () =>
    handleRequest(
      () => get("/user/user-lifestyle-details"),
      setLifestyleData
    );
  const fetchPreferenceData = () =>
    handleRequest(
      () => get("/user/user-preference-details"),
      setPreferenceData
    );
  const fetchOtherData = () =>
    handleRequest(() => get("/user/user-other-details"), setOtherData);
  const fetchPhotoData = () =>
    handleRequest(() => get("/user/user-image-details"), setPhotoData);

  const deletePhoto = async (photoId) => {
    try {
      await delete("/user/user-delete-image", { data: { id: photoId } });
      fetchPhotoData();
    } catch (err) {
      console.error("Failed to delete photo:", err);
    }
  };
  const fetchAllUsers = async () => {
    try {
      const response = await get("/user/alluser-details");
      setAllUsers(response.data);
    } catch (error) {
      console.error("Failed to fetch all user details:", error);
    }
  };
  

 

  useEffect(() => {
    fetchAboutData();
    fetchFamilyData();
    fetchEducationData();
    fetchLifestyleData();
    fetchPreferenceData();
    fetchOtherData();
    fetchPhotoData();
    fetchAllUsers();
  }, []);

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        clearUser,
        aboutData,
        familyData,
        educationData,
        lifestyleData,
        preferenceData,
        otherData,
        photoData,
        fetchAboutData,
        fetchFamilyData,
        fetchEducationData,
        fetchLifestyleData,
        fetchPreferenceData,
        fetchOtherData,
        fetchPhotoData,
        deletePhoto,
        allUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Wrap the provider in React.memo
export const UserProvider = React.memo(UserProviderComponent);

export const useUser = () => {
  return useContext(UserContext);
};
