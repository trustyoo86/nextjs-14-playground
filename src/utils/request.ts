function wait(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

function request(url: string, data?: any, options: any = {}) {
  let delay = 1000;

  const fetchRequest = (token?: string) => {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'authorization': token || '',
        }
      }).then((res) => {
        if (res.ok) {
          resolve(res.json());
        } else {
          // console.log(res.headers.get('Authorization'));
          throw new Error(`${res.headers.get('Authorization')}`);
        }
      })
      .catch((err) => {
        if (options.retry) {
          wait(delay).then(() => {
            resolve(fetchRequest(err));
          });
        } else {
          reject('api error');
        }
      });
    });
  }

  return fetchRequest();
}

export default request;
