var xs = [1,1,1,1,8,8,1,1,2,1,8,32,4,2]
var zs = [1,1,1,0]
var ps = [4,1,2,2, 4,8,2,8, 4,1,2,12, 4,2,1,0.25]
var ms = [0,-2,17,13,7,5, -12,4,8,17,23,11,15, 5,17,13,4, 2,8,9,-4]

return function (t) {
  var z = zs[Math.floor(t/8)%zs.length]
  var x0 = xs[Math.floor(t)%xs.length]*z
  var x1 = xs[Math.floor(t+1)%xs.length]*z
  var p0 = ps[Math.floor(t*4)%ps.length]
  var m0 = Math.pow(2,ms[Math.floor(t*1)%ms.length]/12)
  var m1 = Math.pow(2,ms[Math.floor(t*4)%ms.length]/12)
  return (0
    + sin_(sin(400+x0)+sin(80)+sin(40),sin(.0625)*0.1+1)*0.1
    + sin_(sin(160*m0+x1)+sin(80*m0)+sin(40*m0+x1),sin(0.5)*0.1+.2)*0.2
    + sin_(sin(100)+sin(50)+sin(13),sin(.125)*0.1+.5)*0.6
      * Math.pow((1-saw(p0))*0.5,4)
    + sin_(sin(200*m1+x0)+sin(100*m1+x0)+sin(50*m1+x1),sin(.0625)*0.1+0.05)*0.4
    + sin_(sin(400)+sin(1300),sin(8)+8)*0.4
      * Math.pow((1-saw_(p0*4,t+.25))*0.5,4*p0)
  ) * 0.3

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