const levels = 
[[
  'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
  'w', 'x', 'x', 'x', 't', 'w', 'x', 't', 't', 'y', 't', 'y', 'w', 't', 'w',
  'w', 'y', 'w', 'x', 'x', 'x', 'x', 'x', 't', 'x', 'w', 'x', 'x', 'x', 'w',
  'w', 'w', 'w', 'w', 'w', 'w', 'w', 'x', 'w', 'x', 'w', 'x', 't', 'w', 'w',
  'w', 'w', 'w', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'b', 'x', 'x', 'x', 'e',
  'w', 'x', 'x', 'x', 'x', 't', 'y', 't', 'x', 'w', 't', 'w', 't', 't', 'w',
  'w', 'w', 't', 'x', 'w', 'w', 'w', 't', 'x', 't', 'x', 'x', 'x', 'y', 'w',
  'w', 'y', 'x', 'x', 'x', 'w', 'x', 'x', 'x', 'x', 'x', 't', 'w', 'w', 'w',
  'w', 'w', 'x', 't', 'x', 'w', 'x', 't', 'w', 'x', 't', 'w', 'w', 't', 'w',
  'w', 'w', 'x', 'x', 'x', 't', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'w',
  'w', 'w', 'x', 'w', 'x', 'w', 'x', 't', 'w', 'w', 'x', 't', 'x', 'w', 'w',
  'w', 'y', 'x', 'w', 'x', 'w', 'x', 'w', 'x', 'x', 'x', 'w', 'x', 't', 'w',
  'w', 'x', 'x', 'x', 'x', 'x', 'x', 'w', 'x', 'w', 'x', 'x', 'x', 'y', 'w',
  'z', 'x', 'w', 'x', 't', 'y', 'w', 'w', 'x', 's', 'y', 'w', 'w', 'x', 'w',
  'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
],[
  'w', 'w', 't', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'z', 'w', 'w', 'w', 'w',
  'w', 'x', 'x', 'x', 'x', 'w', 'w', 't', 'w', 't', 'x', 't', 'w', 'w', 'w',
  'w', 'x', 'w', 't', 'y', 'x', 'x', 'x', 'x', 'w', 'x', 'x', 't', 'w', 'w',
  'w', 't', 'w', 'w', 't', 'w', 'w', 't', 'x', 't', 'x', 'x', 'x', 'x', 'w',
  'w', 'x', 'x', 'x', 'y', 'x', 'x', 'w', 'x', 'w', 'x', 'x', 'w', 'y', 'w',
  'w', 'y', 't', 'w', 't', 'w', 'x', 't', 'x', 'w', 'b', 't', 'w', 'w', 'w',
  'w', 't', 'w', 'x', 'x', 't', 'x', 'w', 'x', 'x', 'x', 'x', 'x', 'x', 'w',
  'w', 'w', 't', 'x', 'w', 'w', 'x', 'w', 'x', 'w', 'x', 'w', 't', 'w', 'w',
  'w', 'w', 'w', 'x', 't', 'w', 'x', 't', 'x', 'x', 'y', 'w', 'x', 't', 'w',
  'w', 'w', 'w', 'x', 'w', 't', 'x', 'x', 'x', 'w', 'w', 'w', 'x', 'w', 'w',
  'w', 't', 'w', 'x', 'w', 't', 'x', 'w', 'x', 'w', 'w', 'w ', 'x', 'y', 'w',
  'w', 'y', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'w', 't', 'w', 'x', 't', 'w',
  'w', 'x', 'x', 'w', 'w', 't', 'w', 'w', 'x', 'x', 'x', 'x', 'x', 'w', 'w',
  'w', 'x', 'x', 't', 'w', 'w', 's', 'x', 'x', 'w', 'w', 'y', 't', 'w', 'w',
  'w', 'e', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
],[
  'w', 'w', 'w', 'w', 'w', 't', 'w', 'w', 't', 'w', 'w', 'w', 'w', 'w', 'w',
  'w', 'y', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'y', 'w', 'x', 'x', 'x', 'e',
  'w', 'w', 't', 'w', 't', 'b', 'w', 'w', 'w', 't', 'w', 'x', 't', 'y', 'w',
  'w', 'w', 'y', 'w', 'w', 'x', 'w', 'w', 's', 'w', 'w', 'x', 'x', 'x', 'w',
  'w', 't', 'x', 't', 'w', 'x', 'w', 'w', 'x', 't', 'w', 'd', 'w', 'b', 'w',
  'w', 't', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'w', 'y', 'w',
  'w', 'x', 'x', 't', 'w', 't', 'x', 'w', 'w', 't', 'x', 'x', 'w', 'x', 'w',
  'w', 't', 'w', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 't', 'x', 'w',
  'w', 'x', 'x', 'x', 'x', 'w', 'y', 'w', 'x', 'w', 'x', 'x', 'd', 'x', 'w',
  'w', 'x', 'w', 't', 'x', 'w', 'x', 'x', 'x', 'w', 'x', 'x', 'w', 'x', 'w',
  'w', 'x', 'w', 'w', 'x', 'w', 'x', 'w', 'x', 'x', 'x', 'x', 'w', 'x', 'w',
  'w', 'x', 'w', 'w', 'x', 'w', 'x', 'w', 'x', 'w', 'x', 'x', 'w', 'x', 'w',
  'w', 'x', 'w', 'w', 'x', 'w', 'x', 'w', 'x', 'w', 'x', 't', 'w', 'x', 'w',
  'z', 'x', 't', 'y', 'x', 'w', 'x', 'y', 'x', 'w', 'x', 'x', 'x', 'x', 'w',
  'w', 'w', 'w', 'w', 't', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'
]]

export default levels