import { Axios } from 'axios';
import API from '@/common/configs/api.config';
import { IApiClient, IClientResponse } from '@/types/boilerplate.types';
import ClientError from '@/common/handlers/error.handler';

class ApiClient implements IApiClient {
  public readonly API: Axios;

  public readonly defaultError: string;

  constructor() {
    this.API = API;
    this.defaultError = 'errors.default';
  }

  public async sendContactForm(body: {
    [key: string]: string | { [key: string]: string };
  }) {
    try {
      const { data } = await this.API.post('/contact', body).catch((error) => {
        throw new ClientError(this.errorHandler(error));
      });

      return {
        data,
        error: null,
      } as IClientResponse<{ message: string }, null>;
    } catch (error: any) {
      return {
        data: null,
        error: error?.message || this.defaultError,
      } as IClientResponse<null, string>;
    }
  }

  public async sendCareerForm(body: {
    [key: string]: string | { [key: string]: string };
  }) {
    try {
      const { data } = await this.API.post('/career', body).catch((error) => {
        throw new ClientError(this.errorHandler(error));
      });

      return {
        data,
        error: null,
      } as IClientResponse<{ message: string }, null>;
    } catch (error: any) {
      return {
        data: null,
        error: error?.message || this.defaultError,
      } as IClientResponse<null, string>;
    }
  }

  errorHandler(error: any): { message: string; code?: string | number } {
    const errorResponse = error?.response?.data;
    const defaultError = error;

    const message = errorResponse?.message || this.defaultError;
    const code = errorResponse?.code || defaultError?.code;

    // Implement your own error handling here
    // if (code === 'USERNOTFOUND') {
    //   return {
    //     message: 'errors.userNotFound',
    //     code,
    //   };
    // }

    return {
      message,
      code,
    };
  }
}

const apiClient = new ApiClient();

export default apiClient;
