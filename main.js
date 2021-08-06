const shortenLink = () =>{
    const link = document.querySelector("#link");
    if(link.value === ''){
        const insertData = document.querySelector("#shortened");
        const val = '<div class="error">Enter any url</div>'
        insertData.innerHTML = val;
    }else{
    const url = new URL("https://t.ly/api/v1/link/shorten");

    let headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
    
    let body = {
        "long_url": link.value,
        "domain": "https:\/\/t.ly\/",
        "api_token": "HXj1Ia4n6RSyZLij4GALhEcfbL5IKw9MhbgjNwCoOn9OkR8h9i2Wr3AAG9zh"
    }
    link.value = '';
    fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
    })
        .then(response => response.json())
        .then(json => {
            const insertData = document.querySelector("#shortened");
            const val = '<div class="label">The shortened link is:</div><div class="short-link">'+json.short_url+'</div><button id="btn-copy">Copy Link</button>'
            insertData.innerHTML = val;
            const btn1 = document.querySelector("#btn-copy");
            btn1.addEventListener('click',copyText);
        });
    }
}


const copyText = () =>{
    console.log("Hello")
        const cb = navigator.clipboard;
        const val = document.querySelector('.short-link');
        cb.writeText(val.innerText).then(() => alert('Text copied'));
      
}

const btn = document.querySelector("#btn");
btn.addEventListener('click',shortenLink);