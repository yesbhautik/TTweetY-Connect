function _0x4a27() {
  const _0x22ef16 = [
    "chat",
    "video/mp4",
    "Error\x20posting\x20text\x20to\x20Twitter:",
    "pop",
    "mp3",
    "sendMessage",
    "Poll\x20from\x20unauthorized\x20chat:\x20",
    "mp4",
    "\x22\x20(",
    "This\x20bot\x20is\x20restricted\x20to\x20specific\x20groups/channels.",
    "Failed\x20to\x20post\x20introduction\x20tweet:",
    "trim",
    "Media\x20message\x20sent\x20to\x20Twitter\x20with\x20caption:",
    "catch",
    "media_group_id",
    "length",
    "PRE_character_limit_checker_for_poll_options",
    "Tweet\x20is\x20under\x20process.",
    "tweet",
    "env",
    "poll",
    "254364Gagmuh",
    "map",
    "Poll\x20ignored,\x20trigger\x20keyword\x20not\x20found\x20in\x20the\x20question.",
    "then",
    "error",
    "Error\x20posting\x20poll\x20to\x20Twitter.",
    "message",
    "-\x20Make\x20sure\x20your\x20messages\x20don\x27t\x20exceed\x20Twitter\x27s\x20character\x20limit!\x0a",
    "true",
    "open_period",
    "question",
    "357353SPhKwP",
    "Ignored\x20message\x20from\x20unauthorized\x20group/channel:\x20",
    "For\x20more\x20information\x20on\x20how\x20to\x20use\x20me,\x20type\x20/help.\x0a",
    "264fsfGOw",
    "1699040ocQgUL",
    "botTriggeredKeyword",
    "filter",
    "floor",
    "voice",
    "Error:\x20poll.options\x20is\x20undefined\x20or\x20not\x20an\x20array",
    "getFileLink",
    "/start",
    "Bot\x20not\x20triggered,\x20message\x20ignored.",
    "Error:\x20Could\x20not\x20read\x20poll\x20options.",
    "4018HTIfOP",
    "Hey,\x20hey!\x20It\x27s\x20TTweetY\x20Connect!\x0a",
    "Error\x20posting\x20text\x20to\x20Twitter.",
    "twitterClient",
    "video",
    "Character\x20limit\x20exceeded\x20for\x20Twitter.",
    "text",
    "ogg",
    "../services/telegramBot",
    "2682232dDVpQS",
    "Here\x27s\x20how\x20you\x20can\x20use\x20me:\x0a",
    "document",
    "BOT_TRIGGERED_KEYWORD_ENABLED",
    "split",
    "../../config/config",
    "ALLOWED_GROUPS",
    "-\x20If\x20you\x20have\x20mentioned\x20the\x20keyword\x20in\x20env\x20for\x20restricting\x20the\x20bot,\x20then\x20you\x20have\x20to\x20mention\x20that\x20keyword\x20before\x20the\x20message.\x0a",
    "log",
    "Hey,\x20hey!\x20It\x27s\x20TTweetY\x20Connect!\x20This\x20bot\x20is\x20by\x20developed\x20@yesbhautik\x20(YesbhautikX\x20Team).\x20Stay\x20tuned\x20for\x20updates.\x20#yesbhautik\x20#YesbhautikX\x20#ttweetyconnect",
    "828uZJruM",
    "toLowerCase",
    "restrict",
    "mime_type",
    "3156320RxSiNB",
    "2094dGKbHV",
    "photo",
    "For\x20more\x20connect\x20@yesbhautik",
    "GROUP_RESTRICTION",
    "caption",
    "\x20characters)",
    "Text\x20message\x20sent\x20to\x20Twitter:",
    "Error\x20posting\x20media\x20to\x20Twitter.",
    "Twitter\x20poll\x20created:",
    "isArray",
    "includes",
    "options",
    "slice",
    "animation",
    "-\x20Use\x20/start\x20to\x20see\x20the\x20welcome\x20message\x20again.\x0a",
    "Poll\x20posted\x20to\x20Twitter.",
    "join",
    "I\x27m\x20here\x20to\x20help\x20you\x20connect\x20with\x20Twitter\x20directly\x20from\x20Telegram.\x0a",
    "9bLAbzh",
    "stringify",
    "audio",
  ];
  _0x4a27 = function () {
    return _0x22ef16;
  };
  return _0x4a27();
}
const _0x544a97 = _0x3113;
(function (_0x20f0f5, _0x435db4) {
  const _0x2c1292 = _0x3113,
    _0x2eae9f = _0x20f0f5();
  while (!![]) {
    try {
      const _0x574282 =
        parseInt(_0x2c1292(0x129)) / 0x1 +
        (parseInt(_0x2c1292(0xf4)) / 0x2) * (parseInt(_0x2c1292(0xef)) / 0x3) +
        -parseInt(_0x2c1292(0x11e)) / 0x4 +
        -parseInt(_0x2c1292(0x12d)) / 0x5 +
        (-parseInt(_0x2c1292(0x12c)) / 0x6) *
          (parseInt(_0x2c1292(0x137)) / 0x7) +
        (parseInt(_0x2c1292(0x140)) / 0x8) *
          (-parseInt(_0x2c1292(0x106)) / 0x9) +
        parseInt(_0x2c1292(0xf3)) / 0xa;
      if (_0x574282 === _0x435db4) break;
      else _0x2eae9f["push"](_0x2eae9f["shift"]());
    } catch (_0x2fc209) {
      _0x2eae9f["push"](_0x2eae9f["shift"]());
    }
  }
})(_0x4a27, 0x30587);
const bot = require(_0x544a97(0x13f)),
  {
    downloadMedia,
    uploadToTwitter,
    uploadMultipleMediaToTwitter,
    handleMediaGroup,
  } = require("../../helpers/mediaFunctions"),
  { createTwitterPoll } = require("../../helpers/pollFunctions"),
  config = require(_0x544a97(0x145)),
  groupRestrictionEnabled =
    process[_0x544a97(0x11c)][_0x544a97(0xf7)] === _0x544a97(0x126),
  charcheckRestrictiontext =
    process[_0x544a97(0x11c)][_0x544a97(0x119)] == "true",
  allowedGroups = process["env"][_0x544a97(0x146)]
    [_0x544a97(0x144)](",")
    ["map"]((_0x38c80c) => _0x38c80c["trim"]());
