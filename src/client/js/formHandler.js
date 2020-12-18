function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if(!Client.checkForUrl(formText)){

        postDataToServer('http://localhost:8081/get-analysis', {formText: formText})
        .then(res => res.json())
        .then(function(res) {
            console.log(res)
            if(res.score_tag.includes('P')){

                document.getElementById('results').innerHTML = `Polarity: Positive <br>subjectivity: ${res.subjectivity.toLowerCase()}`

            } else if(res.score_tag.includes('N')){

                document.getElementById('results').innerHTML = `Polarity: negative <br>subjectivity: ${res.subjectivity.toLowerCase()}`

            } else {

            }
        })

    }
    
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

