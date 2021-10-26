function b64Decode() {
    // Get Elements
    var b64Textarea = document.getElementById("b64Text");
    var hexTextarea = document.getElementById("hexText");
    var decTextarea = document.getElementById("decText");
    var binTextarea = document.getElementById("binText");
    var asciiTextarea = document.getElementById("asciiText");
    var utf8Textarea = document.getElementById("utf8Text");
    var urlTextarea = document.getElementById("urlText");
    var qpTextarea = document.getElementById("qpText");

    // Get Base64 Input
    var b64Encoded = b64Textarea.value;

    // Other Encodings
    var ascii = atob(b64Encoded);
    var hex = ascii2hex(ascii).toUpperCase();

    var bin = ""
    hex.split(" ").forEach(str => {
        bin += hex2bin(str)+" "
    });
    bin = bin.trim();

    var dec = ""
    hex.split(" ").forEach(str => {
        dec += parseInt(str, 16)+" "
    });
    dec = dec.trim();

    var utf8 = b642utf8(b64Encoded);

    var url = encodeURI(utf8);

    var qp = quotedPrintable.encode(utf8);

    hexTextarea.value = hex;
    decTextarea.value = dec;
    binTextarea.value = bin;
    asciiTextarea.value = ascii;
    utf8Textarea.value = utf8;
    urlTextarea.value = url;
    qpTextarea.value = qp;
}

function hexDecode() {
    // Get Elements
    var b64Textarea = document.getElementById("b64Text");
    var hexTextarea = document.getElementById("hexText");
    var decTextarea = document.getElementById("decText");
    var binTextarea = document.getElementById("binText");
    var asciiTextarea = document.getElementById("asciiText");
    var utf8Textarea = document.getElementById("utf8Text");
    var urlTextarea = document.getElementById("urlText");
    var qpTextarea = document.getElementById("qpText");

    // Get Base64 Input
    var hexEncoded = hexTextarea.value;

    // Other Encodings
    var ascii = hex2ascii(hexEncoded.replace(/\s+/g, ''));
    var b64 = btoa(ascii);

    var bin = ""
    hexEncoded.split(" ").forEach(str => {
        bin += hex2bin(str)+" "
    });
    bin = bin.trim();

    var dec = ""
    hexEncoded.split(" ").forEach(str => {
        dec += parseInt(str, 16)+" "
    });
    dec = dec.trim();

    var utf8 = b642utf8(b64);

    var url = encodeURI(utf8);

    var qp = quotedPrintable.encode(utf8);

    asciiTextarea.value = ascii;
    decTextarea.value = dec;
    binTextarea.value = bin;
    b64Textarea.value = b64;
    utf8Textarea.value = utf8;
    urlTextarea.value = url;
    qpTextarea.value = qp;
}

function decDecode() {
    // Get Elements
    var b64Textarea = document.getElementById("b64Text");
    var hexTextarea = document.getElementById("hexText");
    var decTextarea = document.getElementById("decText");
    var binTextarea = document.getElementById("binText");
    var asciiTextarea = document.getElementById("asciiText");
    var utf8Textarea = document.getElementById("utf8Text");
    var urlTextarea = document.getElementById("urlText");
    var qpTextarea = document.getElementById("qpText");

    // Get Base64 Input
    var decEncoded = decTextarea.value;

    // Other Encodings
    var hex = ""
    decEncoded.replace(/[\n\r]/g, '').trim().split(" ").forEach(str => {
        hex += dec2hex(str)+" "
    });
    hex = hex.trim();

    var ascii = hex2ascii(hex.replace(/\s+/g, ''));
    var b64 = btoa(ascii);

    var bin = ""
    hex.split(" ").forEach(str => {
        bin += hex2bin(str)+" "
    });
    bin = bin.trim();

    var utf8 = b642utf8(b64);

    var url = encodeURI(utf8);

    var qp = quotedPrintable.encode(utf8);

    asciiTextarea.value = ascii;
    binTextarea.value = bin;
    hexTextarea.value = hex;
    b64Textarea.value = b64;
    utf8Textarea.value = utf8;
    urlTextarea.value = url;
    qpTextarea.value = qp;
}

