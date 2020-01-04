var ms = [200,400,700,600,500,400,700,800,300,900,700,600,500,400]
var hs = [3,5,4,3,2]
return function (t) {
  var m0 = ms[Math.floor(t*8)%ms.length]
  var m1 = ms[Math.floor(t*4)%ms.length]
  var m2 = ms[Math.floor(t*2)%ms.length]
  var h0 = hs[Math.floor(t)%hs.length]
  var h1 = hs[Math.floor(t/2)%hs.length]
  return 0
    + sin_(sin(m1/h0)+sin(1),saw(1/2)*.5+sin(4)*.5)
      * (1-saw(2)*0.5-saw(8)*0.5)*0.5 * 0.5
    + sin_(sin_(sin(m0),sin(h0)),sin(m1*h1)*.1)
      * sin_(m0*h1,sin(1)*.1)*Math.pow((1-saw(2))*0.5,4)*0.6
    + sin_(sin(m1*h1),sin(1)*0.1+2)
      * Math.pow((1-saw(8)*0.5-saw(8)*0.5)*0.5,4) * 0.4
    + sin_(tri(m1)+tri(m0),tri(h1*m0)*0.1+.1)*0.2
    + sin_(tri(m0)*tri(2*m0),tri(m1)+sin(m0))*0.1
    + clamp(sin_(1000+sin(200),sin(1/4)+10)
      * Math.pow((1-saw(8)*0.5-saw(4)*0.5+saw(2)*0.5)*0.5,4)*2)*0.2

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