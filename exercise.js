async function getUUID() {
    let res = await fetch("https://httpbin.org/uuid")
    let data = await res.json()
    return data
}

async function delay (delay) {
    await fetch(`https://httpbin.org/delay/${delay}`)    
    return true
}

async function postBody(body) {
    let res = await fetch(`https://httpbin.org/anything/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
    return await res.json()
}

async function run() {
    console.time('Execution time')
    let uuid = getUUID()
    let wait = delay(2)
    let data =await postBody(await uuid)
    await wait
    console.timeEnd('Execution time')
}
run()
