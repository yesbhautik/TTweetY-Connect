const _0x2c8bb9 = _0x5b6b;
(function (_0x142bfd, _0xba6abd) {
  const _0x327393 = _0x5b6b,
    _0x4a8f9e = _0x142bfd();
  while (!![]) {
    try {
      const _0xc8b17a =
        (-parseInt(_0x327393(0x146)) / 0x1) *
          (-parseInt(_0x327393(0x118)) / 0x2) +
        (parseInt(_0x327393(0x147)) / 0x3) *
          (parseInt(_0x327393(0x10d)) / 0x4) +
        parseInt(_0x327393(0x11f)) / 0x5 +
        -parseInt(_0x327393(0x111)) / 0x6 +
        -parseInt(_0x327393(0x150)) / 0x7 +
        (-parseInt(_0x327393(0x11c)) / 0x8) *
          (parseInt(_0x327393(0x12b)) / 0x9) +
        parseInt(_0x327393(0x108)) / 0xa;
      if (_0xc8b17a === _0xba6abd) break;
      else _0x4a8f9e["push"](_0x4a8f9e["shift"]());
    } catch (_0x1000ce) {
      _0x4a8f9e["push"](_0x4a8f9e["shift"]());
    }
  }
})(_0x4e91, 0x7a7b5);
const bot = require(_0x2c8bb9(0x10a)),
  {
    downloadMedia,
    uploadToTwitter,
    uploadMultipleMediaToTwitter,
    handleMediaGroup,
  } = require("../../helpers/mediaFunctions"),
  { createTwitterPoll } = require(_0x2c8bb9(0x122)),
  config = require(_0x2c8bb9(0x130)),
  groupRestrictionEnabled =
    process[_0x2c8bb9(0x11a)][_0x2c8bb9(0x115)] === _0x2c8bb9(0x14b),
  charcheckRestrictiontext =
    process[_0x2c8bb9(0x11a)][_0x2c8bb9(0x144)] == "true",
  allowedGroups = process[_0x2c8bb9(0x11a)]["ALLOWED_GROUPS"]
    [_0x2c8bb9(0x135)](",")
    [_0x2c8bb9(0x10e)]((_0x3fa830) => _0x3fa830["trim"]());
let isBotEnabled = ![];
const telegramBotToken = config[_0x2c8bb9(0x10f)],
  twitterClient = config[_0x2c8bb9(0x138)],
  restrictionKeyword = config[_0x2c8bb9(0x11b)] || _0x2c8bb9(0x14e),
  triggerKeywordLower = restrictionKeyword["toLowerCase"]();
