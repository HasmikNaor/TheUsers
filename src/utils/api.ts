class Api {
  baseUrl: string;
  headers: any;
  constructor({ baseUrl, headers }: { baseUrl: string; headers?: any }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  customFetch(url: string, headers?: any) {
    return fetch(url, headers).then((res) => {
      return res.ok ? res.json() : Promise.reject(res.statusText);
    });
  }
  getAllUsers() {
    return this.customFetch(`${this.baseUrl}`, {
      headers: this.headers,
      method: "GET",
    });
  }
}

export const api = new Api({
  baseUrl: "https://randomuser.me/api/?results=10",
});

export default Api;
