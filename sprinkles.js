var rs = [4,4,4,0, 12,2,2,4, 8,4,4,0, 8,2,2,4 ]
var ms = [0,-2,1,8, 0,-5,3,8, 7,8,16,-3]
var sp = [8,8,2,8,4,8,1]

return function (t) {
  var s0 = sp[Math.floor(t/4)%sp.length]
  var s1 = sp[Math.floor(t/8+2)%sp.length]
  var s2 = sp[Math.floor(t/2+4)%sp.length]
  var r0 = rs[Math.floor(t*s0)%rs.length]
  var m0 = Math.pow(2,ms[Math.floor(t/2*s1)%ms.length]/12)
  var m1 = Math.pow(2,ms[Math.floor(t*s2)%ms.length]/12)
  var m2 = Math.pow(2,ms[Math.floor(t*16)%ms.length]/12)
  return 0
    + sin_(sin(160)*0.2+sin(80)*0.6+sin(40),sin(r0)*0.5+0.5)*(1-sq(.5))*0.5*0.4
    + sin_(sin(320*m0)+sin(160*m0)+tri(1),tri(.5)*0.2+0.2)*0.15
    + sin_(sin(160*m1)+tri(4),tri(4)*0.05+0.2)*0.2
    + sin_(sin(640*m2)+sin(80*m0)+tri(1),tri(.5)*0.2+0.1)*(1-sq(0.125))*0.5*0.2
    + sin_(sin(400*m2),t%1+8)*Math.pow((1-saw(s0))*0.5,8)*0.1
    + sin_(sin(100)+sin(50),t%1+.5)*Math.pow((1-saw(2))*0.5,12)*0.4

  function tri_ (x,t) { return Math.abs(1 - t % (1/x) * x * 2) * 2 - 1 }
  function tri (x) { return tri_(x,t) }
  function saw_ (x,t) { return t%(1/x)*x*2-1 }
  function saw (x) { return saw_(x,t) }
  function sin_ (x,t) { return Math.sin(2 * Math.PI * t * x) }
  function sin (x) { return sin_(x,t) }
  function sq_ (x,t) { return t*x % 1 < 0.5 ? -1 : 1 }
  function sq (x) { return sq_(x,t) }
  function clamp (x) { return Math.max(-1,Math.min(1,x)) }
}
