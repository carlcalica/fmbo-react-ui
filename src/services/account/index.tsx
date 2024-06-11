import { apiURL } from "../../config/variables";
import { IPaymentRequest } from "../../redux/payment/types";
import apiClient from "../axios";

interface ApiResponse<T> {
    status: number;
    data: T;
    // You may have other properties in your response, like headers, etc.
}

export async function getPaymentData(data: IPaymentRequest): Promise<any> {
    const url = apiURL.PaymentSettings; // Ensure this URL matches the proxy setup

    return await apiClient
        .post(url, JSON.stringify(data))
        .then((response: ApiResponse<any>) => {
            console.log("THIS IS SERVER RESPONSE", response);
            if (response.status === 200) {
                return response.data;                
            } else {
                return response.status;
            }
        })
        .catch((error) => {
            console.error("Error during API call:", error);
            return 0;
        });
}