let isBotEnabled = ![];
const telegramBotToken = config["telegramBotToken"],
  twitterClient = config[_0x544a97(0x13a)],
  restrictionKeyword = config[_0x544a97(0x12e)] || _0x544a97(0xf1),
  triggerKeywordLower = restrictionKeyword[_0x544a97(0xf0)]();
function _0x3113(_0x514495, _0x552641) {
  const _0x4a272b = _0x4a27();
  return (
    (_0x3113 = function (_0x311339, _0x4200e2) {
      _0x311339 = _0x311339 - 0xee;
      let _0x219aad = _0x4a272b[_0x311339];
      return _0x219aad;
    }),
    _0x3113(_0x514495, _0x552641)
  );
}
let pollChatMap = {};
bot["on"](_0x544a97(0x11d), async (_0x2fdae4) => {
  const _0x5324d6 = _0x544a97;
  console[_0x5324d6(0x148)](
    "Received\x20poll:",
    JSON[_0x5324d6(0x107)](_0x2fdae4, null, 0x2)
  );
  const _0x352bd8 = _0x2fdae4["chat"]["id"],
    _0x3974ac = String(_0x352bd8),
    _0x1b62e9 = _0x2fdae4[_0x5324d6(0x11d)];
  if (!allowedGroups[_0x5324d6(0xfe)](_0x3974ac) && groupRestrictionEnabled) {
    console[_0x5324d6(0x148)](_0x5324d6(0x10f) + _0x352bd8 + ".\x20Ignoring.");
    return;
  }
  const _0x1437a1 =
      process[_0x5324d6(0x11c)]["BOT_TRIGGERED_KEYWORD_ENABLED"] ===
      _0x5324d6(0x126),
    _0x3c6f65 = _0x1437a1
      ? _0x1b62e9[_0x5324d6(0x128)]
          ["toLowerCase"]()
          [_0x5324d6(0xfe)](triggerKeywordLower)
      : !![];
  if (!_0x3c6f65) {
    console[_0x5324d6(0x148)](_0x5324d6(0x120)),
      bot[_0x5324d6(0x10e)](
        _0x352bd8,
        "Poll\x20ignored,\x20not\x20meant\x20for\x20Twitter."
      );
    return;
  }
  const _0x23138a = _0x1b62e9[_0x5324d6(0x128)]
    ["replace"](new RegExp(triggerKeywordLower, "ig"), "")
    [_0x5324d6(0x114)]();
  if (
    !_0x1b62e9[_0x5324d6(0xff)] ||
    !Array[_0x5324d6(0xfd)](_0x1b62e9[_0x5324d6(0xff)])
  ) {
    console[_0x5324d6(0x122)](_0x5324d6(0x132)),
      bot["sendMessage"](_0x352bd8, _0x5324d6(0x136));
    return;
  }
  const _0x576d33 = _0x1b62e9[_0x5324d6(0xff)][_0x5324d6(0x12f)](
    (_0x76bced) => _0x76bced[_0x5324d6(0x13d)][_0x5324d6(0x118)] > 0x19
  );
  if (_0x576d33[_0x5324d6(0x118)] > 0x0) {
    const _0x35399c = _0x576d33[_0x5324d6(0x11f)](
      (_0x451a0e, _0x5bf4a7) =>
        _0x5bf4a7 +
        0x1 +
        ":\x20\x22" +
        _0x451a0e[_0x5324d6(0x13d)] +
        _0x5324d6(0x111) +
        _0x451a0e["text"][_0x5324d6(0x118)] +
        _0x5324d6(0xf9)
    )[_0x5324d6(0x104)]("\x0a");
    bot[_0x5324d6(0x10e)](
      _0x352bd8,
      "Error:\x20The\x20following\x20options\x20exceed\x20the\x2025\x20character\x20limit:"
    );
    return;
  }
  const _0x4a2756 = _0x1b62e9["options"]["map"](
      (_0x1fdba8) => _0x1fdba8[_0x5324d6(0x13d)]
    ),
    _0x3a27e6 =
      Math[_0x5324d6(0x130)](_0x1b62e9[_0x5324d6(0x127)] / 0x3c) || 0x5a0,
    _0x395003 = _0x4a2756[_0x5324d6(0x100)](0x0, 0x4);
  try {
    const _0xb4d811 = await createTwitterPoll(_0x23138a, _0x395003, _0x3a27e6);
    console[_0x5324d6(0x148)](_0x5324d6(0xfc), _0xb4d811),
      bot[_0x5324d6(0x10e)](_0x352bd8, _0x5324d6(0x103));
  } catch (_0x40e682) {
    console["error"]("Error\x20posting\x20poll\x20to\x20Twitter:", _0x40e682),
      bot[_0x5324d6(0x10e)](_0x352bd8, _0x5324d6(0x123));
  }
}),
  bot["on"](_0x544a97(0x124), async (_0x171013) => {
    const _0x1ef464 = _0x544a97,
      _0x419877 = String(_0x171013["chat"]["id"]),
      _0x4227f8 = _0x171013[_0x1ef464(0x109)]["id"];
    if (groupRestrictionEnabled && !allowedGroups[_0x1ef464(0xfe)](_0x419877)) {
      console[_0x1ef464(0x148)](_0x1ef464(0x12a) + _0x419877),
        await bot[_0x1ef464(0x10e)](_0x4227f8, _0x1ef464(0x112));
      return;
    }
    let _0x528e84 =
      _0x171013[_0x1ef464(0x13d)] || _0x171013[_0x1ef464(0xf8)] || "";
    const _0x2f287c = process["env"][_0x1ef464(0x143)] === "true",
      _0x400c20 = _0x2f287c
        ? _0x528e84[_0x1ef464(0xf0)]()[_0x1ef464(0xfe)](triggerKeywordLower)
        : !![];
    if (_0x171013[_0x1ef464(0x117)]) {
      handleMediaGroup(
        _0x171013[_0x1ef464(0x117)],
        _0x171013,
        _0x4227f8,
        _0x528e84
      );
      return;
    } else {
      if (_0x400c20) {
        _0x528e84 = _0x528e84["replace"](
          new RegExp(restrictionKeyword, "ig"),
          ""
        )["trim"]();
        {
          let _0x2dce4a = _0x171013[_0x1ef464(0xf5)]
              ? _0x171013["photo"][_0x1ef464(0x10c)]()
              : _0x171013[_0x1ef464(0x13b)] ||
                _0x171013["document"] ||
                _0x171013[_0x1ef464(0x108)] ||
                _0x171013[_0x1ef464(0x131)] ||
                _0x171013["animation"],
            _0x23af8f = "png";
          if (_0x171013[_0x1ef464(0x13b)]) _0x23af8f = _0x1ef464(0x110);
          else {
            if (
              _0x171013[_0x1ef464(0x142)] &&
              _0x171013[_0x1ef464(0x142)][_0x1ef464(0xf2)] === _0x1ef464(0x10a)
            )
              (_0x2dce4a = _0x171013[_0x1ef464(0x142)]),
                (_0x23af8f = _0x1ef464(0x110));
            else {
              if (_0x171013[_0x1ef464(0x108)]) _0x23af8f = _0x1ef464(0x10d);
              else {
                if (_0x171013[_0x1ef464(0x131)]) _0x23af8f = _0x1ef464(0x13e);
                else _0x171013[_0x1ef464(0x101)] && (_0x23af8f = "gif");
              }
            }
          }
          if (_0x2dce4a)
            try {
              const _0x29cbf7 = await bot[_0x1ef464(0x133)](
                  _0x2dce4a["file_id"]
                ),
                _0x5eeba7 = await downloadMedia(_0x29cbf7),
                _0x32faa1 = await uploadToTwitter(_0x5eeba7, _0x23af8f);
              _0x528e84[_0x1ef464(0x118)] <= 0x118
                ? (await twitterClient["v2"]["tweet"]({
                    text: _0x528e84,
                    media: { media_ids: [_0x32faa1] },
                  }),
                  console[_0x1ef464(0x148)](_0x1ef464(0x115), _0x528e84),
                  bot[_0x1ef464(0x10e)](
                    _0x4227f8,
                    "Tweet\x20with\x20media\x20is\x20under\x20process."
                  ))
                : bot["sendMessage"](_0x4227f8, _0x1ef464(0x13c));
            } catch (_0x53af73) {
              console["error"](
                "Error\x20posting\x20media\x20to\x20Twitter:",
                _0x53af73
              ),
                bot[_0x1ef464(0x10e)](_0x4227f8, _0x1ef464(0xfb));
            }
          else {
            if (_0x528e84)
              try {
                _0x528e84["length"] <= 0x118
                  ? (await twitterClient["v2"][_0x1ef464(0x11b)](_0x528e84),
                    console[_0x1ef464(0x148)](_0x1ef464(0xfa), _0x528e84),
                    bot["sendMessage"](_0x4227f8, _0x1ef464(0x11a)))
                  : bot[_0x1ef464(0x10e)](
                      _0x4227f8,
                      "Character\x20limit\x20exceeded\x20for\x20Twitter."
                    );
              } catch (_0x180730) {
                console[_0x1ef464(0x122)](_0x1ef464(0x10b), _0x180730),
                  bot[_0x1ef464(0x10e)](_0x4227f8, _0x1ef464(0x139));
              }
          }
        }
      } else console[_0x1ef464(0x148)](_0x1ef464(0x135));
    }
  }),
  bot["on"](_0x544a97(0x124), async (_0x4d3ffe) => {
    const _0x313a92 = _0x544a97,
      _0x1fa1c0 = _0x4d3ffe[_0x313a92(0x109)]["id"];
    let _0x5ae125 =
      _0x4d3ffe[_0x313a92(0x13d)] || _0x4d3ffe[_0x313a92(0xf8)] || "";
    if (_0x5ae125 === _0x313a92(0x134)) {
      const _0x1539d5 =
        _0x313a92(0x138) +
        _0x313a92(0x105) +
        _0x313a92(0x12b) +
        _0x313a92(0xf6);
      await bot[_0x313a92(0x10e)](_0x1fa1c0, _0x1539d5);
      return;
    }
    if (_0x5ae125 === "/help") {
      const _0x2ebc84 =
        _0x313a92(0x141) +
        "-\x20Simply\x20send\x20a\x20message\x20or\x20media,\x20and\x20I\x27ll\x20post\x20it\x20to\x20Twitter.\x0a" +
        _0x313a92(0x102) +
        _0x313a92(0x147) +
        _0x313a92(0x125) +
        "-\x20For\x20any\x20queries,\x20connect\x20@yesbhautik";
      await bot[_0x313a92(0x10e)](_0x1fa1c0, _0x2ebc84);
      return;
    }
  }),
  console["log"]("Bot\x20is\x20running...");
const introText = _0x544a97(0xee);
twitterClient["v2"]
  [_0x544a97(0x11b)](introText)
  [_0x544a97(0x121)](() => console["log"]("Introduction\x20tweet\x20posted."))
  [_0x544a97(0x116)]((_0x1f1654) =>
    console[_0x544a97(0x122)](_0x544a97(0x113), _0x1f1654)
  );
