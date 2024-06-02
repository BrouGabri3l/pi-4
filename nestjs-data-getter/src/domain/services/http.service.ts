import { HttpService as AxiosHttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { HttpService } from 'src/core/services/httpService.interface';

@Injectable()
export class HttpServiceImpl implements HttpService {
  constructor(
    @Inject(AxiosHttpService) private readonly httpService: AxiosHttpService,
  ) {}

  get<TResponse = any, TOptions = any>(
    endpoint: string,
    options?: TOptions,
  ): Promise<TResponse> {
    throw new Error('Method not implemented.');
  }
  post<TResponse = any, TOptions = any, TData = any>(
    endpoint: string,
    data: TData,
    options?: TOptions,
  ): Promise<TResponse> {
    throw new Error('Method not implemented.');
  }
  put<TResponse = any, TOptions = any, TData = any>(
    endpoint: string,
    data: TData,
    options?: TOptions,
  ): Promise<TResponse> {
    throw new Error('Method not implemented.');
  }
  patch<TResponse = any, TOptions = any, TData = any>(
    endpoint: string,
    data: TData,
    options?: TOptions,
  ): Promise<TResponse> {
    throw new Error('Method not implemented.');
  }
  delete<TResponse = any, TOptions = any, TData = any>(
    endpoint: string,
    options?: TOptions,
  ): Promise<TResponse> {
    throw new Error('Method not implemented.');
  }
}
