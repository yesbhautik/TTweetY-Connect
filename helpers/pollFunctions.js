const _0x217409 = _0x4da6;
function _0x4da6(_0x357f76, _0x1cecfe) {
  const _0x1ca236 = _0x1ca2();
  return (
    (_0x4da6 = function (_0x4da6e7, _0x41a944) {
      _0x4da6e7 = _0x4da6e7 - 0xcb;
      let _0x1ca08c = _0x1ca236[_0x4da6e7];
      return _0x1ca08c;
    }),
    _0x4da6(_0x357f76, _0x1cecfe)
  );
}
(function (_0x3e3cb6, _0x1649fb) {
  const _0x23b8ef = _0x4da6,
    _0x16ffcc = _0x3e3cb6();
  while (!![]) {
    try {
      const _0x33ff00 =
        parseInt(_0x23b8ef(0xcb)) / 0x1 +
        parseInt(_0x23b8ef(0xd6)) / 0x2 +
        (-parseInt(_0x23b8ef(0xda)) / 0x3) * (parseInt(_0x23b8ef(0xd8)) / 0x4) +
        (-parseInt(_0x23b8ef(0xd4)) / 0x5) *
          (-parseInt(_0x23b8ef(0xd2)) / 0x6) +
        -parseInt(_0x23b8ef(0xd3)) / 0x7 +
        -parseInt(_0x23b8ef(0xd9)) / 0x8 +
        (-parseInt(_0x23b8ef(0xd7)) / 0x9) * (-parseInt(_0x23b8ef(0xcc)) / 0xa);
      if (_0x33ff00 === _0x1649fb) break;
      else _0x16ffcc["push"](_0x16ffcc["shift"]());
    } catch (_0x47f4c0) {
      _0x16ffcc["push"](_0x16ffcc["shift"]());
    }
  }
})(_0x1ca2, 0x1a83e);
const twitterClient = require("../src/services/twitterClient"),
  bot = require("../src/services/telegramBot");
async function createTwitterPoll(_0x2e8e03, _0x1f2b0d, _0x3d147a) {
  const _0x2158fd = _0x4da6;
  try {
    const _0x1f6c0e = Math[_0x2158fd(0xd5)](
        0x5,
        Math[_0x2158fd(0xcd)](_0x3d147a, 0x3c * 0x18 * 0x7)
      ),
      _0x3af5da = {
        text: _0x2e8e03,
        poll: { options: _0x1f2b0d, duration_minutes: _0x1f6c0e },
      },
      _0x1e30d7 = await twitterClient["v2"][_0x2158fd(0xcf)](_0x3af5da);
    return _0x1e30d7[_0x2158fd(0xd1)];
  } catch (_0x4367b7) {
    console["error"](_0x2158fd(0xce), _0x4367b7);
    throw _0x4367b7;
  }
}
module[_0x217409(0xd0)] = { createTwitterPoll: createTwitterPoll };
function _0x1ca2() {
  const _0x59c9a6 = [
    "tweet",
    "exports",
    "data",
    "150JssbsB",
    "290549dRRXXe",
    "1290GCaRNN",
    "max",
    "150230EuWCtW",
    "27VLVKgc",
    "40pZRPEu",
    "578552ldfOTT",
    "18357HRtXPP",
    "194050rpiDCj",
    "26690RDjasa",
    "min",
    "Error\x20creating\x20Twitter\x20poll:",
  ];
  _0x1ca2 = function () {
    return _0x59c9a6;
  };
  return _0x1ca2();
}
