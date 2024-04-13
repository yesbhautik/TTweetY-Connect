function _0x1a03() {
  const _0x2685a9 = [
    "botTriggeredKeyword",
    "483457lTPcvy",
    "../config/config",
    "getFileLink",
    "replace",
    "cleanedCaptions",
    "pop",
    "log",
    "arraybuffer",
    "../src/services/twitterClient",
    "Error\x20posting\x20media\x20group\x20to\x20Twitter:",
    "length",
    "231ScdzRk",
    "push",
    "2370sacaEH",
    "3030291dZvYCl",
    "keywordFound",
    "axios",
    "trim",
    "toLowerCase",
    "type",
    "Maximum\x20number\x20of\x20allowed\x20images\x20is\x204\x20only\x20on\x20Twitter,\x20so\x20please\x20send\x20at\x20max\x204\x20images.",
    "messages",
    "uploadMedia",
    "true",
    "Error\x20uploading\x20media\x20to\x20Twitter:",
    "Media\x20group\x20ignored,\x20trigger\x20keyword\x20not\x20found\x20or\x20only\x20one\x20media\x20file\x20present.",
    "map",
    "../src/services/telegramBot",
    "exports",
    "55820NCMnQH",
    "data",
    "from",
    "234svGmcu",
    "86322HiphYc",
    "media",
    "includes",
    "timer",
    "join",
    "1063472ZDGAvQ",
    "Media\x20group\x20posted\x20to\x20Twitter.",
    "file_id",
    "sendMessage",
    "restrict",
    "40zQJuzX",
    "error",
    "Uploading\x20media\x20with\x20type:",
    "get",
    "binary",
    "711lepIcy",
    "video",
    "photo",
    "235535NQPSsP",
  ];
  _0x1a03 = function () {
    return _0x2685a9;
  };
  return _0x1a03();
}
const _0x58aa14 = _0x4907;
(function (_0x532d5b, _0x40872e) {
  const _0xf82317 = _0x4907,
    _0x148e9d = _0x532d5b();
  while (!![]) {
    try {
      const _0x1f4f0c =
        -parseInt(_0xf82317(0x97)) / 0x1 +
        (parseInt(_0xf82317(0xa4)) / 0x2) * (parseInt(_0xf82317(0x82)) / 0x3) +
        (-parseInt(_0xf82317(0x8d)) / 0x4) *
          (-parseInt(_0xf82317(0x95)) / 0x5) +
        (-parseInt(_0xf82317(0x83)) / 0x6) *
          (-parseInt(_0xf82317(0xa2)) / 0x7) +
        -parseInt(_0xf82317(0x88)) / 0x8 +
        (-parseInt(_0xf82317(0x92)) / 0x9) * (parseInt(_0xf82317(0x7f)) / 0xa) +
        parseInt(_0xf82317(0xa5)) / 0xb;
      if (_0x1f4f0c === _0x40872e) break;
      else _0x148e9d["push"](_0x148e9d["shift"]());
    } catch (_0x3589cd) {
      _0x148e9d["push"](_0x148e9d["shift"]());
    }
  }
})(_0x1a03, 0x3e97f);
function _0x4907(_0x8e71de, _0x24dd4a) {
  const _0x1a03f3 = _0x1a03();
  return (
    (_0x4907 = function (_0x490713, _0x4029a6) {
      _0x490713 = _0x490713 - 0x73;
      let _0x2327cc = _0x1a03f3[_0x490713];
      return _0x2327cc;
    }),
    _0x4907(_0x8e71de, _0x24dd4a)
  );
}
const axios = require(_0x58aa14(0xa7)),
  bot = require(_0x58aa14(0x7d)),
  twitterClient = require(_0x58aa14(0x9f)),
  config = require(_0x58aa14(0x98)),
  restrictionKeyword = config[_0x58aa14(0x96)] || _0x58aa14(0x8c),
  triggerKeywordLower = restrictionKeyword[_0x58aa14(0x74)]();