function _0x5b6b(_0xe43e46, _0x491f6f) {
  const _0x4e918e = _0x4e91();
  return (
    (_0x5b6b = function (_0x5b6bd9, _0x309de7) {
      _0x5b6bd9 = _0x5b6bd9 - 0x105;
      let _0x32847a = _0x4e918e[_0x5b6bd9];
      return _0x32847a;
    }),
    _0x5b6b(_0xe43e46, _0x491f6f)
  );
}
let pollChatMap = {};
bot["on"](_0x2c8bb9(0x126), async (_0x5ac556) => {
  const _0x1438e1 = _0x2c8bb9;
  console[_0x1438e1(0x106)](
    _0x1438e1(0x12f),
    JSON[_0x1438e1(0x13e)](_0x5ac556, null, 0x2)
  );
  const _0x3fadab = _0x5ac556["chat"]["id"],
    _0x572554 = String(_0x3fadab),
    _0x4c1692 = _0x5ac556["poll"];
  if (!allowedGroups[_0x1438e1(0x142)](_0x572554) && groupRestrictionEnabled) {
    console["log"](
      "Poll\x20from\x20unauthorized\x20chat:\x20" + _0x3fadab + ".\x20Ignoring."
    );
    return;
  }
  const _0x362162 =
      process["env"]["BOT_TRIGGERED_KEYWORD_ENABLED"] === _0x1438e1(0x14b),
    _0x36f552 = _0x362162
      ? _0x4c1692[_0x1438e1(0x120)]
          [_0x1438e1(0x131)]()
          ["includes"](triggerKeywordLower)
      : !![];
  if (!_0x36f552) {
    console["log"](
      "Poll\x20ignored,\x20trigger\x20keyword\x20not\x20found\x20in\x20the\x20question."
    ),
      bot["sendMessage"](
        _0x3fadab,
        "Poll\x20ignored,\x20not\x20meant\x20for\x20Twitter."
      );
    return;
  }
  const _0x350fb8 = _0x4c1692["question"]
    ["replace"](new RegExp(triggerKeywordLower, "ig"), "")
    [_0x1438e1(0x14c)]();
  if (
    !_0x4c1692[_0x1438e1(0x128)] ||
    !Array[_0x1438e1(0x116)](_0x4c1692[_0x1438e1(0x128)])
  ) {
    console[_0x1438e1(0x133)](_0x1438e1(0x117)),
      bot[_0x1438e1(0x14d)](
        _0x3fadab,
        "Error:\x20Could\x20not\x20read\x20poll\x20options."
      );
    return;
  }
  const _0x118daf = _0x4c1692[_0x1438e1(0x128)][_0x1438e1(0x13c)](
    (_0x275f78) => _0x275f78[_0x1438e1(0x113)]["length"] > 0x19
  );
  if (_0x118daf[_0x1438e1(0x11e)] > 0x0) {
    const _0x2ab71e = _0x118daf[_0x1438e1(0x10e)](
      (_0x501e76, _0x322bc3) =>
        _0x322bc3 +
        0x1 +
        _0x1438e1(0x10b) +
        _0x501e76["text"] +
        _0x1438e1(0x13b) +
        _0x501e76[_0x1438e1(0x113)][_0x1438e1(0x11e)] +
        _0x1438e1(0x127)
    )[_0x1438e1(0x137)]("\x0a");
    bot[_0x1438e1(0x14d)](
      _0x3fadab,
      "Error:\x20The\x20following\x20options\x20exceed\x20the\x2025\x20character\x20limit:"
    );
    return;
  }
  const _0x2df433 = _0x4c1692["options"][_0x1438e1(0x10e)](
      (_0x1a426b) => _0x1a426b[_0x1438e1(0x113)]
    ),
    _0x16040d = Math["floor"](_0x4c1692[_0x1438e1(0x114)] / 0x3c) || 0x5a0,
    _0x2b5e7b = _0x2df433["slice"](0x0, 0x4);
  try {
    const _0x25cda3 = await createTwitterPoll(_0x350fb8, _0x2b5e7b, _0x16040d);
    console[_0x1438e1(0x106)](_0x1438e1(0x112), _0x25cda3),
      bot[_0x1438e1(0x14d)](_0x3fadab, _0x1438e1(0x151));
  } catch (_0x2f6a6c) {
    console[_0x1438e1(0x133)](_0x1438e1(0x139), _0x2f6a6c),
      bot[_0x1438e1(0x14d)](_0x3fadab, _0x1438e1(0x123));
  }
}),
  bot["on"](_0x2c8bb9(0x12a), async (_0x6fb51) => {
    const _0x1018ae = _0x2c8bb9,
      _0x2abfee = String(_0x6fb51[_0x1018ae(0x12d)]["id"]),
      _0x554f4c = _0x6fb51[_0x1018ae(0x12d)]["id"];
    if (groupRestrictionEnabled && !allowedGroups["includes"](_0x2abfee)) {
      console["log"](_0x1018ae(0x14a) + _0x2abfee),
        await bot[_0x1018ae(0x14d)](_0x554f4c, _0x1018ae(0x12c));
      return;
    }
    let _0x4986fd = _0x6fb51["text"] || _0x6fb51[_0x1018ae(0x13a)] || "";
    const _0x4d1b8f =
        process[_0x1018ae(0x11a)][_0x1018ae(0x148)] === _0x1018ae(0x14b),
      _0x3d6612 = _0x4d1b8f
        ? _0x4986fd[_0x1018ae(0x131)]()[_0x1018ae(0x142)](triggerKeywordLower)
        : !![];
    if (_0x6fb51[_0x1018ae(0x11d)]) {
      handleMediaGroup(
        _0x6fb51[_0x1018ae(0x11d)],
        _0x6fb51,
        _0x554f4c,
        _0x4986fd
      );
      return;
    } else {
      if (_0x3d6612) {
        _0x4986fd = _0x4986fd[_0x1018ae(0x143)](
          new RegExp(restrictionKeyword, "ig"),
          ""
        )[_0x1018ae(0x14c)]();
        {
          let _0x1ee079 = _0x6fb51["photo"]
              ? _0x6fb51[_0x1018ae(0x140)][_0x1018ae(0x13d)]()
              : _0x6fb51[_0x1018ae(0x149)] ||
                _0x6fb51[_0x1018ae(0x109)] ||
                _0x6fb51[_0x1018ae(0x12e)] ||
                _0x6fb51[_0x1018ae(0x134)] ||
                _0x6fb51["animation"],
            _0x375ee3 = "png";
          if (_0x6fb51[_0x1018ae(0x149)]) _0x375ee3 = _0x1018ae(0x110);
          else {
            if (
              _0x6fb51[_0x1018ae(0x109)] &&
              _0x6fb51[_0x1018ae(0x109)][_0x1018ae(0x107)] === _0x1018ae(0x14f)
            )
              (_0x1ee079 = _0x6fb51[_0x1018ae(0x109)]), (_0x375ee3 = "mp4");
            else {
              if (_0x6fb51[_0x1018ae(0x12e)]) _0x375ee3 = "mp3";
              else {
                if (_0x6fb51[_0x1018ae(0x134)]) _0x375ee3 = _0x1018ae(0x141);
                else
                  _0x6fb51[_0x1018ae(0x129)] && (_0x375ee3 = _0x1018ae(0x105));
              }
            }
          }
          if (_0x1ee079)
            try {
              const _0x40ab0c = await bot[_0x1018ae(0x121)](
                  _0x1ee079["file_id"]
                ),
                _0x2fb367 = await downloadMedia(_0x40ab0c),
                _0x597bae = await uploadToTwitter(_0x2fb367, _0x375ee3);
              _0x4986fd[_0x1018ae(0x11e)] <= 0x118
                ? (await twitterClient["v2"][_0x1018ae(0x125)]({
                    text: _0x4986fd,
                    media: { media_ids: [_0x597bae] },
                  }),
                  console[_0x1018ae(0x106)](_0x1018ae(0x13f), _0x4986fd),
                  bot["sendMessage"](_0x554f4c, _0x1018ae(0x119)))
                : bot["sendMessage"](
                    _0x554f4c,
                    "Character\x20limit\x20exceeded\x20for\x20Twitter."
                  );
            } catch (_0x144b4f) {
              console[_0x1018ae(0x133)](
                "Error\x20posting\x20media\x20to\x20Twitter:",
                _0x144b4f
              ),
                bot[_0x1018ae(0x14d)](
                  _0x554f4c,
                  "Error\x20posting\x20media\x20to\x20Twitter."
                );
            }
          else {
            if (_0x4986fd)
              try {
                _0x4986fd[_0x1018ae(0x11e)] <= 0x118
                  ? (await twitterClient["v2"][_0x1018ae(0x125)](_0x4986fd),
                    console[_0x1018ae(0x106)](_0x1018ae(0x10c), _0x4986fd),
                    bot["sendMessage"](
                      _0x554f4c,
                      "Tweet\x20is\x20under\x20process."
                    ))
                  : bot[_0x1018ae(0x14d)](
                      _0x554f4c,
                      "Character\x20limit\x20exceeded\x20for\x20Twitter."
                    );
              } catch (_0x121200) {
                console[_0x1018ae(0x133)](_0x1018ae(0x145), _0x121200),
                  bot[_0x1018ae(0x14d)](_0x554f4c, _0x1018ae(0x136));
              }
          }
        }
      } else console[_0x1018ae(0x106)](_0x1018ae(0x124));
    }
  }),
  console[_0x2c8bb9(0x106)](_0x2c8bb9(0x132));
