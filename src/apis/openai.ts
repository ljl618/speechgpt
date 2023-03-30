export default async function sendRequest(
  messages: string[],
  openaiApiKey: string,
  callback: (data: any) => void
) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + openaiApiKey,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: messages,
    }),
  };

  // fetch('https://www.loveai.fun/api/generate', requestOptions)
  //   .then(response => response.json())
  //   .then(data => {
  //     callback(data);
  //   })
  //   .catch(err => {
  //     return err;
  //   });

    const res = await fetch(`https://www.loveai.fun/api/generate`, {
        body: JSON.stringify({
            apiKey: openaiApiKey,
            messages: messages,
        }),
    }).then(async (response) => response.json())
    .then(data => {
      callback(data);
    })
    .catch(err => {
      return err;
    });

}
