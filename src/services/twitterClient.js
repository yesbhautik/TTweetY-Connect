function _0x4bd4() {
  const _0x4796f3 = [
    "100068aNelRU",
    "31928RBjFHh",
    "843cPuDIz",
    "4825464hDYKWH",
    "714670FBJkdw",
    "441lQpUHV",
    "52QWuLbF",
    "twitter-api-v2",
    "twitterApi",
    "27745jjJOhG",
    "../../config/config",
    "815880jMGnjv",
    "1912Ovtxwc",
    "11caZNgH",
    "14vBiRZk",
  ];
  _0x4bd4 = function () {
    return _0x4796f3;
  };
  return _0x4bd4();
}
const _0x4dff26 = _0x3879;
(function (_0xf18d5e, _0x363389) {
  const _0x34cdee = _0x3879,
    _0x44ba5a = _0xf18d5e();
  while (!![]) {
    try {
      const _0x7b7f4c =
        parseInt(_0x34cdee(0xa6)) / 0x1 +
        (parseInt(_0x34cdee(0xa3)) / 0x2) * (-parseInt(_0x34cdee(0xa8)) / 0x3) +
        (parseInt(_0x34cdee(0xac)) / 0x4) * (-parseInt(_0x34cdee(0xaf)) / 0x5) +
        (parseInt(_0x34cdee(0xa2)) / 0x6) * (parseInt(_0x34cdee(0xa5)) / 0x7) +
        (parseInt(_0x34cdee(0xa7)) / 0x8) * (-parseInt(_0x34cdee(0xab)) / 0x9) +
        -parseInt(_0x34cdee(0xaa)) / 0xa +
        (-parseInt(_0x34cdee(0xa4)) / 0xb) * (-parseInt(_0x34cdee(0xa9)) / 0xc);
      if (_0x7b7f4c === _0x363389) break;
      else _0x44ba5a["push"](_0x44ba5a["shift"]());
    } catch (_0x2f27ba) {
      _0x44ba5a["push"](_0x44ba5a["shift"]());
    }
  }
})(_0x4bd4, 0x289cf);
const { TwitterApi } = require(_0x4dff26(0xad)),
  config = require(_0x4dff26(0xb0)),
  twitterClient = new TwitterApi(config[_0x4dff26(0xae)]);
function _0x3879(_0x20032b, _0x127e8b) {
  const _0x4bd4bd = _0x4bd4();
  return (
    (_0x3879 = function (_0x3879c5, _0x15da38) {
      _0x3879c5 = _0x3879c5 - 0xa2;
      let _0x4d054a = _0x4bd4bd[_0x3879c5];
      return _0x4d054a;
    }),
    _0x3879(_0x20032b, _0x127e8b)
  );
}
module["exports"] = twitterClient;
