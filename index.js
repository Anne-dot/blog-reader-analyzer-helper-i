addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    let url = new URL(request.url);
    
    if (url.pathname === "/track") {
        let { searchParams } = url;
        let start = searchParams.get("start");
        let end = searchParams.get("end");

        if (start && end) {
            let duration = parseInt(end) - parseInt(start);
            console.log(`Visitor stayed for: ${duration} ms`);
        }
        
        return new Response("Logged", { status: 200 });
    }

    return fetch(request);
}