function _0x4e91() {
  const _0x43d46d = [
    "Error\x20posting\x20poll\x20to\x20Twitter.",
    "Bot\x20not\x20triggered,\x20message\x20ignored.",
    "tweet",
    "poll",
    "\x20characters)",
    "options",
    "animation",
    "message",
    "9sIYxPK",
    "This\x20bot\x20is\x20restricted\x20to\x20specific\x20groups/channels.",
    "chat",
    "audio",
    "Received\x20poll:",
    "../../config/config",
    "toLowerCase",
    "Bot\x20is\x20running...",
    "error",
    "voice",
    "split",
    "Error\x20posting\x20text\x20to\x20Twitter.",
    "join",
    "twitterClient",
    "Error\x20posting\x20poll\x20to\x20Twitter:",
    "caption",
    "\x22\x20(",
    "filter",
    "pop",
    "stringify",
    "Media\x20message\x20sent\x20to\x20Twitter\x20with\x20caption:",
    "photo",
    "ogg",
    "includes",
    "replace",
    "PRE_character_limit_checker_for_poll_options",
    "Error\x20posting\x20text\x20to\x20Twitter:",
    "2437OHeZKP",
    "93hAYDAW",
    "BOT_TRIGGERED_KEYWORD_ENABLED",
    "video",
    "Ignored\x20message\x20from\x20unauthorized\x20group/channel:\x20",
    "true",
    "trim",
    "sendMessage",
    "restrict",
    "video/mp4",
    "5576249Pebfsa",
    "Poll\x20posted\x20to\x20Twitter.",
    "gif",
    "log",
    "mime_type",
    "1600450vkHYMZ",
    "document",
    "../services/telegramBot",
    ":\x20\x22",
    "Text\x20message\x20sent\x20to\x20Twitter:",
    "96388cuIhOn",
    "map",
    "telegramBotToken",
    "mp4",
    "675570mOnnca",
    "Twitter\x20poll\x20created:",
    "text",
    "open_period",
    "GROUP_RESTRICTION",
    "isArray",
    "Error:\x20poll.options\x20is\x20undefined\x20or\x20not\x20an\x20array",
    "154LfkRTe",
    "Tweet\x20with\x20media\x20is\x20under\x20process.",
    "env",
    "botTriggeredKeyword",
    "3102024bxQEVo",
    "media_group_id",
    "length",
    "3519695HpJXDI",
    "question",
    "getFileLink",
    "../../helpers/pollFunctions",
  ];
  _0x4e91 = function () {
    return _0x43d46d;
  };
  return _0x4e91();
}
