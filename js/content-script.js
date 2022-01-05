//alert("content-script.js 已经注入");

chrome.extension.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.action === "search") {
            var rawHtml = $("html").html();
            var pattern = /product_id=(\d+)/
            target = pattern.exec(rawHtml)
            // console.log(target)
            if (target) {
                sendResponse(target[1]);
            } else {
                sendResponse("null");
            }
        }
    }
);