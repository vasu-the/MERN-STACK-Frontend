const mockData = {
    login: {
      success: true,
      token: "mock-jwt-token",
      user: {
        name: "Admin User",
        email: "admin@example.com",
      },
    },
  };
  
  const api = {
    post: async (url, payload) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (url === "/auth/login") {
            if (
              payload.email === "admin@example.com" &&
              payload.password === "password"
            ) {
              resolve({ data: mockData.login });
            } else {
              reject({ response: { data: { message: "Invalid credentials" } } });
            }
          } else {
            reject({ response: { data: { message: "Invalid endpoint" } } });
          }
        }, 500); // Simulates a 500ms delay
      });
    },
  };
  
  export default api;
  