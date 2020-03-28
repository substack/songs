var rss = [
  [1,8,1,2, 4,8,1,2 ],
  [1,12,2,4, 1,2,1,3 ]
]
var ms = [0,9,-5,3]
var bss = [
  [0,-10,1,3, -3,-22,-4,-20, -22,-20,-8,-7],
  [-10,-11,-8,-20, -5,-20,-3,-22],
  [
    4,8,-3,11, -20,-22,-20,-22, -10,-11,1,-10,
    13,12,-5,-8, -10,3,-11,-8
  ]
]

return function (t) {
  var rs = rss[Math.floor(t/8)%rss.length]
  var r0 = rs[Math.floor(t*4)%rs.length]
  var m0 = Math.pow(2,ms[Math.floor(t*4)%ms.length]/12)
  var bs = bss[Math.floor(t/10)%bss.length]
  var b0 = Math.pow(2,bs[Math.floor(t*4)%bs.length]/12)
  var v = t%16 > 8 ? b0*200 : m0*100
  return 0
    + sin_(sin(v),(t*r0*8%1)+0.5)
      * Math.pow((1-saw(r0*2))*0.5,8)*0.4
    + sin_(sin(1317)+sin(13),t%1+100)*Math.pow((1-saw(r0))*0.5,8)*0.2
    + sin_(sin(120*m0)+sin(60*m0)+tri(480*m0),(t*r0*2%1)+0.1)
      * Math.pow((1-saw(8))*0.5,4)*0.2
    + sin_(tri(80*b0)+tri(160*b0),(t%1)*0.25+0.1)*0.3

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
