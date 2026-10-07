// Ejercicio 1
// r = a + (b - c) * d + (e / f * g)
function ejercicio1(a, b, c, d, e, f, g) {
    let t1 = b - c;
    let t2 = t1 * d;
    let t3 = e / f;
    let t4 = t3 * g;
    let t5 = a + t2; 
    let t6 = t5 + t4;
    let res = t6;
    console.log("Ejercicio 1 \n res:", res);
}

// Ejercicio 2
// x = ((m * n) / (p + q)) * (r * k)
function ejercicio2(m, n, p, q, r, k) {
    let t1 = m * n;
    let t2 = p + q;
    let t3 = t1 / t2;
    let t4 = r * k;
    let t5 = t3 * t4;
    let res2 = t5;
    console.log("Ejercicio 2 \n res2:", res2);
}

// Ejercicio 3
// total = (a + b * c) * (d - e) - (f + g)
function ejercicio3(a, b, c, d, e, f, g) {
    let t1 = b * c;
    let t2 = a + t1;
    let t3 = d - e;
    let t4 = t2 * t3;
    let t5 = f + g;
    let res3 = t4 - t5;
    console.log("Ejercicio 3 \n res3:", res3);
}

// Ejercicio 4
// val = a * (b + (c / d)) - e * (f + g)
function ejercicio4(a, b, c, d, e, f, g) {
    let t1 = c / d;
    let t2 = b + t1;
    let t3 = a * t2;
    let t4 = f + g;
    let t5 = e * t4;
    let res4 = t3 - t5;
    console.log("Ejercicio 4 \n res4:", res4);
}

// Ejercicio 5
// z = (x + y / o) * r + ((a * b + k) / (c + d))
function ejercicio5(x, y, o, r, a, b, k, c, d) {
    let t1 = y / o;
    let t2 = x + t1;
    let t3 = a * b;
    let t4 = t3 + k;
    let t5 = c + d;
    let t6 = t4 / t5;
    let t7 = t2 * r;
    let res5 = t7 + t6;
    console.log("Ejercicio 5 \n res5:", res5);
}

//mandamos a llamar a las dunciones 
ejercicio1(5, 10, 3, 2, 20, 4, 3);
ejercicio2(4, 3, 1, 1, 2, 5);
ejercicio3(2, 3, 4, 10, 5, 1, 2);
ejercicio4(2, 3, 8, 4, 1, 5, 2);
ejercicio5(4, 8, 2, 3, 2, 3, 1, 1, 2);