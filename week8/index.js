// this code runs synchronously
function showData() {
    //lots of code
    console.log("showData function finished")
}

// this code runs asynchronously
async function getRandomFact() {
    const response = await fetch("https://uselessfacts.jsph.pl//api/v2/facts/random")
    // console.log(response)
    const data = await response.json()
    // console.log(data.text)
    console.log("getData finished")
}

async function getRandomFact() {
    const response = await fetch("https://uselessfacts.jsph.pl//api/v2/facts/random")
    // console.log(response)
    const data = await response.json()
    // console.log(data.text)
    console.log("getData finished")
}


getRandomFact()
getTodaysFact()

//getData()
//showData()
