const _0x355a7e = _0x512d;
(function (_0x1a47a7, _0x59ef08) {
  const _0x12bd88 = _0x512d,
    _0x20a6b8 = _0x1a47a7();
  while (!![]) {
    try {
      const _0x3f14c8 =
        -parseInt(_0x12bd88(0x15d)) / 0x1 +
        -parseInt(_0x12bd88(0x159)) / 0x2 +
        (parseInt(_0x12bd88(0x153)) / 0x3) *
          (-parseInt(_0x12bd88(0x162)) / 0x4) +
        (-parseInt(_0x12bd88(0x152)) / 0x5) *
          (parseInt(_0x12bd88(0x15e)) / 0x6) +
        (-parseInt(_0x12bd88(0x164)) / 0x7) *
          (parseInt(_0x12bd88(0x156)) / 0x8) +
        -parseInt(_0x12bd88(0x154)) / 0x9 +
        parseInt(_0x12bd88(0x157)) / 0xa;
      if (_0x3f14c8 === _0x59ef08) break;
      else _0x20a6b8["push"](_0x20a6b8["shift"]());
    } catch (_0x2c47f9) {
      _0x20a6b8["push"](_0x20a6b8["shift"]());
    }
  }
})(_0x7f0e, 0x7becc),
  require(_0x355a7e(0x15a))["config"]();
const { TwitterApi } = require("twitter-api-v2"),
  config = {
    telegramBotToken: process[_0x355a7e(0x163)]["TELEGRAM_BOT_TOKEN"],
    twitterApi: {
      appKey: process[_0x355a7e(0x163)][_0x355a7e(0x158)],
      appSecret: process["env"][_0x355a7e(0x167)],
      accessToken: process[_0x355a7e(0x163)][_0x355a7e(0x15b)],
      accessSecret: process[_0x355a7e(0x163)][_0x355a7e(0x165)],
    },
    botTriggeredKeyword:
      process[_0x355a7e(0x163)][_0x355a7e(0x155)] || "restrict",
  };
function _0x512d(_0xf6dee3, _0x577bb7) {
  const _0x7f0ee3 = _0x7f0e();
  return (
    (_0x512d = function (_0x512d80, _0x2486d0) {
      _0x512d80 = _0x512d80 - 0x152;
      let _0x179b12 = _0x7f0ee3[_0x512d80];
      return _0x179b12;
    }),
    _0x512d(_0xf6dee3, _0x577bb7)
  );
}
(config["twitterClient"] = new TwitterApi({
  appKey: config["twitterApi"][_0x355a7e(0x160)],
  appSecret: config[_0x355a7e(0x15f)][_0x355a7e(0x161)],
  accessToken: config[_0x355a7e(0x15f)][_0x355a7e(0x15c)],
  accessSecret: config["twitterApi"][_0x355a7e(0x166)],
})),
  (module["exports"] = config);
function _0x7f0e() {
  const _0xb5d572 = [
    "TWITTER_ACCESS_TOKEN",
    "accessToken",
    "577856tjhLix",
    "502746PljEnN",
    "twitterApi",
    "appKey",
    "appSecret",
    "4TObVIm",
    "env",
    "843647Zafmmz",
    "TWITTER_ACCESS_SECRET",
    "accessSecret",
    "TWITTER_API_SECRET",
    "35lEgYep",
    "2422671shTzHb",
    "3425004oZChoC",
    "BOT_TRIGGERED_KEYWORD",
    "64tFDHpu",
    "39171030LIbXrr",
    "TWITTER_API_KEY",
    "185666JdfxMG",
    "dotenv",
  ];
  _0x7f0e = function () {
    return _0xb5d572;
  };
  return _0x7f0e();
}
