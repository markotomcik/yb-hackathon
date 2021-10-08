

export const loginPost = async (userLogin) => {
  try {
    const response = await fetch('localhost:8081/login', {
      method: "POST",
      mode: "cors",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userLogin)
    });

    const res = await response.json();
    if (res.Code === '200.000') {
      return res;
    } else {
      throw new HttpError(res);
    }

  } catch (e) {
    throw e;
  }
}