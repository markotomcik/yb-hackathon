export const loginPost = async (userLogin) => {
  try {
    const response = await fetch('http://localhost:8081/login', {
      method: "POST",
      mode: "cors",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userLogin)
    });

    const res = await response.json();
    console.log(res);
    if (res.Code === '200.000') {
      return res;
    } else {
      console.error('Mistake happened')
    }
  } catch (e) {
    throw e;
  }
}
export const registerPost = async (userRegister) => {
  try {
    const response = await fetch('http://localhost:8081/register', {
      method: "POST",
      mode: "cors",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userRegister)
    });

    const res = await response.json();
    console.log(res);
    if (res.id !== null) {
      return res;
    } else {
      console.error('Mistake happened')
    }
  } catch (e) {
    throw e;
  }
}