function binDecode() {
    // Get Elements
    var b64Textarea = document.getElementById("b64Text");
    var hexTextarea = document.getElementById("hexText");
    var decTextarea = document.getElementById("decText");
    var binTextarea = document.getElementById("binText");
    var asciiTextarea = document.getElementById("asciiText");
    var utf8Textarea = document.getElementById("utf8Text");
    var urlTextarea = document.getElementById("urlText");
    var qpTextarea = document.getElementById("qpText");

    // Get Base64 Input
    var binEncoded = binTextarea.value;
    
    // Other Encodings
    var hex = ""
    binEncoded.replace(/[\n\r]/g, '').trim().split(" ").forEach(str => {
        hex += bin2hex(str)+" "
    });
    hex = hex.trim();

    var ascii = hex2ascii(hex.replace(/\s+/g, ''));
    var b64 = btoa(ascii);

    var dec = ""
    hex.split(" ").forEach(str => {
        dec += parseInt(str, 16)+" "
    });
    dec = dec.trim();

    var utf8 = b642utf8(b64);

    var url = encodeURI(utf8);

    var qp = quotedPrintable.encode(utf8);

    asciiTextarea.value = ascii;
    decTextarea.value = dec;
    hexTextarea.value = hex;
    b64Textarea.value = b64;
    utf8Textarea.value = utf8;
    urlTextarea.value = url;
    qpTextarea.value = qp;
}

function asciiDecode() {
    // Get Elements
    var b64Textarea = document.getElementById("b64Text");
    var hexTextarea = document.getElementById("hexText");
    var decTextarea = document.getElementById("decText");
    var binTextarea = document.getElementById("binText");
    var asciiTextarea = document.getElementById("asciiText");
    var utf8Textarea = document.getElementById("utf8Text");
    var urlTextarea = document.getElementById("urlText");
    var qpTextarea = document.getElementById("qpText");

    // Get Base64 Input
    var asciiEncoded = asciiTextarea.value;

    // Other Encodings
    var b64 = btoa(asciiEncoded);
    var hex = ascii2hex(asciiEncoded).toUpperCase();

    var bin = ""
    hex.split(" ").forEach(str => {
        bin += hex2bin(str)+" "
    });
    bin = bin.trim();

    var dec = ""
    hex.split(" ").forEach(str => {
        dec += parseInt(str, 16)+" "
    });
    dec = dec.trim();

    var utf8 = b642utf8(b64);

    var url = encodeURI(utf8);

    var qp = quotedPrintable.encode(utf8);

    hexTextarea.value = hex;
    decTextarea.value = dec;
    binTextarea.value = bin;
    b64Textarea.value = b64;
    utf8Textarea.value = utf8;
    urlTextarea.value = url;
    qpTextarea.value = qp;
}

function utf8Decode() {
    // Get Elements
    var b64Textarea = document.getElementById("b64Text");
    var hexTextarea = document.getElementById("hexText");
    var decTextarea = document.getElementById("decText");
    var binTextarea = document.getElementById("binText");
    var asciiTextarea = document.getElementById("asciiText");
    var utf8Textarea = document.getElementById("utf8Text");
    var urlTextarea = document.getElementById("urlText");
    var qpTextarea = document.getElementById("qpText");

    // Get Base64 Input
    var utf8Encoded = utf8Textarea.value;
    
    // Other Encodings
    var b64 = utf82b64(utf8Encoded);

    var ascii = atob(b64);

    var hex = ascii2hex(ascii).toUpperCase();

    var bin = ""
    hex.split(" ").forEach(str => {
        bin += hex2bin(str)+" "
    });
    bin = bin.trim();

    var dec = ""
    hex.split(" ").forEach(str => {
        dec += parseInt(str, 16)+" "
    });
    dec = dec.trim();

    var url = encodeURI(utf8Encoded);

    var qp = quotedPrintable.encode(utf8Encoded);

    hexTextarea.value = hex;
    decTextarea.value = dec;
    binTextarea.value = bin;
    b64Textarea.value = b64;
    asciiTextarea.value = ascii;
    urlTextarea.value = url;
    qpTextarea.value = qp;
}

