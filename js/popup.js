$(function () {
    $(document).ready(function () {
        // chrome.tabs.query可以通过回调函数获得当前页面的信息tabs
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, { action: "search" }, function (response) {       
                    if (response == 'null'){
                        alert('no answer found!')
                    }
                    else{
                        product_id = response
                        url = "http://www.rkpass.cn/tk_jiexi.jsp?product_id=" + product_id + "&tixing=xuanze&answer=&paper_id=&tihao=&cache=" 
                        // $("p").text(url)
                        var bg = chrome.extension.getBackgroundPage(); 
                        bg.getAnswer(url, function(data){
                            $("p").append(data)
                        })
                    }
                });
            }); 
            
        });
});
