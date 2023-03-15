



const useToken = () => {
  
  
  
 const setToken: (token: any) => Promise<void> = async (token) => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  };

  const getToken: () => void = async () => {
    let token: any = localStorage.getItem("token");

    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]));

      if ((payload.exp, Date.now() / 100)) {
        localStorage.removeItem("token");
        token = null;
      }
    }
    return token;
  };

  const getUserFromToken: () => Promise<any> = async () => {
    const token: any = getToken();
    return token ? JSON.parse(atob(token.split(".")[1])).user : null;
  };

  const removeToken: () => Promise<any> = async () => {
    localStorage.removeItem("token");
  };



  return {
    setToken,
    getToken,
    removeToken,
    getUserFromToken,
  };


};

export default useToken;
