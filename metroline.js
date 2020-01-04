var rs = [2,1,4,8, 1,2,8,4, 8,2,1,4, 8,2,8,4]
var ms = [0,4,-2,1]
var ns = [0,5,-2,3, 5,4,5,-2]
var zs = [10,10,8,8,5,5, 10,10,8,8,5,5, 10,10,5,4,8,8,
  8,13,5, 20,17,1, 700,5,200, 2000,-8,4000]

return function (t) {
  var r0 = rs[Math.floor(t*8)%rs.length]
  var r1 = rs[Math.floor(t*4)%rs.length]
  var m0 = Math.pow(2,ms[Math.floor(t*2)%ms.length]/12)*100
  var m1 = Math.pow(2,ns[Math.floor(t/2)%ns.length]/12)*200
  var z = Math.pow(2,zs[Math.floor(t*4)%zs.length]/12)*100
  return 2*(0
    + sin_(sin(20),t%1+5)*Math.pow((1-saw(r0))*0.5,8)*0.4
      * (1.2+saw(1/8))/2
    + sin_(sin(80),t%1+1)*Math.pow((1-saw(r1))*0.5,8)*0.4
      * (1.2+saw(1/12))/2
    + sin_(sin(m0*2)+sin(m0/4),t%1/2+1+sin(2))
      * Math.pow((1-saw(8))*0.5,4)*0.2
      * (1.2+saw(1/15))/2
    + sin_(saw(m1)+sin(m1/2),t%1/4+.5+sin(2)/4)
      * Math.pow((1-saw(1/2))/2,4)*0.15
      * (1-saw(1/4))/2
    + sin_(sin(z*2)*0.2+sin(z)*0.8+sin(z/2)*0.3+sin(r0),
        (1+sin(1/4))*0.5*sin(r1)+.5)*0.1
    + sin_(sin(z)+sin(r0),sin(8)*0.5+0.2)*0.2)

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