function urlDecode() {
    // Get Elements
    var b64Textarea = document.getElementById("b64Text");
    var hexTextarea = document.getElementById("hexText");
    var decTextarea = document.getElementById("decText");
    var binTextarea = document.getElementById("binText");
    var asciiTextarea = document.getElementById("asciiText");
    var utf8Textarea = document.getElementById("utf8Text");
    var urlTextarea = document.getElementById("urlText");
    var qpTextarea = document.getElementById("qpText");

    // Get Base64 Input
    var urlEncoded = urlTextarea.value;
    
    // Other Encodings
    var utf8 = decodeURI(urlEncoded);

    var b64 = utf82b64(utf8);

    var ascii = atob(b64);

    var hex = ascii2hex(ascii).toUpperCase();

    var bin = ""
    hex.split(" ").forEach(str => {
        bin += hex2bin(str)+" "
    });
    bin = bin.trim();

    var dec = ""
    hex.split(" ").forEach(str => {
        dec += parseInt(str, 16)+" "
    });
    dec = dec.trim();

    var qp = quotedPrintable.encode(utf8);

    hexTextarea.value = hex;
    decTextarea.value = dec;
    binTextarea.value = bin;
    b64Textarea.value = b64;
    asciiTextarea.value = ascii;
    utf8Textarea.value = utf8;
    qpTextarea.value = qp;
}

function qpDecode() {
    // Get Elements
    var b64Textarea = document.getElementById("b64Text");
    var hexTextarea = document.getElementById("hexText");
    var decTextarea = document.getElementById("decText");
    var binTextarea = document.getElementById("binText");
    var asciiTextarea = document.getElementById("asciiText");
    var utf8Textarea = document.getElementById("utf8Text");
    var urlTextarea = document.getElementById("urlText");
    var qpTextarea = document.getElementById("qpText");

    // Get Base64 Input
    qpEncoded = qpTextarea.value;
    
    // Other Encodings
    var utf8 = quotedPrintable.decode(qpEncoded);

    var b64 = utf82b64(utf8);

    var ascii = atob(b64);

    var hex = ascii2hex(ascii).toUpperCase();

    var bin = ""
    hex.split(" ").forEach(str => {
        bin += hex2bin(str)+" "
    });
    bin = bin.trim();

    var dec = ""
    hex.split(" ").forEach(str => {
        dec += parseInt(str, 16)+" "
    });
    dec = dec.trim();

    var url = encodeURI(utf8);

    hexTextarea.value = hex;
    decTextarea.value = dec;
    binTextarea.value = bin;
    b64Textarea.value = b64;
    asciiTextarea.value = ascii;
    utf8Textarea.value = utf8;
    urlTextarea.value = url;
}

function hexByteFormat(){
    var hexTextarea = document.getElementById("hexText");
    var input = hexTextarea.value;

    var res = "";
    var space = false;

    for (var i = 0; i < input.length; i++) {
        if(space){
            res += input[i]+" ";
            space = false;
        }else{
            res += input[i];
            space = true;
        }
    }
    res = res.toUpperCase().trim();
    hexTextarea.value = res;
}

function binByteFormat(){
    var binTextarea = document.getElementById("binText");
    var input = binTextarea.value;

    var res = "";

    for (var i = 0; i < input.length; i++) {
        if((i+1)%8 == 0){
            res += input[i]+" ";
        }else{
            res += input[i];
        }
    }
    res = res.toUpperCase().trim();
    binTextarea.value = res;
}

// HELPER FUNCTIONS
function ascii2hex(str){
	var arr1 = [];
	for (var n = 0, l = str.length; n < l; n ++) 
     {
		var hex = Number(str.charCodeAt(n)).toString(16);
		arr1.push(hex);
	 }
	return arr1.join(' ');
}

function hex2ascii(str1){
	var hex  = str1.toString();
	var str = '';
	for (var n = 0; n < hex.length; n += 2) {
		str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
	}
	return str;
}

function hex2bin(hex){
    return (parseInt(hex, 16).toString(2)).padStart(8, '0');
}

function bin2hex(bin){
    return parseInt(bin, 2).toString(16).toUpperCase();
}

function utf82b64(str){
    return window.btoa(unescape(encodeURIComponent(str)));
}
  
function b642utf8(str){
    return decodeURIComponent(escape(window.atob(str)));
}

function dec2hex(dec){
    return parseInt(dec, 10).toString(16).toUpperCase();
}