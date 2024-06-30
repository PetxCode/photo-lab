import { PAYSTACK } from "@/utils/constant";
import axios from "axios";
import https from "node:https";

export const initiatePayment = async (email: string, cost: number) => {
  let value = {};
  const params = JSON.stringify({
    email,
    amount: `${cost * 100}`,
    callback_url: "http://localhost:3000",
  });

  const options = {
    hostname: "api.paystack.co",
    port: 443,
    path: "/transaction/initialize",
    method: "POST",
    headers: {
      Authorization: `Bearer ${PAYSTACK}`,
      "Content-Type": "application/json",
    },
  };

  const req = https
    .request(options, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", async () => {
        value = await JSON.parse(data);
        return await JSON.parse(data);
      });
    })
    .on("error", (error) => {
      return error;
    });
  req.write(params);
  req.end();
  return setTimeout(() => {
    console.log("reading url: ", value);
    return value;
  }, 4000);
};

export const startPayment = async (email: string, cost: any) => {
  try {
    let url = "https://66599126de346625136cfc59.mockapi.io/product";
    let url1 = "https://api.paystack.co/transaction/initialize";

    return await axios
      .post(
        url1,
        {
          email,
          amount: parseInt(cost.price) * 100,
          callback_url: `http://localhost:3000/signin/`,
          metadata: {
            cancel_action: "http://localhost:3000/register",
          },
          channel: [
            "card",
            "bank",
            "ussd",
            "qr",
            "mobile_money",
            "bank_transfer",
            "eft",
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${PAYSTACK}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res: any) => {
        return res;
      });
  } catch (error) {
    console.log(error);
  }
};
