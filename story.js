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
    title: "第二章-测试",
    code: "NG-TYGG-JV5W",
    start: "scene1",
    music: "ch2_bgm.mp3",
    wallpaper: "wall_ch2",
    scenes: {
      scene1: [
        { bg: "cg/t2_s1", text: "测试下宝宝们", choice: [{"text": "跳②", "goto": "scene2"}] }
      ],
      scene2: [
        { bg: "cg/t2_s2", text: "测试 转下", next: "scene3" }
      ],
      scene3: [
        { bg: "cg/t2_s3", text: "奶龙乖—提示音", voice: "t2_v0.mp3", choice: [{"text": "跳头", "goto": "scene1"}, {"text": "下一", "goto": "scene4"}] }
      ],
      scene4: [
        { bg: "cg/t2_s4", text: "叮咚", voice: "t2_v1.mp3", end: "测试结束" }
      ]
    }
   },
  "ch3": {
    title: "龙之传说",
    code: "NG-9QAM-CGAU",
    start: "scene1",
    music: "lz_bgm.mp3",
    wallpaper: "wall_lz",
    scenes: {
    scene1: [
      { bg: "cg/lz_s1", name: "穹", text: "这口井吞了七个世纪的月光。" },
      { name: "穹", text: "老人们说井底沉着一位骑士的剑。" },
      { name: "穹", text: "那夜我来汲水，看见水面浮着一片荷叶—" },
      { name: "穹", text: "—叶心蜷着一个婴孩。", choice: [{ text: "抱起来", goto: "scene2" }, { text: "转身逃离", goto: "scene17" }] }
    ],
    scene2: [
      { bg: "cg/lz_s2", name: "穹", text: "他的脸圆圆的，像从壁画里跳出来的小神祇。", voice: "v_lz_2_1.mp3" },
      { name: "穹", text: "可他的四肢……是青蛙。" },
      { name: "穹", text: "我把他抱紧时，他忽然笑了，腮帮子挤出两个梨涡。", voice: "v_lz_2_3.mp3", next: "scene3" }
    ],
    scene3: [
      { bg: "cg/lz_s3", name: "奶蛙", text: "娘，水里的月亮比天上的甜。" },
      { name: "穹", text: "喝粥吧。" },
      { name: "奶蛙", text: "嗯。", next: "scene4" }
    ],
    scene4: [
      { bg: "cg/lz_s4", name: "村娃", text: "井里的怪物！" },
      { name: "村娃", text: "肉球！" },
      { name: "村娃", text: "魔鬼的种！" },
      { name: "奶蛙", text: "你们扔得不准。" },
      { name: "村娃2", text: "滚回井里去！", next: "scene5" }
    ],
    scene5: [
      { bg: "cg/lz_s5", name: "奶蛙", text: "肉球肉球跳进井，井底有个月亮饼……咬一口，是苦的，吐出来，是星星。", voice: "v_lz_5_1.mp3" },
      { name: "穹", text: "上来吧，地上凉。" },
      { name: "奶蛙", text: "娘，我听见剑在说话。它说……它能让我完整。", voice: "v_lz_5_3.mp3", next: "scene6" }
    ],
    scene6: [
      { bg: "cg/lz_s6", name: "奶蛙", text: "Ex aqua, ex luna, ex amore…" },
      { name: "穹", text: "你要做什么？", voice: "v_lz_6_2.mp3" },
      { name: "奶蛙", text: "我要替自己收洗。", next: "scene7" }
    ],
    scene7: [
      { bg: "cg/lz_s7", name: "奶蛙", text: "娘，他们说我是魔鬼的种。" },
      { name: "奶蛙", text: "我该成为什么？", choice: [{ text: "成为你自己", goto: "scene8" }, { text: "成为人", goto: "scene9" }] }
    ],
    scene8: [
      { bg: "cg/lz_s8", name: "穹", text: "你是我的孩子，不是青蛙也不是龙。你自己就是答案。", voice: "v_lz_8_1.mp3" },
      { name: "旁白", text: "嗯。娘，我记住了", next: "scene21" }
    ],
    scene9: [
      { bg: "cg/lz_s9", name: "穹", text: "你要……成为人。学会藏起你的蹼，压住你的声音。" },
      { name: "奶蛙", text: "......好", next: "scene10" }
    ],
    scene10: [
      { bg: "cg/lz_s10", name: "神父", text: "Exorcizamus te, omnis immundus spiritus…" },
      { name: "村民", text: "你一辈子都只能是个异类，滚回井底" },
      { name: "奶蛙", text: "娘，水是甜的。我尝过了。" },
      { name: "旁白", text: "选项已模糊处理", choice: [{ text: "立根原在破岩中", goto: "scene13" }, { text: "安能摧眉折腰事权贵", goto: "scene15" }] }
    ],
    scene11: [
      { bg: "cg/lz_s11", name: "奶蛙", text: "我用我的血，浇灌这口井。从此每个汲水的人，都会尝到我的名字。", voice: "v_lz_11_1.mp3", next: "scene12" }
    ],
    scene12: [
      { bg: "cg/lz_s12", name: "旁白", text: "井水从此是温的。" },
      { name: "旁白", text: "喝一口，有奶香、铁锈，和让人想哭的甜。" },
      { name: "旁白", text: "那些圆叶子像一群仰着脸等抱的孩子。" },
      { name: "旁白", text: "我知道，他在。", voice: "v_lz_12_4.mp3", end: "终•灵魂收束" }
    ],
    scene13: [
      { bg: "cg/lz_s13", name: "奶蛙", text: "我变成\"人\"给你们看！", voice: "v_lz_13_1.mp3" },
      { name: "旁白", text: "双手抱住淹下水的孩子们", next: "scene14" }
    ],
    scene14: [
      { bg: "cg/lz_s14", name: "穹", text: "他以一场洪水洗净了整座村庄，却把自己永远困在了石头里。他听我的话，成了\"人\"——用最不像人的方式。", end: "终•崩裂" }
    ],
    scene15: [
      { bg: "cg/lz_s15", name: "奶蛙", text: "我不认识你们。我只认识月亮。", next: "scene16" }
    ],
    scene16: [
      { bg: "cg/lz_s16", name: "穹", text: "后来我搬走了。但每个月圆夜，我都会在梦中感到脸上有凉凉的水痕。我不知道为什么。", voice: "v_lz_16_1.mp3" },
      { name: "似乎是吟游诗人", text: "据说那口井里住着\"会哭泣的月亮\"。", end: "终•哭泣之月" }
    ],
    scene17: [
      { bg: "cg/lz_s17", name: "穹", text: "我逃走了。" },
      { name: "穹", text: "我害怕那个不像人的孩子。" },
      { name: "穹", text: "没人会怪我的，那不是我的错......", voice: "v_lz_17_3.mp3", next: "scene18" }
    ],
    scene18: [
      { bg: "cg/lz_s18", name: "奶蛙", text: "————", next: "scene16" }
    ],
    scene19: [
      { bg: "cg/lz_s19", name: "旁白", text: "结束了" },
      { name: "旁白", text: "......" },
      { name: "旁白", text: "全都结束了吗......" },
      { name: "旁白", text: "似乎是她介绍了这一切" },
      { name: "旁白", text: "可他又是怎么做到的呢", next: "scene20" }
    ],
    scene21: [
      { bg: "cg/lz_s21", name: "旁白", text: "Exorcizamus te, omnis immundus spiritus…" },
      { name: "村民", text: "死奶蛙，滚回井底" },
      { name: "旁白", text: "选项已模糊处理", choice: [{ text: "粉身碎骨浑不怕", goto: "scene11" }, { text: "安能摧眉折腰事权贵", goto: "scene15" }, { text: "刑天舞干戚，猛志固常在。", goto: "scene19" }] }
    ],
    scene20: [
      { bg: "cg/lz_s20", name: "旁白", text: "似乎，这不是为普通人" },
      { name: "旁白", text: "。。。。。。" },
      { name: "旁白", text: "此时天昏地转，万物开始复苏，一切的一切，开始的开始", next: "scene22" }
    ],
    scene22: [
      { bg: "cg/lz_s22", name: "旁白", text: "这才是我们每个人所希望的真结局" },
      { name: "？？？", text: "似乎这里只剩一口破井了", end: "真•完美结局" }
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