async function downloadMedia(_0x5defe1) {
  const _0x2490f2 = _0x58aa14,
    _0x2db7fc = await axios[_0x2490f2(0x90)](_0x5defe1, {
      responseType: _0x2490f2(0x9e),
    });
  return Buffer[_0x2490f2(0x81)](_0x2db7fc[_0x2490f2(0x80)], _0x2490f2(0x91));
}
async function uploadToTwitter(_0x102c54, _0x31bac2) {
  const _0x28e1cb = _0x58aa14;
  console["log"](_0x28e1cb(0x8f), _0x31bac2);
  try {
    return await twitterClient["v1"][_0x28e1cb(0x78)](_0x102c54, {
      type: _0x31bac2,
    });
  } catch (_0x3deb4e) {
    console[_0x28e1cb(0x8e)](_0x28e1cb(0x7a), _0x3deb4e);
    throw _0x3deb4e;
  }
}
async function uploadMultipleMediaToTwitter(_0x23b449, _0x44bd8b) {
  const _0x5c7eca = _0x58aa14;
  let _0x2d49eb = [];
  for (const _0x2c4e53 of _0x23b449) {
    const _0x5bdda1 = await uploadToTwitter(_0x2c4e53, _0x44bd8b);
    _0x2d49eb[_0x5c7eca(0xa3)](_0x5bdda1);
  }
  return _0x2d49eb;
}
const mediaGroups = {};
async function handleMediaGroup(_0x133dcf, _0x1f081a, _0x50746a, _0x23a9f0) {
  const _0x403539 = _0x58aa14;
  !mediaGroups[_0x133dcf] &&
    (mediaGroups[_0x133dcf] = {
      messages: [],
      timer: null,
      keywordFound: ![],
      cleanedCaptions: [],
    });
  const _0x573d19 =
      process["env"]["BOT_TRIGGERED_KEYWORD_ENABLED"] === _0x403539(0x79),
    _0x378f9b = mediaGroups[_0x133dcf];
  _0x378f9b[_0x403539(0x77)][_0x403539(0xa3)](_0x1f081a);
  if (
    !_0x378f9b["keywordFound"] &&
    (_0x23a9f0["toLowerCase"]()[_0x403539(0x85)](triggerKeywordLower) ||
      !_0x573d19)
  ) {
    _0x378f9b[_0x403539(0xa6)] = !![];
    const _0x54bb1a = _0x573d19
      ? _0x23a9f0[_0x403539(0x9a)](new RegExp(triggerKeywordLower, "ig"), "")[
          "trim"
        ]()
      : _0x23a9f0[_0x403539(0x73)]();
    _0x378f9b["cleanedCaptions"]["push"](_0x54bb1a);
  } else
    _0x23a9f0[_0x403539(0x73)]() !== "" &&
      _0x378f9b[_0x403539(0x9b)][_0x403539(0xa3)](_0x23a9f0[_0x403539(0x73)]());
  clearTimeout(_0x378f9b[_0x403539(0x86)]),
    (_0x378f9b[_0x403539(0x86)] = setTimeout(async () => {
      const _0x40e8cf = _0x403539;
      if (_0x378f9b["messages"][_0x40e8cf(0xa1)] > 0x4) {
        bot[_0x40e8cf(0x8b)](_0x50746a, _0x40e8cf(0x76)),
          delete mediaGroups[_0x133dcf];
        return;
      }
      if (
        _0x378f9b[_0x40e8cf(0xa6)] &&
        _0x378f9b[_0x40e8cf(0x77)]["length"] > 0x1
      )
        try {
          const _0x16f424 = _0x378f9b[_0x40e8cf(0x77)][_0x40e8cf(0x7c)](
              (_0x4d3204) => {
                const _0x425ee0 = _0x40e8cf,
                  _0x1ad7d0 = _0x4d3204[_0x425ee0(0x94)]
                    ? _0x4d3204[_0x425ee0(0x94)][_0x425ee0(0x9c)]()
                    : _0x4d3204[_0x425ee0(0x93)];
                return {
                  media: _0x1ad7d0,
                  type: _0x4d3204["photo"] ? _0x425ee0(0x94) : _0x425ee0(0x93),
                  caption: _0x4d3204["caption"] || "",
                };
              }
            ),
            _0x1430cc = [];
          for (const _0x2ca87a of _0x16f424) {
            const _0x1df38e = await bot[_0x40e8cf(0x99)](
                _0x2ca87a[_0x40e8cf(0x84)][_0x40e8cf(0x8a)]
              ),
              _0x30f897 = await downloadMedia(_0x1df38e),
              _0x1ba8e7 = await uploadToTwitter(
                _0x30f897,
                _0x2ca87a[_0x40e8cf(0x75)]
              );
            _0x1430cc["push"](_0x1ba8e7);
          }
          const _0x46a73a = _0x378f9b[_0x40e8cf(0x9b)][_0x40e8cf(0x87)]("\x0a");
          await twitterClient["v2"]["tweet"]({
            text: _0x46a73a,
            media: { media_ids: _0x1430cc },
          }),
            console["log"](
              "Media\x20group\x20posted\x20to\x20Twitter\x20with\x20caption:",
              _0x46a73a
            ),
            bot["sendMessage"](_0x50746a, _0x40e8cf(0x89));
        } catch (_0x5c1971) {
          console[_0x40e8cf(0x8e)](_0x40e8cf(0xa0), _0x5c1971),
            bot[_0x40e8cf(0x8b)](
              _0x50746a,
              "Error\x20posting\x20media\x20group\x20to\x20Twitter."
            );
        } finally {
          delete mediaGroups[_0x133dcf];
        }
      else console[_0x40e8cf(0x9d)](_0x40e8cf(0x7b));
    }, 0x7d0));
}
module[_0x58aa14(0x7e)] = {
  downloadMedia: downloadMedia,
  uploadToTwitter: uploadToTwitter,
  uploadMultipleMediaToTwitter: uploadMultipleMediaToTwitter,
  handleMediaGroup: handleMediaGroup,
};
