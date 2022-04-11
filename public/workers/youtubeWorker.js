self.onmessage = e => {

    const { data } = e
    const { index, reqURL, ytChannelId } = data

    fetch(reqURL + ytChannelId)
        .then(response => response.json())
        .then(data=>{
            const i = index >= 0 ? index : (data.items.length + index + 1)
            const link = data.items[i].link;
            const id = link.substr(link.indexOf("=") + 1);
            self.postMessage(id);
        })
        .catch()

}