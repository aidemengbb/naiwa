// ============================================================
// 《蛙之港湾》第一章：小卖部
// 剧情：用户提供（分镜8张）· 图7/图8文案由 ZCode 补全
// 分支：去帮忙 → 交到朋友（图7） / 看着 → 独自回家（图8）
// ============================================================

const CHAPTERS = {
  "ch1": {
    title: "第一章 · 小卖部",
    code: "NG-RC85-TYTJ",
    start: "store1",
    scenes: {

    // ---------- 图1：黄昏街道 ----------
    store1: [
      { bg: "cg/store1", name: "奶蛙", text: "妈妈，给我点钱去买东西呗！" },
      { bg: "cg/store1", text: "妈妈从围裙口袋里摸出一块钱，塞进他手心。" },
      { bg: "cg/store1", name: "妈妈", text: "别乱花啊。" },
      { bg: "cg/store1", name: "奶蛙", text: "知道啦！" },
      { bg: "cg/store1", text: "奶蛙捏着那一块钱，蹦蹦跳跳往村口的小卖部跑。夕阳把影子拉得老长。", next: "store2" },
    ],

    // ---------- 图2：便利店（黑化过渡） ----------
    store2: [
      { bg: "cg/store2", fade: "black", name: "奶蛙", text: "老板！来包牛奶糖！" },
      { bg: "cg/store2", text: "奶蛙蹦到柜台前，笑得眼睛弯弯的。", next: "store3" },
    ],

    // ---------- 图3：收银台 ----------
    store3: [
      { bg: "cg/store3", name: "老板", text: "一块钱。" },
      { bg: "cg/store3", name: "奶蛙", text: "好嘞！" },
      { bg: "cg/store3", text: "奶蛙把手伸进口袋——", next: "store4" },
    ],

    // ---------- 图4：钱不见了 ----------
    store4: [
      { bg: "cg/store4", text: "咦？空了。" },
      { bg: "cg/store4", name: "奶蛙", text: "……去哪了？", voice: "v_naigua_lost" },
      { bg: "cg/store4", text: "钱不见了。口袋里空空荡荡，只有一小撮线头。" },
      { bg: "cg/store4", text: "奶蛙盯着空口袋，站在原地，有点想哭。", choice: [
        { text: "去帮忙", goto: "store_help" },
        { text: "看着", goto: "store5" },
      ]},
    ],

    // ---------- 图5：找不到钱 ----------
    store5: [
      { bg: "cg/store5", name: "奶蛙", text: "老板，我找不到钱了……" },
      { bg: "cg/store5", name: "老板", text: "找找？是不是掉路上了？" },
      { bg: "cg/store5", text: "奶蛙低下头，把口袋翻了个底朝天。" },
      { bg: "cg/store5", text: "奶蛙低着头，不知道该怎么办。", choice: [
        { text: "去帮忙", goto: "store_help" },
        { text: "看着", goto: "store6" },
      ]},
    ],

    // ---------- 图6：老板免单 ----------
    store6: [
      { bg: "cg/store6", name: "老板", text: "快走吧，我不要你钱了。下次来买。" },
      { bg: "cg/store6", name: "奶蛙", text: "可是……" },
      { bg: "cg/store6", name: "老板", text: "回家吧，天要黑了。" },
      { bg: "cg/store6", text: "奶蛙站在门口，低着头，舍不得走。", choice: [
        { text: "去帮忙", goto: "store_help" },
        { text: "看着", goto: "store_end" },
      ]},
    ],

    // ---------- 图7：去帮忙（牛来登场，帮奶蛙） ----------
    store_help: [
      { bg: "cg/store4", fade: "black", text: "这时，门口响起一个声音——" },
      { bg: "cg/store4", name: "牛来", text: "喂！你在这儿站半天了，咋啦？" },
      { bg: "cg/store4", name: "奶蛙", text: "……我的钱丢了。买不了糖了。" },
      { bg: "cg/store4", name: "牛来", text: "就这事儿？我请你！" },
      { bg: "cg/store4", name: "奶蛙", text: "啊？" },
      { bg: "cg/store4", name: "牛来", text: "老板！来两包牛奶糖！" },
      { bg: "cg/store4", name: "老板", text: "……一块钱一包。" },
      { bg: "cg/store4", text: "牛来掏出两块钱，放到柜台上。" },
      { bg: "cg/store4", name: "牛来", text: "走，一人一包，回家！" },
      { bg: "cg/store4", name: "奶蛙", text: "……谢谢。" },
      { bg: "cg/store4", name: "牛来", text: "谢啥！" },
      { bg: "cg/store7", text: "回家的路上，晚霞把两个影子拉得很长。牛来把零食分给奶蛙一半。", voice: "v_naigua_share" },
      { bg: "cg/store7", name: "奶蛙", text: "牛奶糖真甜。" },
      { bg: "cg/store7", name: "牛来", text: "那当然！" },
      { bg: "cg/store7", text: "奶蛙笑了。这是他今天第一次笑。", end: "help" },
    ],

    // ---------- 图8：看着（结局·看） ----------
    store_end: [
      { bg: "cg/store8", text: "奶蛙低着头，一个人走出便利店。", voice: "v_naigua_alone" },
      { bg: "cg/store8", text: "口袋还是空的。但他摸到了另一颗糖——早上出门，妈妈塞给他的那颗。" },
      { bg: "cg/store8", text: "他剥开糖纸，放进嘴里。" },
      { bg: "cg/store8", name: "奶蛙", text: "……甜的。" },
      { bg: "cg/store8", text: "他抬头，看见黄昏的太阳正慢慢往下沉，像一颗化开的糖。", end: "watch" },
    ],
    }
  },
  "ch2": {
    title: "测试",
    code: "NG-8QAM-CGAU",
    start: "scene1",
    scenes: {
      scene1: [
        { bg: "cg/test_s1", choice: [{"text": "你好测试", "goto": "scene2"}] }
      ],
      scene2: [
        { bg: "cg/test_s2", text: "测试0", voice: "test_v0.mp3" },
        { text: "测试1", voice: "test_v1.mp3" },
        { name: "收旧", text: "测试3", next: "scene3" }
      ],
      scene3: [
        { bg: "cg/test_s3", next: "scene4" }
      ],
      scene4: [
        { next: "scene5" }
      ],
      scene5: [
        { bg: "cg/test_s4", text: "测试0" },
        { text: "测试1", end: "测试结束" }
      ]
    }
  }
};
// ============================================================
// 杂项（🎲 随意小故事，不设解锁，直接可玩）
// 每项：{ title: 故事名, cover: 封面图, start: 起始场景, scenes: {...} }
// 由编辑器的"杂项"项目导出后接入
// ============================================================
const EXTRAS = {};
