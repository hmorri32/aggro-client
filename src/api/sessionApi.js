class SessionApi {
  static login(user) {
    const base =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://aggro-api.herokuapp.com";
    const request = new Request(`${base}/users/login`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({ user })
    });

    return fetch(request)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        return error;
      });
  }
}

export default SessionApi;
