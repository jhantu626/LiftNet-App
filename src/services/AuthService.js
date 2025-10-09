import axios from 'axios';
import { API_URL } from './../config/config';
class AuthService {
  constructor() {
    this.baseUrl = `${API_URL}auth`;
  }

  async login(email) {
    const uri = `${this.baseUrl}?email=${email}`;
    console.info(uri);
    try {
      const response = await axios.post(uri);
      const data = await response.data;
      return data;
    } catch (error) {
      console.error(error);
      const data = await error.response.data;
      return data;
    }
  }

  async verifyOtp(email, otp) {
    try {
      const uri = `${this.baseUrl}/validate-otp?email=${email}&otp=${otp}`;
      console.info(uri);
      const response = await axios.post(uri);
      const data = await response.data;
      return data;
    } catch (error) {
      const data = await error.response.data;
      return data;
    }
  }
}

const authService = new AuthService();
export { authService };
