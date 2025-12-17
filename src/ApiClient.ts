import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
} from "axios";

class ApiClient {
    private client: AxiosInstance;

    constructor(baseURL: string, token?: string) {
        this.client = axios.create({
            baseURL,
            headers: {
                "Content-Type": "application/json",
            },
        });

        // 👉 Request interceptor
        this.client.interceptors.request.use((config) => {
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        // 👉 Response interceptor
        this.client.interceptors.response.use(
            (response) => response,
            (error) => {
                // можно централизованно обрабатывать ошибки
                console.error("API Error:",JSON.stringify(error.response?.data) || error.message);
                return Promise.reject(error);
            }
        );
    }

    // ====== HTTP методы ======

    get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.client.get<T>(url, config).then(this.handleResponse);
    }

    post<T, D = unknown>(
        url: string,
        data?: D,
        config?: AxiosRequestConfig
    ): Promise<T> {
        return this.client.post<T>(url, data, config).then(this.handleResponse);
    }

    put<T, D = unknown>(
        url: string,
        data?: D,
        config?: AxiosRequestConfig
    ): Promise<T> {
        return this.client.put<T>(url, data, config).then(this.handleResponse);
    }

    delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.client.delete<T>(url, config).then(this.handleResponse);
    }

    // ====== Helpers ======

    private handleResponse<T>(response: AxiosResponse<T>): T {
        return response.data;
    }

    // ====== Methods ======

    async getArticleById(id:string) {
        return await this.get(`/articles/${id}`)
    }
    async getProjectById(id:string) {
        return await this.get(`/projects/${id}`)
    }
    async getArticles() {
        return await this.get(`/articles`)
    }
    async getProjects() {
        return await this.get(`/projects`)
    }
}
export const apiClient = new ApiClient("https://strapitest.ybru.ru/api")