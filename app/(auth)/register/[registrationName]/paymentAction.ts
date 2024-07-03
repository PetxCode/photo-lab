import axios from "axios";

export const makePayment = async (email: string, price: number) => {
  try {
    const KEY: string = "sk_test_f5f9fc7af8e31862b79973a2140fce292a951076";

    const url: string = "https://api.paystack.co/transaction/initialize";

    return await axios.post(
      url,
      {
        email: "peter@test.com",
        amount: `${price * 100}`,
        callback_url: "http://localhost:3000/confirmation",
        metadata: {
          cancel_action: "http://localhost:3000/register",
        },
      },
      {
        headers: {
          Authorization: `Bearer sk_test_f5f9fc7af8e31862b79973a2140fce292a951076`,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const verifyPayment = async (reference: string) => {
  try {
    const KEY: string = "sk_test_f5f9fc7af8e31862b79973a2140fce292a951076";

    const url: string = `https://api.paystack.co/transaction/verify/${reference}`;

    return await axios.get(
      url,

      {
        headers: {
          Authorization: `Bearer sk_test_f5f9fc7af8e31862b79973a2140fce292a951076`,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const createAccount = async (
  companyName: string,
  email: string,
  password: string,
  plan: string
) => {
  try {
    const url: string = `http://localhost:3000/api/register`;

    return await axios.post(
      url,
      { name: companyName, email, password, planData: plan },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};
