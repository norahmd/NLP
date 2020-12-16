function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    // console.log("::: Form Submitted :::")
    postDataToServer('/get-analysis', {formText: formText})
    .then(res => res.json())
    .then(function(res) {
        console.log(res)
        document.getElementById('results').innerHTML = res.score_tag
    })
}

const postDataToServer = async (url='', data = {})=>{
    console.log(JSON.stringify(data))
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await res;
            return newData;
      }catch(error) {
      console.log("error", error);
      }
}

export { handleSubmit }
export { postDataToServer }

