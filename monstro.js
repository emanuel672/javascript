window.requestAnimationFrame = function(){
    return(
        window.requestAnimationFrame ||
        window.webkitrequesanimationframe ||
        window.mozrequestanimatioframe ||
        window.mozrequestanimatioframe ||
        window.msrequestanimationframe ||
        function (callback){
            window.setTimeout(callback);
        }
    );
};