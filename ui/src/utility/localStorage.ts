export let store = (key: any, value: any) => {
    localStorage.setItem("key", value)
}

export let get = (key: any) => {
    let storedData = localStorage.getItem(key)
    return storedData;
}