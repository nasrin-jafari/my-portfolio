const iframe = document.querySelector("iframe").contentWindow;

iframe.document.querySelector("body").style.backgroundColor = "blue";
// this would turn the 1st iframe in document blue.


const MyComponent = () => {
    const iframeRef = useRef(null);

    useEffect(() => {
        if (iframeRef.current) {
            iframeRef.current.contentWindow.postMessage('change-footer-color', '*');
        }
    }, []);

    return (
        <iframe ref={iframeRef} src="URL وب‌سایت داخل iframe" />
    );
};

export default MyComponent;
/////////////////////
https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/contentWindow
////////////////////////
https://www.w3schools.com/JSREF/prop_frame_contentwindow.asp
/////////////////////
var iframe = document.querySelector('iframe[id="TheID"]');

An element within the iframe is retrieved via the use of contentWindow.

For instance, as

var element = iframe.contentWindow.document.querySelector('form input[type="checkbox"]');
//////
https://stackoverflow.com/questions/11694113/how-to-change-style-of-element-in-iframe
//////////////
var x = document.getElementsByTagName("iframe")[0].contentWindow;
//x = window.frames[0];

x.document.getElementsByTagName("body")[0].style.backgroundColor = "blue";
////
import React, { useEffect, useRef } from 'react';

function MyComponent() {
    const iframeRef = useRef(null);

    useEffect(() => {
        if (iframeRef.current) {
            const iframe = iframeRef.current;
            iframe.onload = () => {
                const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

                // اعمال استایل به تمام المان‌های p (پاراگراف) داخل iframe
                const paragraphs = iframeDocument.getElementsByTagName('p');
                for (let i = 0; i < paragraphs.length; i++) {
                    paragraphs[i].style.color = 'blue'; // تغییر رنگ متن به آبی
                }
            };
        }
    }, []); // خالی بگذارید تا فقط بعد از اولین رندر اجرا شود

    return (
        <iframe ref={iframeRef} src="آدرس وب‌سایت مورد نظر" width="100%" height="400px" />
    );
}

export default MyComponent;
