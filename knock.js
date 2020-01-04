var ms = [0,1,8,5,-3,-2,7,5]
var gs = [1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0]

return function (t) {
  var m0 = Math.pow(2,ms[Math.floor(t)%ms.length]/12)
  var m1 = Math.pow(2,ms[Math.floor(t*4)%ms.length]/12)
  var g0 = gs[Math.floor(t*4)%gs.length]
  var g1 = gs[Math.floor(t)%8+2]
  return 0
    + clamp(saw_(saw(100*m1)+saw(50*m1+.5),saw(2)*.2+.5)*g0)*0.2
    + clamp(saw_(saw(400*m0)+saw(200*m0+.5),saw(1)*.2+.5)
      * Math.pow((1-saw(1))*0.5*(1-saw(8))*0.5,3)
      * g1)*0.2
    + clamp(saw_(saw(150*m1)+saw(50*m0+.13),saw(.13)*.1+.2))*0.2
    + clamp(
      saw_(saw(1301)+sin(720),t%4+1000)*Math.pow((1-saw_(2,t+.25))*0.5,12)*2
      + sin_(sin(13)+saw(72),t%.25+1)*Math.pow((1-saw(2))*0.5,8)*4)*0.2*g1
    + clamp(
      saw_(saw(1301)+sin(720),t%4+1000)*Math.pow((1-saw_(8,t+.25))*0.5,8)*4
      + sin_(saw(13)+sin(72),t%.25+1)*Math.pow((1-saw(8))*0.5,4)*4)*0.2*g0

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
