export const mpld3_load_lib = (url, callback) => {
    var s = document.createElement('script');
    s.src = url;
    s.async = true;
    s.onreadystatechange = s.onload = callback;
    s.onerror = function () { console.warn("failed to load library " + url); };
    document.getElementsByTagName("head")[0].appendChild(s);
}