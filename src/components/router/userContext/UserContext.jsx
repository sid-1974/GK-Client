import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

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

  const handleRequest = async (requestFn, setData) => {
    try {
      const response = await requestFn();
      setData(response.data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const fetchAboutData = () =>
    handleRequest(() => axios.get("/api/user-about-details"), setAboutData);
  const fetchFamilyData = () =>
    handleRequest(() => axios.get("/api/user-family-details"), setFamilyData);
  const fetchEducationData = () =>
    handleRequest(
      () => axios.get("/api/user-education-details"),
      setEducationData
    );
  const fetchLifestyleData = () =>
    handleRequest(
      () => axios.get("/api/user-lifestyle-details"),
      setLifestyleData
    );
  const fetchPreferenceData = () =>
    handleRequest(
      () => axios.get("/api/user-preference-details"),
      setPreferenceData
    );
  const fetchOtherData = () =>
    handleRequest(() => axios.get("/api/user-other-details"), setOtherData);
  const fetchPhotoData = () =>
    handleRequest(() => axios.get("/api/user-image-details"), setPhotoData);

  const deletePhoto = async (photoId) => {
    try {
      await axios.delete("/api/user-delete-image", { data: { id: photoId } });
      fetchPhotoData();
    } catch (err) {
      console.error("Failed to delete photo:", err);
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
