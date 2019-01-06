var url = window.location.href

if(!url.includes("old")) {
    window.location = url.replace("www.reddit.com", "old.reddit.com")
}