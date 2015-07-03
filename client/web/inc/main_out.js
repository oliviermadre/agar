(function(g, m) {
    function Wa() {
        oa = !0;
        Aa();
        setInterval(Aa, 18E4);
        C = pa = document.getElementById("canvas");
        f = C.getContext("2d");
        C.onmousedown = function(a) {
            if (Ba) {
                var b = a.clientX - (5 + q / 5 / 2),
                    c = a.clientY - (5 + q / 5 / 2);
                if (Math.sqrt(b * b + c * c) <= q / 5 / 2) {
                    N();
                    D(17);
                    return
                }
            }
            U = a.clientX;
            V = a.clientY;
            qa();
            N()
        };
        C.onmousemove = function(a) {
            U = a.clientX;
            V = a.clientY;
            qa()
        };
        C.onmouseup = function() {};
        /firefox/i.test(navigator.userAgent) ? document.addEventListener("DOMMouseScroll", Ca, !1) : document.body.onmousewheel = Ca;
        var a = !1,
            b = !1,
            c = !1;
        g.onkeydown = function(d) {
            32 != d.keyCode || a || (N(), D(17), a = !0);
            81 != d.keyCode || b || (D(18), b = !0);
            87 != d.keyCode || c || (N(), D(21), c = !0);
            27 == d.keyCode && Da(!0)
        };
        g.onkeyup = function(d) {
            32 == d.keyCode && (a = !1);
            87 == d.keyCode && (c = !1);
            81 == d.keyCode && b && (D(19), b = !1)
        };
        g.onblur = function() {
            D(19);
            c = b = a = !1
        };
        g.onresize = Ea;
        g.requestAnimationFrame ? g.requestAnimationFrame(Fa) : setInterval(ra, 1E3 / 60);
        setInterval(N, 40);
        w && m("#region").val(w);
        Ga();
        W(m("#region").val());
        null == s && w && X();
        m("#overlays").show();
        Ea()
    }

    function Ca(a) {
        E *= Math.pow(.9, a.wheelDelta / -120 || a.detail || 0);
        1 > E && (E = 1);
        E > 4 / k && (E = 4 / k)
    }

    function Xa() {
        if (.4 > k) O = null;
        else {
            for (var a = Number.POSITIVE_INFINITY, b = Number.POSITIVE_INFINITY, c = Number.NEGATIVE_INFINITY, d = Number.NEGATIVE_INFINITY, e = 0, l = 0; l < v.length; l++) {
                var h = v[l];
                !h.I() || h.M || 20 >= h.size * k || (e = Math.max(h.size, e), a = Math.min(h.x, a), b = Math.min(h.y, b), c = Math.max(h.x, c), d = Math.max(h.y, d))
            }
            O = Ya.ca({
                X: a - (e + 100),
                Y: b - (e + 100),
                fa: c + (e + 100),
                ga: d + (e + 100),
                da: 2,
                ea: 4
            });
            for (l = 0; l < v.length; l++)
                if (h = v[l], h.I() && !(20 >= h.size * k))
                    for (a = 0; a < h.a.length; ++a) b = h.a[a].x, c = h.a[a].y, b < t - q / 2 / k || c < u - r / 2 / k || b > t + q / 2 / k || c > u + r / 2 / k || O.i(h.a[a])
        }
    }

    function qa() {
        Y = (U - q / 2) / k + t;
        Z = (V - r / 2) / k + u
    }

    function Aa() {
        // null == $ && ($ = {}, m("#region").children().each(function() {
        //     var a = m(this),
        //         b = a.val();
        //     b && ($[b] = a.text())
        // }));
        // m.get(aa + "//m.agar.io/info", function(a) {
        //     var b = {},
        //         c;
        //     for (c in a.regions) {
        //         var d = c.split(":")[0];
        //         b[d] = b[d] || 0;
        //         b[d] += a.regions[c].numPlayers
        //     }
        //     for (c in b) m('#region option[value="' + c + '"]').text($[c] + " (" + b[c] + " players)")
        // }, "json")
    }

    function Ha() {
        m("#adsBottom").hide();
        m("#overlays").hide();
        Ga()
    }

    function W(a) {
        a && a != w && (m("#region").val() != a && m("#region").val(a), w = g.localStorage.location = a, m(".region-message").hide(), m(".region-message." + a).show(), m(".btn-needs-server").prop("disabled", !1), oa && X())
    }

    function Da(a) {
        F = null;
        Za();
        m("#overlays").fadeIn(a ? 200 : 3E3);
        a || m("#adsBottom").fadeIn(3E3)
    }

    function Ga() {
        m("#region").val() ? g.localStorage.location = m("#region").val() : g.localStorage.location && m("#region").val(g.localStorage.location);
        m("#region").val() ? m("#locationKnown").append(m("#region")) : m("#locationUnknown").append(m("#region"))
    }

    function Za() {
        ba && (ba = !1, setTimeout(function() {
            ba = !0
        }, 6E4 * Ia), g.googletag && g.googletag.pubads && g.googletag.pubads().refresh([g.mainAd]))
    }

    function Ja() {
        // console.log("Find " + w + P);
        // m.ajax(aa + "//m.agar.io/", {
        //     error: function() {
        //         setTimeout(Ja, 1E3)
        //     },
        //     success: function(a) {
        //         a = a.split("\n");
        //         a[2] && alert(a[2]);
        //         Ka("ws://" + a[0], a[1])
        //     },
        //     dataType: "text",
        //     method: "POST",
        //     cache: !1,
        //     crossDomain: !0,
        //     data: (w + P || "?") + "\n154669603"
        // })
    }

    function X() {
        oa && w && (m("#connecting").show(), Ja())
    }

    function Ka(a, b) {
        if (s) {
            s.onopen = null;
            s.onmessage = null;
            s.onclose = null;
            try {
                s.close()
            } catch (c) {}
            s = null
        }
        if ($a) {
            var d = a.split(":");
            a = d[0] + "s://ip-" + d[1].replace(/\./g, "-").replace(/\//g, "") + ".tech.agar.io:" + (+d[2] + 2E3)
        }
        G = [];
        p = [];
        A = {};
        v = [];
        I = [];
        B = [];
        x = y = null;
        J = 0;
        ca = !1;
        console.log("Connecting to " + a);
        s = new WebSocket(a);
        s.binaryType = "arraybuffer";
        s.onopen = function() {
            var a;
            console.log("socket open");
            a = K(5);
            a.setUint8(0, 254);
            a.setUint32(1, 4, !0);
            L(a);
            a = K(5);
            a.setUint8(0, 255);
            a.setUint32(1, 154669603, !0);
            L(a);
            a = K(1 + b.length);
            a.setUint8(0, 80);
            for (var c = 0; c < b.length; ++c) a.setUint8(c + 1, b.charCodeAt(c));
            L(a)
        };
        s.onmessage = ab;
        s.onclose = bb;
        s.onerror = function() {
            console.log("socket error")
        }
    }

    function K(a) {
        return new DataView(new ArrayBuffer(a))
    }

    function L(a) {
        s.send(a.buffer)
    }

    function bb() {
        ca && (da = 500);
        console.log("socket close");
        setTimeout(X, da);
        da *= 2
    }

    function ab(a) {
        cb(new DataView(a.data))
    }

    function cb(a) {
        function b() {
            for (var b = "";;) {
                var d = a.getUint16(c, !0);
                c += 2;
                if (0 == d) break;
                b += String.fromCharCode(d)
            }
            return b
        }
        var c = 0;
        240 == a.getUint8(c) && (c += 5);
        switch (a.getUint8(c++)) {
            case 16:
                db(a, c);
                break;
            case 17:
                Q = a.getFloat32(c, !0);
                c += 4;
                R = a.getFloat32(c, !0);
                c += 4;
                S = a.getFloat32(c, !0);
                c += 4;
                break;
            case 20:
                p = [];
                G = [];
                break;
            case 21:
                sa = a.getInt16(c, !0);
                c += 2;
                ta = a.getInt16(c, !0);
                c += 2;
                ua || (ua = !0, ea = sa, fa = ta);
                break;
            case 32:
                G.push(a.getUint32(c, !0));
                c += 4;
                break;
            case 49:
                if (null != y) break;
                var d = a.getUint32(c, !0),
                    c = c + 4;
                B = [];
                for (var e = 0; e < d; ++e) {
                    var l = a.getUint32(c, !0),
                        c = c + 4;
                    B.push({
                        id: l,
                        name: b()
                    })
                }
                La();
                break;
            case 50:
                y = [];
                d = a.getUint32(c, !0);
                c += 4;
                for (e = 0; e < d; ++e) y.push(a.getFloat32(c, !0)), c += 4;
                La();
                break;
            case 64:
                ga = a.getFloat64(c, !0), c += 8, ha = a.getFloat64(c, !0), c += 8, ia = a.getFloat64(c, !0), c += 8, ja = a.getFloat64(c, !0), c += 8, Q = (ia + ga) / 2, R = (ja + ha) / 2, S = 1, 0 == p.length && (t = Q, u = R, k = S)
        }
    }

    function db(a, b) {
        H = +new Date;
        ca || (ca = !0, m("#connecting").hide(), Ma());
        var c = Math.random();
        va = !1;
        var d = a.getUint16(b, !0);
        b += 2;
        for (var e = 0; e < d; ++e) {
            var l = A[a.getUint32(b, !0)],
                h = A[a.getUint32(b + 4, !0)];
            b += 8;
            l && h && (h.S(), h.p = h.x, h.q = h.y, h.o = h.size, h.D = l.x, h.F = l.y, h.n = h.size, h.L = H)
        }
        for (e = 0;;) {
            d = a.getUint32(b, !0);
            b += 4;
            if (0 == d) break;
            ++e;
            var f, l = a.getInt16(b, !0);
            b += 2;
            h = a.getInt16(b, !0);
            b += 2;
            f = a.getInt16(b, !0);
            b += 2;
            for (var g = a.getUint8(b++), k = a.getUint8(b++), q = a.getUint8(b++), g = (g << 16 | k << 8 | q).toString(16); 6 > g.length;) g = "0" + g;
            var g = "#" + g,
                k = a.getUint8(b++),
                q = !!(k & 1),
                s = !!(k & 16);
            k & 2 && (b += 4);
            k & 4 && (b += 8);
            k & 8 && (b += 16);
            for (var r, n = "";;) {
                r = a.getUint16(b, !0);
                b += 2;
                if (0 == r) break;
                n += String.fromCharCode(r)
            }
            r = n;
            n = null;
            A.hasOwnProperty(d) ? (n = A[d], n.K(), n.p = n.x, n.q = n.y, n.o = n.size, n.color = g) : (n = new Na(d, l, h, f, g, r), v.push(n), A[d] = n, n.ka = l, n.la = h);
            n.d = q;
            n.j = s;
            n.D = l;
            n.F = h;
            n.n = f;
            n.ja = c;
            n.L = H;
            n.W = k;
            r && n.Z(r); - 1 != G.indexOf(d) && -1 == p.indexOf(n) && (document.getElementById("overlays").style.display = "none", p.push(n), 1 == p.length && (t = n.x, u = n.y))
        }
        c = a.getUint32(b, !0);
        b += 4;
        for (e = 0; e < c; e++) d = a.getUint32(b, !0), b += 4, n = A[d], null != n && n.S();
        va && 0 == p.length && Da(!1)
    }

    function N() {
        var a;
        if (wa()) {
            a = U - q / 2;
            var b = V - r / 2;
            64 > a * a + b * b || .01 > Math.abs(Oa - Y) && .01 > Math.abs(Pa - Z) || (Oa = Y, Pa = Z, a = K(21), a.setUint8(0, 16), a.setFloat64(1, Y, !0), a.setFloat64(9, Z, !0), a.setUint32(17, 0, !0), L(a))
        }
    }

    function Ma() {
        if (wa() && null != F) {
            var a = K(1 + 2 * F.length);
            a.setUint8(0, 0);
            for (var b = 0; b < F.length; ++b) a.setUint16(1 + 2 * b, F.charCodeAt(b), !0);
            L(a)
        }
    }

    function wa() {
        return null != s && s.readyState == s.OPEN
    }

    function D(a) {
        if (wa()) {
            var b = K(1);
            b.setUint8(0, a);
            L(b)
        }
    }

    function Fa() {
        ra();
        g.requestAnimationFrame(Fa)
    }

    function Ea() {
        q = g.innerWidth;
        r = g.innerHeight;
        pa.width = C.width = q;
        pa.height = C.height = r;
        var a = m("#helloDialog");
        a.css("transform", "none");
        var b = a.height(),
            c = g.innerHeight;
        b > c / 1.1 ? a.css("transform", "translate(-50%, -50%) scale(" + c / b / 1.1 + ")") : a.css("transform", "translate(-50%, -50%)");
        ra()
    }

    function Qa() {
        var a;
        a = 1 * Math.max(r / 1080, q / 1920);
        return a *= E
    }

    function eb() {
        if (0 != p.length) {
            for (var a = 0, b = 0; b < p.length; b++) a += p[b].size;
            a = Math.pow(Math.min(64 / a, 1), .4) * Qa();
            k = (9 * k + a) / 10
        }
    }

    function ra() {
        var a, b = Date.now();
        ++fb;
        H = b;
        if (0 < p.length) {
            eb();
            for (var c = a = 0, d = 0; d < p.length; d++) p[d].K(), a += p[d].x / p.length, c += p[d].y / p.length;
            Q = a;
            R = c;
            S = k;
            t = (t + a) / 2;
            u = (u + c) / 2
        } else t = (29 * t + Q) / 30, u = (29 * u + R) / 30, k = (9 * k + S * Qa()) / 10;
        Xa();
        qa();
        xa || f.clearRect(0, 0, q, r);
        xa ? (f.fillStyle = ka ? "#111111" : "#F2FBFF", f.globalAlpha = .05, f.fillRect(0, 0, q, r), f.globalAlpha = 1) : gb();
        v.sort(function(a, b) {
            return a.size == b.size ? a.id - b.id : a.size - b.size
        });
        f.save();
        f.translate(q / 2, r / 2);
        f.scale(k, k);
        f.translate(-t, -u);
        for (d = 0; d < I.length; d++) I[d].T(f);
        for (d = 0; d < v.length; d++) v[d].T(f);
        if (ua) {
            ea = (3 * ea + sa) / 4;
            fa = (3 * fa + ta) / 4;
            f.save();
            f.strokeStyle = "#FFAAAA";
            f.lineWidth = 10;
            f.lineCap = "round";
            f.lineJoin = "round";
            f.globalAlpha = .5;
            f.beginPath();
            for (d = 0; d < p.length; d++) f.moveTo(p[d].x,
                p[d].y), f.lineTo(ea, fa);
            f.stroke();
            f.restore()
        }
        f.restore();
        x && x.width && f.drawImage(x, q - x.width - 10, 10);
        J = Math.max(J, hb());
        0 != J && (null == la && (la = new ma(24, "#FFFFFF")), la.u("Score: " + ~~(J / 100)), c = la.G(), a = c.width, f.globalAlpha = .2, f.fillStyle = "#000000", f.fillRect(10, r - 10 - 24 - 10, a + 10, 34), f.globalAlpha = 1, f.drawImage(c, 15, r - 10 - 24 - 5));
        ib();
        b = Date.now() - b;
        b > 1E3 / 60 ? z -= .01 : b < 1E3 / 65 && (z += .01);.4 > z && (z = .4);
        1 < z && (z = 1)
    }

    function gb() {
        f.fillStyle = ka ? "#111111" : "#F2FBFF";
        f.fillRect(0, 0, q, r);
        f.save();
        f.strokeStyle = ka ? "#AAAAAA" : "#000000";
        f.globalAlpha = .2;
        f.scale(k, k);
        for (var a = q / k, b = r / k, c = -.5 + (-t + a / 2) % 50; c < a; c += 50) f.beginPath(), f.moveTo(c, 0), f.lineTo(c, b), f.stroke();
        for (c = -.5 + (-u + b / 2) % 50; c < b; c += 50) f.beginPath(), f.moveTo(0, c), f.lineTo(a, c), f.stroke();
        f.restore()
    }

    function ib() {
        if (Ba && ya.width) {
            var a = q / 5;
            f.drawImage(ya, 5, 5, a, a)
        }
    }

    function hb() {
        for (var a = 0, b = 0; b < p.length; b++) a += p[b].n * p[b].n;
        return a
    }

    function La() {
        x = null;
        if (null != y || 0 != B.length)
            if (null != y || na) {
                x = document.createElement("canvas");
                var a = x.getContext("2d"),
                    b = 60,
                    b = null == y ? b + 24 * B.length : b + 180,
                    c = Math.min(200, .3 * q) / 200;
                x.width = 200 * c;
                x.height = b * c;
                a.scale(c, c);
                a.globalAlpha = .4;
                a.fillStyle = "#000000";
                a.fillRect(0, 0, 200, b);
                a.globalAlpha = 1;
                a.fillStyle = "#FFFFFF";
                c = null;
                c = "Leaderboard";
                a.font = "30px Ubuntu";
                a.fillText(c, 100 - a.measureText(c).width / 2, 40);
                if (null == y)
                    for (a.font = "20px Ubuntu", b = 0; b < B.length; ++b) c = B[b].name || "An unnamed cell", na || (c = "An unnamed cell"), -1 != G.indexOf(B[b].id) ? (p[0].name && (c = p[0].name), a.fillStyle = "#FFAAAA") : a.fillStyle = "#FFFFFF", c = b + 1 +
                        ". " + c, a.fillText(c, 100 - a.measureText(c).width / 2, 70 + 24 * b);
                else
                    for (b = c = 0; b < y.length; ++b) {
                        var d = c + y[b] * Math.PI * 2;
                        a.fillStyle = jb[b + 1];
                        a.beginPath();
                        a.moveTo(100, 140);
                        a.arc(100, 140, 80, c, d, !1);
                        a.fill();
                        c = d
                    }
            }
    }

    function Na(a, b, c, d, e, l) {
        this.id = a;
        this.p = this.x = b;
        this.q = this.y = c;
        this.o = this.size = d;
        this.color = e;
        this.a = [];
        this.l = [];
        this.R();
        this.Z(l)
    }

    function ma(a, b, c, d) {
        a && (this.r = a);
        b && (this.N = b);
        this.P = !!c;
        d && (this.s = d)
    }
    var aa = g.location.protocol,
        $a = "https:" == aa;
    if (g.location.ancestorOrigins && g.location.ancestorOrigins.length && "https://apps.facebook.com" != g.location.ancestorOrigins[0]) g.top.location = "http://agar.io/";
    else {
        var pa, f, C, q, r, O = null,
            s = null,
            t = 0,
            u = 0,
            G = [],
            p = [],
            A = {},
            v = [],
            I = [],
            B = [],
            U = 0,
            V = 0,
            Y = -1,
            Z = -1,
            fb = 0,
            H = 0,
            F = null,
            ga = 0,
            ha = 0,
            ia = 1E4,
            ja = 1E4,
            k = 1,
            w = null,
            Ra = !0,
            na = !0,
            za = !1,
            va = !1,
            J = 0,
            ka = !1,
            Sa = !1,
            Q = t = ~~((ga + ia) / 2),
            R = u = ~~((ha + ja) / 2),
            S = 1,
            P = "",
            y = null,
            oa = !1,
            ua = !1,
            sa = 0,
            ta = 0,
            ea = 0,
            fa = 0,
            Ta = 0,
            jb = ["#333333", "#FF3333", "#33FF33", "#3333FF"],
            xa = !1,
            ca = !1,
            E = 1,
            Ba = "ontouchstart" in g && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            ya = new Image;
        ya.src = "img/split.png";
        var Ua = document.createElement("canvas");
        if ("undefined" == typeof console || "undefined" == typeof DataView || "undefined" == typeof WebSocket || null == Ua || null == Ua.getContext || null == g.localStorage) alert("You browser does not support this game, we recommend you to use Firefox to play this");
        else {
            var $ = null;
            g.setNick = function(a) {
                Ha();
                F = a;
                Ma();
                J = 0
            };
            g.setRegion = W;
            g.setSkins = function(a) {
                Ra = a
            };
            g.setNames = function(a) {
                na = a
            };
            g.setDarkTheme = function(a) {
                ka = a
            };
            g.setColors = function(a) {
                za = a
            };
            g.setShowMass = function(a) {
                Sa = a
            };
            g.spectate = function() {
                F = null;
                D(1);
                Ha()
            };
            g.setGameMode = function(a) {
                a != P && (P = a, X())
            };
            g.setAcid = function(a) {
                xa = a
            };
            null != g.localStorage && (null == g.localStorage.AB9 && (g.localStorage.AB9 = 0 + ~~(100 * Math.random())), Ta = +g.localStorage.AB9, g.ABGroup = Ta);
            // m.get(aa + "//gc.agar.io", function(a) {
            //     var b = a.split(" ");
            //     a = b[0];
            //     b = b[1] || ""; - 1 == ["UA"].indexOf(a) && Va.push("ussr");
            //     if ("PT ES FR UK DE".split(' ').indexOf(a) != -1) {
            //         if (window.navigator.userAgent.indexOf("Android") != -1 || window.navigator.userAgent.indexOf("android") != -1) {
            //             window.location.href = "http://play.google.com/store/apps/details?id=com.miniclip.agar.io";
            //         }
            //     }
            //     T.hasOwnProperty(a) && ("string" == typeof T[a] ? w || W(T[a]) : T[a].hasOwnProperty(b) && (w || W(T[a][b])))
            // }, "text");
            var ba = !1,
                Ia = 0;
            setTimeout(function() {
                ba = !0
            }, Math.max(6E4 * Ia, 1E4));
            var T = {
                AF: "JP-Tokyo",
                AX: "EU-London",
                AL: "EU-London",
                DZ: "EU-London",
                AS: "SG-Singapore",
                AD: "EU-London",
                AO: "EU-London",
                AI: "US-Atlanta",
                AG: "US-Atlanta",
                AR: "BR-Brazil",
                AM: "JP-Tokyo",
                AW: "US-Atlanta",
                AU: "SG-Singapore",
                AT: "EU-London",
                AZ: "JP-Tokyo",
                BS: "US-Atlanta",
                BH: "JP-Tokyo",
                BD: "JP-Tokyo",
                BB: "US-Atlanta",
                BY: "EU-London",
                BE: "EU-London",
                BZ: "US-Atlanta",
                BJ: "EU-London",
                BM: "US-Atlanta",
                BT: "JP-Tokyo",
                BO: "BR-Brazil",
                BQ: "US-Atlanta",
                BA: "EU-London",
                BW: "EU-London",
                BR: "BR-Brazil",
                IO: "JP-Tokyo",
                VG: "US-Atlanta",
                BN: "JP-Tokyo",
                BG: "EU-London",
                BF: "EU-London",
                BI: "EU-London",
                KH: "JP-Tokyo",
                CM: "EU-London",
                CA: "US-Atlanta",
                CV: "EU-London",
                KY: "US-Atlanta",
                CF: "EU-London",
                TD: "EU-London",
                CL: "BR-Brazil",
                CN: "CN-China",
                CX: "JP-Tokyo",
                CC: "JP-Tokyo",
                CO: "BR-Brazil",
                KM: "EU-London",
                CD: "EU-London",
                CG: "EU-London",
                CK: "SG-Singapore",
                CR: "US-Atlanta",
                CI: "EU-London",
                HR: "EU-London",
                CU: "US-Atlanta",
                CW: "US-Atlanta",
                CY: "JP-Tokyo",
                CZ: "EU-London",
                DK: "EU-London",
                DJ: "EU-London",
                DM: "US-Atlanta",
                DO: "US-Atlanta",
                EC: "BR-Brazil",
                EG: "EU-London",
                SV: "US-Atlanta",
                GQ: "EU-London",
                ER: "EU-London",
                EE: "EU-London",
                ET: "EU-London",
                FO: "EU-London",
                FK: "BR-Brazil",
                FJ: "SG-Singapore",
                FI: "EU-London",
                FR: "EU-London",
                GF: "BR-Brazil",
                PF: "SG-Singapore",
                GA: "EU-London",
                GM: "EU-London",
                GE: "JP-Tokyo",
                DE: "EU-London",
                GH: "EU-London",
                GI: "EU-London",
                GR: "EU-London",
                GL: "US-Atlanta",
                GD: "US-Atlanta",
                GP: "US-Atlanta",
                GU: "SG-Singapore",
                GT: "US-Atlanta",
                GG: "EU-London",
                GN: "EU-London",
                GW: "EU-London",
                GY: "BR-Brazil",
                HT: "US-Atlanta",
                VA: "EU-London",
                HN: "US-Atlanta",
                HK: "JP-Tokyo",
                HU: "EU-London",
                IS: "EU-London",
                IN: "JP-Tokyo",
                ID: "JP-Tokyo",
                IR: "JP-Tokyo",
                IQ: "JP-Tokyo",
                IE: "EU-London",
                IM: "EU-London",
                IL: "JP-Tokyo",
                IT: "EU-London",
                JM: "US-Atlanta",
                JP: "JP-Tokyo",
                JE: "EU-London",
                JO: "JP-Tokyo",
                KZ: "JP-Tokyo",
                KE: "EU-London",
                KI: "SG-Singapore",
                KP: "JP-Tokyo",
                KR: "JP-Tokyo",
                KW: "JP-Tokyo",
                KG: "JP-Tokyo",
                LA: "JP-Tokyo",
                LV: "EU-London",
                LB: "JP-Tokyo",
                LS: "EU-London",
                LR: "EU-London",
                LY: "EU-London",
                LI: "EU-London",
                LT: "EU-London",
                LU: "EU-London",
                MO: "JP-Tokyo",
                MK: "EU-London",
                MG: "EU-London",
                MW: "EU-London",
                MY: "JP-Tokyo",
                MV: "JP-Tokyo",
                ML: "EU-London",
                MT: "EU-London",
                MH: "SG-Singapore",
                MQ: "US-Atlanta",
                MR: "EU-London",
                MU: "EU-London",
                YT: "EU-London",
                MX: "US-Atlanta",
                FM: "SG-Singapore",
                MD: "EU-London",
                MC: "EU-London",
                MN: "JP-Tokyo",
                ME: "EU-London",
                MS: "US-Atlanta",
                MA: "EU-London",
                MZ: "EU-London",
                MM: "JP-Tokyo",
                NA: "EU-London",
                NR: "SG-Singapore",
                NP: "JP-Tokyo",
                NL: "EU-London",
                NC: "SG-Singapore",
                NZ: "SG-Singapore",
                NI: "US-Atlanta",
                NE: "EU-London",
                NG: "EU-London",
                NU: "SG-Singapore",
                NF: "SG-Singapore",
                MP: "SG-Singapore",
                NO: "EU-London",
                OM: "JP-Tokyo",
                PK: "JP-Tokyo",
                PW: "SG-Singapore",
                PS: "JP-Tokyo",
                PA: "US-Atlanta",
                PG: "SG-Singapore",
                PY: "BR-Brazil",
                PE: "BR-Brazil",
                PH: "JP-Tokyo",
                PN: "SG-Singapore",
                PL: "EU-London",
                PT: "EU-London",
                PR: "US-Atlanta",
                QA: "JP-Tokyo",
                RE: "EU-London",
                RO: "EU-London",
                RU: "RU-Russia",
                RW: "EU-London",
                BL: "US-Atlanta",
                SH: "EU-London",
                KN: "US-Atlanta",
                LC: "US-Atlanta",
                MF: "US-Atlanta",
                PM: "US-Atlanta",
                VC: "US-Atlanta",
                WS: "SG-Singapore",
                SM: "EU-London",
                ST: "EU-London",
                SA: "EU-London",
                SN: "EU-London",
                RS: "EU-London",
                SC: "EU-London",
                SL: "EU-London",
                SG: "JP-Tokyo",
                SX: "US-Atlanta",
                SK: "EU-London",
                SI: "EU-London",
                SB: "SG-Singapore",
                SO: "EU-London",
                ZA: "EU-London",
                SS: "EU-London",
                ES: "EU-London",
                LK: "JP-Tokyo",
                SD: "EU-London",
                SR: "BR-Brazil",
                SJ: "EU-London",
                SZ: "EU-London",
                SE: "EU-London",
                CH: "EU-London",
                SY: "EU-London",
                TW: "JP-Tokyo",
                TJ: "JP-Tokyo",
                TZ: "EU-London",
                TH: "JP-Tokyo",
                TL: "JP-Tokyo",
                TG: "EU-London",
                TK: "SG-Singapore",
                TO: "SG-Singapore",
                TT: "US-Atlanta",
                TN: "EU-London",
                TR: "TK-Turkey",
                TM: "JP-Tokyo",
                TC: "US-Atlanta",
                TV: "SG-Singapore",
                UG: "EU-London",
                UA: "EU-London",
                AE: "EU-London",
                GB: "EU-London",
                US: "US-Atlanta",
                UM: "SG-Singapore",
                VI: "US-Atlanta",
                UY: "BR-Brazil",
                UZ: "JP-Tokyo",
                VU: "SG-Singapore",
                VE: "BR-Brazil",
                VN: "JP-Tokyo",
                WF: "SG-Singapore",
                EH: "EU-London",
                YE: "JP-Tokyo",
                ZM: "EU-London",
                ZW: "EU-London"
            };
            g.connect = Ka;
            var da = 500,
                Oa = -1,
                Pa = -1,
                x = null,
                z = 1,
                la = null,
                M = {},
                Va = "poland;usa;china;russia;canada;australia;spain;brazil;germany;ukraine;france;sweden;chaplin;north korea;south korea;japan;united kingdom;earth;greece;latvia;lithuania;estonia;finland;norway;cia;maldivas;austria;nigeria;reddit;yaranaika;confederate;9gag;indiana;4chan;italy;bulgaria;tumblr;2ch.hk;hong kong;portugal;jamaica;german empire;mexico;sanik;switzerland;croatia;chile;indonesia;bangladesh;thailand;iran;iraq;peru;moon;botswana;bosnia;netherlands;european union;taiwan;pakistan;hungary;satanist;qing dynasty;matriarchy;patriarchy;feminism;ireland;texas;facepunch;prodota;cambodia;steam;piccolo;ea;india;kc;denmark;quebec;ayy lmao;sealand;bait;tsarist russia;origin;vinesauce;stalin;belgium;luxembourg;stussy;prussia;8ch;argentina;scotland;sir;romania;belarus;wojak;doge;nasa;byzantium;imperial japan;french kingdom;somalia;turkey;mars;pokerface;8;irs;receita federal;facebook".split(";"),
                kb = ["8", "nasa"],
                lb = ["m'blob"];
            Na.prototype = {
                id: 0,
                a: null,
                l: null,
                name: null,
                k: null,
                J: null,
                x: 0,
                y: 0,
                size: 0,
                p: 0,
                q: 0,
                o: 0,
                D: 0,
                F: 0,
                n: 0,
                W: 0,
                L: 0,
                ja: 0,
                ba: 0,
                A: !1,
                d: !1,
                j: !1,
                M: !0,
                S: function() {
                    var a;
                    for (a = 0; a < v.length; a++)
                        if (v[a] == this) {
                            v.splice(a, 1);
                            break
                        }
                    delete A[this.id];
                    a = p.indexOf(this); - 1 != a && (va = !0, p.splice(a, 1));
                    a = G.indexOf(this.id); - 1 != a && G.splice(a, 1);
                    this.A = !0;
                    I.push(this)
                },
                h: function() {
                    return Math.max(~~(.3 * this.size), 24)
                },
                Z: function(a) {
                    if (this.name = a) null == this.k ? this.k = new ma(this.h(), "#FFFFFF", !0, "#000000") : this.k.H(this.h()), this.k.u(this.name)
                },
                R: function() {
                    for (var a = this.C(); this.a.length > a;) {
                        var b = ~~(Math.random() * this.a.length);
                        this.a.splice(b, 1);
                        this.l.splice(b, 1)
                    }
                    0 == this.a.length && 0 < a && (this.a.push({
                        Q: this,
                        e: this.size,
                        x: this.x,
                        y: this.y
                    }), this.l.push(Math.random() - .5));
                    for (; this.a.length < a;) {
                        var b = ~~(Math.random() * this.a.length),
                            c = this.a[b];
                        this.a.splice(b, 0, {
                            Q: this,
                            e: c.e,
                            x: c.x,
                            y: c.y
                        });
                        this.l.splice(b, 0, this.l[b])
                    }
                },
                C: function() {
                    if (0 == this.id) return 16;
                    var a = 10;
                    20 > this.size && (a = 0);
                    this.d && (a = 30);
                    var b = this.size;
                    this.d || (b *= k);
                    b *= z;
                    this.W & 32 && (b *= .25);
                    return ~~Math.max(b, a)
                },
                ha: function() {
                    this.R();
                    for (var a = this.a, b = this.l, c = a.length, d = 0; d < c; ++d) {
                        var e = b[(d - 1 + c) % c],
                            l = b[(d + 1) % c];
                        b[d] += (Math.random() - .5) * (this.j ? 3 : 1);
                        b[d] *= .7;
                        10 < b[d] && (b[d] = 10); - 10 > b[d] && (b[d] = -10);
                        b[d] = (e + l + 8 * b[d]) / 10
                    }
                    for (var h = this, g = this.d ? 0 : (this.id / 1E3 + H / 1E4) % (2 * Math.PI), d = 0; d < c; ++d) {
                        var f = a[d].e,
                            e = a[(d - 1 + c) % c].e,
                            l = a[(d + 1) % c].e;
                        if (15 < this.size && null != O && 20 < this.size * k && 0 != this.id) {
                            var m = !1,
                                p = a[d].x,
                                q = a[d].y;
                            O.ia(p -
                                5, q - 5, 10, 10,
                                function(a) {
                                    a.Q != h && 25 > (p - a.x) * (p - a.x) + (q - a.y) * (q - a.y) && (m = !0)
                                });
                            !m && (a[d].x < ga || a[d].y < ha || a[d].x > ia || a[d].y > ja) && (m = !0);
                            m && (0 < b[d] && (b[d] = 0), b[d] -= 1)
                        }
                        f += b[d];
                        0 > f && (f = 0);
                        f = this.j ? (19 * f + this.size) / 20 : (12 * f + this.size) / 13;
                        a[d].e = (e + l + 8 * f) / 10;
                        e = 2 * Math.PI / c;
                        l = this.a[d].e;
                        this.d && 0 == d % 2 && (l += 5);
                        a[d].x = this.x + Math.cos(e * d + g) * l;
                        a[d].y = this.y + Math.sin(e * d + g) * l
                    }
                },
                K: function() {
                    if (0 == this.id) return 1;
                    var a;
                    a = (H - this.L) / 120;
                    a = 0 > a ? 0 : 1 < a ? 1 : a;
                    var b = 0 > a ? 0 : 1 < a ? 1 : a;
                    this.h();
                    if (this.A && 1 <= b) {
                        var c = I.indexOf(this); - 1 != c && I.splice(c, 1)
                    }
                    this.x = a * (this.D - this.p) + this.p;
                    this.y = a * (this.F - this.q) + this.q;
                    this.size = b * (this.n - this.o) + this.o;
                    return b
                },
                I: function() {
                    return 0 == this.id ? !0 : this.x + this.size + 40 < t - q / 2 / k || this.y + this.size + 40 < u - r / 2 / k || this.x - this.size - 40 > t + q / 2 / k || this.y - this.size - 40 > u + r / 2 / k ? !1 : !0
                },
                T: function(a) {
                    if (this.I()) {
                        var b = 0 != this.id && !this.d && !this.j && .4 > k;
                        5 > this.C() && (b = !0);
                        if (this.M && !b)
                            for (var c = 0; c < this.a.length; c++) this.a[c].e = this.size;
                        this.M = b;
                        a.save();
                        this.ba = H;
                        c = this.K();
                        this.A && (a.globalAlpha *= 1 - c);
                        a.lineWidth = 10;
                        a.lineCap = "round";
                        a.lineJoin = this.d ? "miter" : "round";
                        za ? (a.fillStyle = "#FFFFFF", a.strokeStyle = "#AAAAAA") : (a.fillStyle = this.color, a.strokeStyle = this.color);
                        if (b) a.beginPath(), a.arc(this.x, this.y, this.size + 5, 0, 2 * Math.PI, !1);
                        else {
                            this.ha();
                            a.beginPath();
                            var d = this.C();
                            a.moveTo(this.a[0].x, this.a[0].y);
                            for (c = 1; c <= d; ++c) {
                                var e = c % d;
                                a.lineTo(this.a[e].x, this.a[e].y)
                            }
                        }
                        a.closePath();
                        d = this.name.toLowerCase();
                        !this.j && Ra && ":teams" != P ? -1 != Va.indexOf(d) ? (M.hasOwnProperty(d) || (M[d] = new Image, M[d].src = "skins/" + d + ".png"), c = 0 != M[d].width && M[d].complete ? M[d] : null) : c = null : c = null;
                        c = (e = c) ? -1 != lb.indexOf(d) : !1;
                        b || a.stroke();
                        a.fill();
                        null == e || c || (a.save(), a.clip(), a.drawImage(e, this.x - this.size, this.y - this.size, 2 * this.size, 2 * this.size), a.restore());
                        (za || 15 < this.size) && !b && (a.strokeStyle = "#000000", a.globalAlpha *= .1, a.stroke());
                        a.globalAlpha = 1;
                        null != e && c && a.drawImage(e, this.x - 2 * this.size, this.y - 2 * this.size, 4 * this.size, 4 * this.size);
                        c = -1 != p.indexOf(this);
                        if (0 != this.id) {
                            b = ~~this.y;
                            if ((na || c) && this.name && this.k && (null == e || -1 == kb.indexOf(d))) {
                                e = this.k;
                                e.u(this.name);
                                e.H(this.h());
                                d = Math.ceil(10 * k) / 10;
                                e.$(d);
                                var e = e.G(),
                                    l = ~~(e.width / d),
                                    h = ~~(e.height / d);
                                a.drawImage(e, ~~this.x - ~~(l / 2), b - ~~(h / 2), l, h);
                                b += e.height / 2 / d + 4
                            }
                            Sa && (c || 0 == p.length && (!this.d || this.j) && 20 < this.size) && (null == this.J && (this.J = new ma(this.h() / 2, "#FFFFFF", !0, "#000000")), c = this.J, c.H(this.h() / 2), c.u(~~(this.size * this.size / 100)), d = Math.ceil(10 * k) / 10, c.$(d), e = c.G(), l = ~~(e.width / d), h = ~~(e.height / d), a.drawImage(e, ~~this.x - ~~(l / 2), b - ~~(h / 2),
                                l, h))
                        }
                        a.restore()
                    }
                }
            };
            ma.prototype = {
                w: "",
                N: "#000000",
                P: !1,
                s: "#000000",
                r: 16,
                m: null,
                O: null,
                g: !1,
                v: 1,
                H: function(a) {
                    this.r != a && (this.r = a, this.g = !0)
                },
                $: function(a) {
                    this.v != a && (this.v = a, this.g = !0)
                },
                setStrokeColor: function(a) {
                    this.s != a && (this.s = a, this.g = !0)
                },
                u: function(a) {
                    a != this.w && (this.w = a, this.g = !0)
                },
                G: function() {
                    null == this.m && (this.m = document.createElement("canvas"), this.O = this.m.getContext("2d"));
                    if (this.g) {
                        this.g = !1;
                        var a = this.m,
                            b = this.O,
                            c = this.w,
                            d = this.v,
                            e = this.r,
                            l = e + "px Ubuntu";
                        b.font = l;
                        var h = ~~(.2 * e);
                        a.width = (b.measureText(c).width + 6) * d;
                        a.height = (e + h) * d;
                        b.font = l;
                        b.scale(d, d);
                        b.globalAlpha = 1;
                        b.lineWidth = 3;
                        b.strokeStyle = this.s;
                        b.fillStyle = this.N;
                        this.P && b.strokeText(c, 3, e - h / 2);
                        b.fillText(c, 3, e - h / 2)
                    }
                    return this.m
                }
            };
            Date.now || (Date.now = function() {
                return (new Date).getTime()
            });
            var Ya = {
                ca: function(a) {
                    function b(a, b, c, d, e) {
                        this.x = a;
                        this.y = b;
                        this.f = c;
                        this.c = d;
                        this.depth = e;
                        this.items = [];
                        this.b = []
                    }
                    var c = a.da || 2,
                        d = a.ea || 4;
                    b.prototype = {
                        x: 0,
                        y: 0,
                        f: 0,
                        c: 0,
                        depth: 0,
                        items: null,
                        b: null,
                        B: function(a) {
                            for (var b = 0; b < this.items.length; ++b) {
                                var c = this.items[b];
                                if (c.x >= a.x && c.y >= a.y && c.x < a.x + a.f && c.y < a.y + a.c) return !0
                            }
                            if (0 != this.b.length) {
                                var d = this;
                                return this.V(a, function(b) {
                                    return d.b[b].B(a)
                                })
                            }
                            return !1
                        },
                        t: function(a, b) {
                            for (var c = 0; c < this.items.length; ++c) b(this.items[c]);
                            if (0 != this.b.length) {
                                var d = this;
                                this.V(a, function(c) {
                                    d.b[c].t(a, b)
                                })
                            }
                        },
                        i: function(a) {
                            0 != this.b.length ? this.b[this.U(a)].i(a) : this.items.length >= c && this.depth < d ? (this.aa(), this.b[this.U(a)].i(a)) : this.items.push(a)
                        },
                        U: function(a) {
                            return a.x < this.x +
                                this.f / 2 ? a.y < this.y + this.c / 2 ? 0 : 2 : a.y < this.y + this.c / 2 ? 1 : 3
                        },
                        V: function(a, b) {
                            return a.x < this.x + this.f / 2 && (a.y < this.y + this.c / 2 && b(0) || a.y >= this.y + this.c / 2 && b(2)) || a.x >= this.x + this.f / 2 && (a.y < this.y + this.c / 2 && b(1) || a.y >= this.y + this.c / 2 && b(3)) ? !0 : !1
                        },
                        aa: function() {
                            var a = this.depth + 1,
                                c = this.f / 2,
                                d = this.c / 2;
                            this.b.push(new b(this.x, this.y, c, d, a));
                            this.b.push(new b(this.x + c, this.y, c, d, a));
                            this.b.push(new b(this.x, this.y + d, c, d, a));
                            this.b.push(new b(this.x + c, this.y + d, c, d, a));
                            a = this.items;
                            this.items = [];
                            for (c = 0; c < a.length; c++) this.i(a[c])
                        },
                        clear: function() {
                            for (var a = 0; a < this.b.length; a++) this.b[a].clear();
                            this.items.length = 0;
                            this.b.length = 0
                        }
                    };
                    var e = {
                        x: 0,
                        y: 0,
                        f: 0,
                        c: 0
                    };
                    return {
                        root: new b(a.X, a.Y, a.fa - a.X, a.ga - a.Y, 0),
                        i: function(a) {
                            this.root.i(a)
                        },
                        t: function(a, b) {
                            this.root.t(a, b)
                        },
                        ia: function(a, b, c, d, f) {
                            e.x = a;
                            e.y = b;
                            e.f = c;
                            e.c = d;
                            this.root.t(e, f)
                        },
                        B: function(a) {
                            return this.root.B(a)
                        },
                        clear: function() {
                            this.root.clear()
                        }
                    }
                }
            };
            m(Wa)
        }
    }
})(window, window.jQuery);