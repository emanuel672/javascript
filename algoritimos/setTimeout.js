let interno = function() {
    console.log('interno 1');
    }
    let externo = function(callback) {
    console.log('externo 1');
    setTimeout(callback, 1000);
    console.log('externo 2');
    }
    console.log('teste 1');
    externo(interno);
    console.log('teste 2');