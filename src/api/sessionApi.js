class SessionApi {
  static login(user) {
    const request = new Request("https://aggro-api.herokuapp.com/api/users/login", {
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
    // fetch("http://aggro-api.herokuapp.com/api/v1/spots")
