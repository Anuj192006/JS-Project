function u() {
    return String.fromCharCode(65 + Math.floor(Math.random() * 26));
}

function l() {
    return String.fromCharCode(97 + Math.floor(Math.random() * 26));
}

function n() {
    return String.fromCharCode(48 + Math.floor(Math.random() * 10));
}

function s() {
    const c = "!@#$%^&*()_+[]{}|;:,.<>?/";
    return c.charAt(Math.floor(Math.random() * c.length));
}
function g() {
    const r = document.getElementById('passwordResult');
    const lth = parseInt(document.getElementById('length').value);
    const uC = document.getElementById('uppercase').checked;
    const lC = document.getElementById('lowercase').checked;
    const num = document.getElementById('numbers').checked;
    const sym = document.getElementById('symbols').checked;
    if (!uC && !lC && !num && !sym) {
        r.textContent = 'Please select at least one character type.';
        return;
    }
    let p = '';
    const funcs = [];
    if (uC) funcs.push(u);
    if (lC) funcs.push(l);
    if (num) funcs.push(n);
    if (sym) funcs.push(s);

    for (let i = 0; i < lth; i++) {
        const randomFunc = funcs[Math.floor(Math.random() * funcs.length)];
        p += randomFunc();
    }

    r.textContent = p;
}
