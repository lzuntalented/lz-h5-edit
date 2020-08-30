from psd_tools import PSDImage
import json
import sys
import time
import random

psdPath = sys.argv[1]
destPath = sys.argv[2]
width = int(sys.argv[3])
height = int(sys.argv[4])
convertPng = bool(sys.argv[5])

def getRate(origin, dest, mode) :
  rateWidth = dest.width / origin.width
  rateHeight = dest.height / origin.height

  if mode == 1:
    return rateWidth
  if mode == 2:
    return rateHeight
  return 1

def converWithRate(val, rate, noChange) :
  result = val * rate
  if noChange :
    return result
  if result < 1 :
    return 1
  return result

psd = PSDImage.open(psdPath)
children = psd.descendants()

class DestSize :
  width = width
  height = height

rate = getRate(psd, DestSize(), 1)

info = []
i = 1
for layer in children:
  if layer.is_group() == False :
    if layer.is_visible :
      randomStr = ''.join(random.sample('zyxwvutsrqponmlkjihgfedcba0123456789',10))
      name = "%d-%s-%s.png" % (int(round(time.time() * 1000)),  randomStr, i)
      which = "%s/%s" % (destPath, name)
      item = {
        "which" : which,
        "name" : name,
        "width" : converWithRate(layer.width, rate, False),
        "height" : converWithRate(layer.height, rate, False),
        "top" : converWithRate(layer.top, rate, True),
        "left" : converWithRate(layer.left, rate, True),
        "type": layer.kind,
        "ow": layer.width,
        "oh": layer.height,
        "text": ""
      }
      if layer.kind == 'type' :
        if convertPng :
          layer_image = layer.composite()
          layer_image.save(which)
        else :
          item["text"] = layer.text
          item["fontSize"] = "%s" % layer.engine_dict['StyleRun']['RunArray'][0]["StyleSheet"]["StyleSheetData"]["FontSize"]
          fillColorValue = layer.engine_dict['StyleRun']['RunArray'][0]["StyleSheet"]["StyleSheetData"]["FillColor"]["Values"]
          color = []
          for v in fillColorValue :
            color.append("%s" % v) 
          item["fillColor"]  = color
      else :
        layer_image = layer.composite()
        layer_image.save(which)
        # print('lz')
      info.append(item)
    i = i + 1
# print(json.dumps(info))
print(json.dumps({
  "size": {
    "width": psd.width,
    "height": psd.height,
  },
  "list": info,
}))
# images
