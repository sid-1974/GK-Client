const TokenService = {
    setToken(token) {
        
      localStorage.setItem("jwtToken", token); // Store the token
    },
    getToken() {
      return localStorage.getItem("jwtToken"); // Retrieve the token
    },
    removeToken() {
      localStorage.removeItem("jwtToken"); // Remove the token
    },
  };
  
  export default TokenService;
  