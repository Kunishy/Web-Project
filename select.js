let optionStates = {
    bow: false,
    catalyst: false,
    claymore: false,
    pole: false,
    sword: false
};

function toggleOption(option) {
    optionStates[option] = !optionStates[option];
    for (let x in optionStates) {
        let item = document.getElementById('op' + x);
        item.setAttribute("class", optionStates[x] ? "selected-option" : "option");
    }
    updateDisplay();
}

function updateDisplay() {
    let weaponTypes = ["bow", "catalyst", "claymore", "pole", "sword"];
    let noOptionSelected = !Object.values(optionStates).some(state => state);

    weaponTypes.forEach(function (type) {
        let container = document.getElementById(type);
        container.style.display = noOptionSelected || optionStates[type] ? 'flex' : 'none';
    });
}

const gray = {
    史萊姆: ["護摩之杖", "阿莫斯之弓", "天空之傲", "天空之刃", "四風原典", "聊聊棒", "風信之鋒", "銜珠海皇",
        "暗巷獵手", "雪葬的星銀", "西風長槍", "黑劍", "笛劍", "祭禮弓", "宗室大劍", "萬國諸海圖譜",
        "神射手之誓", "魔導緒論", "白鐵大劍", "黎明神劍"],

    愚人眾: ["終末嗟嘆之詩", "和璞鳶", "貫月矢", "龍脊長槍", "腐殖之劍", "宗室獵槍", "黑岩斬刀", "鋼輪弓",
        "黑岩刺槍", "試作斬岩", "西風大劍", "宗室祕法錄", "甲級寶玨", "白纓槍", "飛天御劍"],

    盜寶團: ["磐岩結綠", "無工之劍", "貫虹之槊", "無垠蔚藍之歌", "瑪海菈的水色", "喜多院十文字", "幽夜華爾滋", "暗巷的酒與詩",
        "降臨之劍", "匣裡龍吟", "試作澹月", "流月針", "白影劍", "祭禮殘章", "信使", "翡玉法球",
        "飛天大御劍", "吃虎魚刀"],

    丘丘薩滿: ["蒼古自由之誓", "天空之脊", "狼的末路", "遺祀玉瓏", "落霞", "白辰之環", "暗巷閃光", "匣裡滅辰",
        "祭禮劍", "宗室長弓", "雨裁", "西風秘典", "黑岩緋玉", "反曲弓", "討龍英傑譚", "旅行劍"],

    丘丘射手: ["飛雷之弦振", "天空之翼", "天空之卷", "風鷹劍", "靜謐之曲", "王下近侍", "掠食者", "破魔之弓",
        "千岩古劍", "千岩長槍", "蒼翠獵弓", "試作金珀", "黑岩長槍", "祭禮大劍", "西風劍", "絕弦",
        "鴉羽弓", "黑纓槍", "沐浴龍血的劍", "冷刃"],

    丘丘: ["松籟響起之時", "斫峰之刃", "塵世之鎖", "狼牙", "辰砂之紡錘", "嘟嘟可故事集", "昭心", "弓藏",
        "試作星鐮", "宗室長劍", "試作古華", "流浪樂章", "彈弓", "異世界行記", "暗鐵劍", "以理服人"],

    騙騙花: ["息災", "峽灣長歌", "風花之頌", "忍冬果", "黑岩戰弓", "決鬥之槍", "匣裡日月", "螭骨劍",
        "鐵蜂刺", "鐘劍", "西風獵弓", "鉞矛", "鐵影闊劍"],

    野伏眾: ["波亂月白經津", "赤角石潰杵", "薙草之稻光", "霧切之回光", "海淵終曲", "東花坊時雨", "斷浪長鰭", "惡王丸",
        "桂木斬長正", "天目影打刀"],

    飄浮靈: ["若水", "神樂之真意", "冬極白星", "不滅月華", "飾鐵之花", "籠釣瓶一心", "證誓之明瞳", "曚雲之月",
        "漁獲"],

    蕈獸: ["碧落之瓏", "圖萊杜拉的回憶", "千夜浮夢", "赤沙之杖", "烈陽之嗣", "流浪的晚星", "盈滿之實", "竭澤"],

    鍍金旅團: ["葦海信標", "裁葉萃光", "聖顯之鑰", "獵人之徑", "䴉穿之喙", "西福斯的月光", "森林王器", "原木刀"],

    發條機關: ["萬世流湧大典", "勘探鑽機", "便攜動力鋸", "公義的酬報", "浪影闊劍"],

    原海異種: ["靜水流湧之輝", "金流監督", "最初的大魔術", "水仙十字聖劍", "測距規", "船塢長劍", "純水流華", "灰河渡手"]
};

const purple = {
    丘丘王: ["松籟響起之時", "終末嗟嘆之詩", "風鷹劍", "幽夜華爾滋", "暗巷閃光", "雪葬的星銀", "腐殖之劍", "蒼翠獵弓",
        "宗室長劍", "鐘劍", "西風劍", "絕弦", "西風秘典", "宗室祕法錄", "鴉羽弓", "魔導緒論",
        "冷刃", "鐵影闊劍"],

    深淵法師: ["護摩之杖", "天空之翼", "天空之傲", "天空之刃", "天空之卷", "嘟嘟可故事集", "暗巷的酒與詩", "風花之頌",
        "降臨之劍", "決鬥之槍", "黑劍", "祭禮大劍", "笛劍", "祭禮弓", "流浪樂章", "神射手之誓",
        "討龍英傑譚", "沐浴龍血的劍", "黎明神劍"],

    遺蹟守衛: ["蒼古自由之誓", "天空之脊", "阿莫斯之弓", "狼的末路", "四風原典", "狼牙", "辰砂之紡錘", "暗巷獵手",
        "忍冬果", "西風長槍", "西風大劍", "祭禮劍", "宗室長弓", "西風獵弓", "宗室大劍", "祭禮殘章",
        "反曲弓", "異世界行記", "白鐵大劍", "旅行劍"],

    螢術士: ["息災", "磐岩結綠", "無工之劍", "遺祀玉瓏", "龍脊長槍", "宗室獵槍", "黑岩斬刀", "匣裡滅辰",
        "昭心", "試作澹月", "試作金珀", "黑岩刺槍", "試作斬岩", "雨裁", "信使", "甲級寶玨",
        "鉞矛", "吃虎魚刀", "以理服人"],

    債務處理人: ["斫峰之刃", "和璞鳶", "落霞", "千岩古劍", "匣裡龍吟", "黑岩戰弓", "匣裡日月", "弓藏",
        "流月針", "黑岩長劍", "白影劍", "黑岩緋玉", "彈弓", "翡玉法球", "白纓槍", "暗鐵劍"],

    龍蜥: ["貫虹之槊", "塵世之鎖", "無垠蔚藍之歌", "銜珠海皇", "千岩長槍", "螭骨劍", "鋼輪弓", "試作星鐮",
        "鐵蜂刺", "試作古華", "萬國諸海圖譜", "黑纓槍", "飛天大御劍", "飛天御劍"],

    遺蹟機兵: ["薙草之稻光", "霧切之回光", "漁獲", "桂木斬長正", "喜多院十文字", "天目影打刀"],

    冬國仕女: ["不滅月華", "飛雷之弦振", "曚雲之月", "掠食者", "破魔之弓", "白辰之環"],

    獸境之狼: ["神樂之真意", "赤角石潰杵", "冬極白星", "證誓之明瞳", "斷浪長鰭", "惡王丸"],

    黑蛇眾: ["若水", "波亂月白經津", "風信之鋒", "盈滿之實", "籠釣瓶一心"],

    活化蕈獸: ["圖萊杜拉的回憶", "獵人之徑", "流浪的晚星", "王下近侍", "竭澤"],

    遺蹟龍獸: ["赤沙之杖", "瑪海菈的水色", "森林王器", "貫月矢", "原木刀"],

    元能構裝體: ["千夜浮夢", "聖顯之鑰", "東花坊時雨", "西福斯的月光"],

    聖骸獸: ["葦海信標", "裁葉萃光", "聊聊棒", "飾鐵之花"],

    丘丘遊俠: ["碧落之瓏", "峽灣長歌", "烈陽之嗣", "䴉穿之喙"],

    濁水幻靈: ["靜水流湧之輝", "最初的大魔術", "測距規", "靜謐之曲", "海淵終曲", "灰河渡手"],

    隙境原體: ["萬世流湧大典", "便攜動力鋸", "公義的酬報", "浪影闊劍", "純水流華"],

    役人: ["金流監督", "水仙十字聖劍", "勘探鑽機", "船塢長劍"]
};

const weapon = {
    mondstadt_mon: ["松籟響起之時", "風鷹劍", "狼牙", "辰砂之紡錘", "幽夜華爾滋", "暗巷閃光", "雪葬的星銀", "蒼翠獵弓",
        "宗室長劍", "鐘劍", "西風劍", "絕弦", "西風秘典", "宗室祕法錄", "鴉羽弓", "魔導緒論",
        "冷刃", "鐵影闊劍"],

    mondstadt_tue: ["終末嗟嘆之詩", "天空之翼", "天空之傲", "天空之刃", "天空之卷", "無垠蔚藍之歌", "風信之鋒", "嘟嘟可故事集",
        "暗巷的酒與詩", "龍脊長槍", "降臨之劍", "決鬥之槍", "黑劍", "祭禮大劍", "笛劍", "祭禮弓",
        "流浪樂章", "神射手之誓", "討龍英傑譚", "沐浴龍血的劍", "黎明神劍"],

    mondstadt_wed: ["蒼古自由之誓", "天空之脊", "阿莫斯之弓", "狼的末路", "四風原典", "飾鐵之花", "暗巷獵手", "風花之頌",
        "忍冬果", "腐殖之劍", "西風長槍", "西風大劍", "祭禮劍", "宗室長弓", "西風獵弓", "宗室大劍",
        "祭禮殘章", "反曲弓", "異世界行記", "白鐵大劍", "旅行劍"],

    liyue_mon: ["碧落之瓏", "若水", "斫峰之刃", "和璞鳶", "遺祀玉瓏", "千岩古劍", "匣裡龍吟", "黑岩戰弓",
        "匣裡日月", "弓藏", "流月針", "黑岩長劍", "白影劍", "黑岩緋玉", "彈弓", "翡玉法球",
        "白纓槍", "暗鐵劍"],

    liyue_tue: ["息災", "磐岩結綠", "無工之劍", "宗室獵槍", "黑岩斬刀", "匣裡滅辰", "昭心", "試作澹月",
        "試作金珀", "黑岩刺槍", "試作斬岩", "雨裁", "信使", "甲級寶玨", "鉞矛", "吃虎魚刀",
        "以理服人"],

    liyue_wed: ["護摩之杖", "貫虹之槊", "塵世之鎖", "落霞", "銜珠海皇", "千岩長槍", "螭骨劍", "鋼輪弓",
        "試作星鐮", "鐵鋒刺", "試作古華", "萬國諸海圖譜", "黑纓槍", "飛天大御劍", "飛天御劍"],

    inazuma_mon: ["不滅月華", "霧切之回光", "證誓之明瞳", "惡王丸", "白辰之環", "天目影打刀"],

    inazuma_tue: ["波亂月白經津", "赤角石潰杵", "飛雷之弦振", "東花坊時雨", "曚雲之月", "掠食者", "桂木斬長正", "破魔之弓"],

    inazuma_wed: ["神樂之真意", "冬極白星", "薙草之稻光", "籠釣瓶一心", "斷浪長鰭", "漁獲", "喜多院十文字"],

    sumeru_mon: ["裁葉萃光", "聖顯之鑰", "䴉穿之喙", "西福斯的月光", "森林王器", "原木刀"],

    sumeru_tue: ["千夜浮夢", "赤沙之杖", "聊聊棒", "流浪的晚星", "盈滿之實", "貫月矢"],

    sumeru_wed: ["葦海信標", "圖萊杜拉的回憶", "獵人之徑", "烈陽之嗣", "瑪海菈的水色", "王下近侍", "竭澤"],

    fontaine_mon: ["最初的大魔術", "水仙十字聖劍", "測距規", "勘探鑽機", "靜謐之曲", "灰河渡手"],

    fontaine_tue: ["靜水流湧之輝", "萬世流湧大典", "船塢長劍", "純水流華", "海淵終曲"],

    fontaine_wed: ["金流監督", "便攜動力鋸", "公義的酬報", "浪影闊劍", "峽灣長歌"],
};

const EngName = {
    "天空之翼": "Bow_Dvalin", "阿莫斯之弓": "Bow_Amos", "終末嗟嘆之詩": "Bow_Widsith", "冬極白星": "Bow_Worldbane",
    "若水": "Bow_Kirin", "飛雷之弦振": "Bow_Narukami", "獵人之徑": "Bow_Ayus", "最初的大魔術": "Bow_Pledge",
    "西風獵弓": "Bow_Zephyrus", "絕弦": "Bow_Troupe", "祭禮弓": "Bow_Fossil", "宗室長弓": "Bow_Theocrat",
    "弓藏": "Bow_Recluse", "試作澹月": "Bow_Proto", "鋼輪弓": "Bow_Exotic", "黑岩戰弓": "Bow_Blackrock",
    "蒼翠獵弓": "Bow_Viridescent", "暗巷獵手": "Bow_Outlaw", "落霞": "Bow_Fallensun", "幽夜華爾滋": "Bow_Nachtblind",
    "風花之頌": "Bow_Fleurfair", "破魔之弓": "Bow_Bakufu", "掠食者": "Bow_Predator", "曚雲之月": "Bow_Maria",
    "王下近侍": "Bow_Arakalari", "竭澤": "Bow_Fin", "䴉穿之喙": "Bow_Ibis", "烈陽之嗣": "Bow_Gurabad",
    "靜謐之曲": "Bow_Vorpal", "測距規": "Bow_Mechanic", "鴉羽弓": "Bow_Crowfeather", "神射手之誓": "Bow_Arjuna",
    "反曲弓": "Bow_Curve", "彈弓": "Bow_Sling", "信使": "Bow_Msg", "天空之卷": "Catalyst_Dvalin",
    "四風原典": "Catalyst_Fourwinds", "塵世之鎖": "Catalyst_Kunwu", "碧落之瓏": "Catalyst_Morax", "不滅月華": "Catalyst_Kaleido",
    "神樂之真意": "Catalyst_Narukami", "千夜浮夢": "Catalyst_Ayus", "圖萊杜拉的回憶": "Catalyst_Alaya", "金流監督": "Catalyst_Wheatley",
    "萬世流湧大典": "Catalyst_Iudex", "西風秘典": "Catalyst_Zephyrus", "流浪樂章": "Catalyst_Troupe", "祭禮殘章": "Catalyst_Fossil",
    "宗室祕法錄": "Catalyst_Theocrat", "匣裡日月": "Catalyst_Resurrection", "試作金珀": "Catalyst_Proto", "萬國諸海圖譜": "Catalyst_Exotic",
    "黑岩緋玉": "Catalyst_Blackrock", "昭心": "Catalyst_Truelens", "暗巷的酒與詩": "Catalyst_Outlaw", "忍冬之果": "Catalyst_Everfrost",
    "嘟嘟可故事集": "Catalyst_Ludiharpastum", "白辰之環": "Catalyst_Bakufu", "證誓之明瞳": "Catalyst_Jyanome", "流浪的晚星": "Catalyst_Pleroma",
    "盈滿之實": "Catalyst_Arakalari", "遺祀玉瓏": "Catalyst_Yue", "純水流華": "Catalyst_Vorpal", "無垠蔚藍之歌": "Catalyst_DandelionPoem",
    "魔導緒論": "Catalyst_Intro", "討龍英傑譚": "Catalyst_Pulpfic", "異世界行記": "Catalyst_Lightnov", "翡玉法球": "Catalyst_Jade",
    "甲級寶玨": "Catalyst_Phoney", "天空之傲":"Claymore_Dvalin", "狼的末路":"Claymore_Wolfmound", "松籟響起之時":"Claymore_Widsith",
    "無工之劍":"Claymore_Kunwu", "赤角石潰杵":"Claymore_Itadorimaru", "葦海信標":"Claymore_Deshret", "西風大劍":"Claymore_Zephyrus",
    "鐘劍":"Claymore_Troupe", "祭禮大劍":"Claymore_Fossil", "宗室大劍":"", "雨裁":"Claymore_Perdue",
    "試作古華":"Claymore_Proto", "白影劍":"Claymore_Exotic", "黑岩斬刀":"Claymore_Blackrock", "螭骨劍":"Claymore_Kione",
    "千岩古劍":"Claymore_Lapis", "雪葬的星銀":"Claymore_Dragonfell", "銜珠海皇":"Claymore_MillenniaTuna", "桂木斬長正":"Claymore_Bakufu",
    "瑪海菈的水色":"Claymore_Pleroma", "惡王丸":"Claymore_Maria", "森林王器":"Claymore_Arakalari", "飾鐵之花":"Claymore_Fleurfair",
    "聊聊棒":"Claymore_BeastTamer", "浪影闊劍":"Claymore_Vorpal", "便攜動力鋸":"Claymore_Mechanic", "鐵影闊劍":"Claymore_Glaive",
    "沐浴龍血的劍":"Claymore_Siegfry", "白鐵大劍":"Claymore_Tin", "以理服人":"Claymore_Reasoning", "飛天大御劍":"Claymore_Mitsurugi",
    "護摩之杖":"Pole_Homa", "天空之脊":"Pole_Dvalin", "貫虹之槊":"Pole_Kunwu", "和璞鳶":"Pole_Morax",
    "息災":"Pole_Santika", "薙草之稻光":"Pole_Narukami", "赤沙之杖":"Pole_Deshret", "匣裡滅辰":"Pole_Stardust",
    "試作星鐮":"Pole_Proto", "流月針":"Pole_Exotic", "黑岩刺槍":"Pole_Blackrock", "決鬥之槍":"Pole_Gladiator",
    "千岩長槍":"Pole_Lapis", "西風長槍":"Pole_Zephyrus", "宗室獵槍":"Pole_Theocrat", "龍脊長槍":"Pole_Everfrost",
    "喜多院十文字":"Pole_Bakufu", "漁獲":"Pole_Mori", "斷浪長鰭":"Pole_Maria", "貫月矢":"Pole_Arakalari",
    "風信之鋒":"Pole_Arakalari", "峽灣長歌":"Pole_Shanty", "公義的酬報":"Pole_Vorpal", "勘探鑽機":"Pole_Mechanic",
    "白纓槍":"Pole_Ruby", "鉞矛":"Pole_Halberd", "黑纓槍":"Pole_Noire", "風鷹劍":"Sword_Falcon",
    "天空之刃":"Sword_Dvalin", "蒼古自由之誓":"Sword_Widsith", "斫峰之刃":"Sword_Kunwu", "磐岩結綠":"Sword_Morax",
    "霧切之回光":"Sword_Narukami", "波亂月白經津":"Sword_Amenoma", "聖顯之鑰":"Sword_Deshret", "裁葉萃光":"Sword_Ayus",
    "靜水流湧之輝":"Sword_Regalis", "西風劍":"Sword_Zephyrus", "笛劍":"Sword_Troupe", "祭禮劍":"Sword_Fossil",
    "宗室長劍":"Sword_Theocrat", "匣裡龍吟":"Sword_Rockkiller", "試作斬岩":"Sword_Proto", "鐵蜂刺":"Sword_Exotic",
    "黑岩長劍":"Sword_Blackrock", "黑劍":"Sword_Bloodstained", "暗巷閃光":"Sword_Outlaw", "降臨之劍":"Sword_Psalmus",
    "腐殖之劍":"Sword_Magnum", "天目影打刀":"Sword_Bakufu", "辰砂之紡錘":"Sword_Opus", "籠釣瓶一心":"Sword_Youtou",
    "原木刀":"Sword_Arakalari", "西福斯的月光":"Sword_Pleroma", "東花坊時雨":"Sword_Kasabouzu", "狼牙":"Sword_Boreas",
    "海淵終曲":"Sword_Vorpal", "灰河渡手":"Sword_Machination", "船塢長劍":"Sword_Mechanic", "水仙十字聖劍":"Sword_Purewill",
    "冷刃":"Sword_Steel", "黎明神劍":"Sword_Dawn", "旅行劍":"Sword_Traveler", "暗鐵劍":"Sword_Darker",
    "吃虎魚刀":"Sword_Sashimi", "飛天御劍":"Sword_Mitsurugi"
};

const five = {
    money: [10, 72, 83, 123, 175, 230, 436],
    mine: [11, 63, 63, 93, 130, 176, 372],
    g1: [0, 3, 12, 0, 0, 0, 0],
    g2: [0, 0, 0, 9, 14, 0, 0],
    g3: [0, 0, 0, 0, 0, 9, 18],
    p1: [0, 5, 18, 0, 0, 0, 0],
    p2: [0, 0, 0, 9, 18, 0, 0],
    p3: [0, 0, 0, 0, 0, 14, 27],
    w1: [0, 5, 0, 0, 0, 0, 0],
    w2: [0, 0, 5, 9, 0, 0, 0],
    w3: [0, 0, 0, 0, 5, 9, 0],
    w4: [0, 0, 0, 0, 0, 0, 6],
};

const four = {
    money: [7, 46, 57, 82, 116, 152, 293],
    mine: [7, 42, 42, 62, 87, 117, 248],
    g1: [0, 2, 8, 0, 0, 0, 0],
    g2: [0, 0, 0, 6, 9, 0, 0],
    g3: [0, 0, 0, 0, 0, 6, 12],
    p1: [0, 3, 12, 0, 0, 0, 0],
    p2: [0, 0, 0, 6, 12, 0, 0],
    p3: [0, 0, 0, 0, 0, 9, 18],
    w1: [0, 3, 0, 0, 0, 0, 0],
    w2: [0, 0, 3, 6, 0, 0, 0],
    w3: [0, 0, 0, 0, 3, 6, 0],
    w4: [0, 0, 0, 0, 0, 0, 4],
};

const three = {
    money: [4, 32, 38, 56, 77, 102, 193],
    mine: [5, 28, 28, 41, 58, 78, 164],
    g1: [0, 1, 5, 0, 0, 0, 0],
    g2: [0, 0, 0, 4, 6, 0, 0],
    g3: [0, 0, 0, 0, 0, 4, 8],
    p1: [0, 2, 8, 0, 0, 0, 0],
    p2: [0, 0, 0, 4, 8, 0, 0],
    p3: [0, 0, 0, 0, 0, 6, 12],
    w1: [0, 2, 0, 0, 0, 0, 0],
    w2: [0, 0, 2, 4, 0, 0, 0],
    w3: [0, 0, 0, 0, 2, 4, 0],
    w4: [0, 0, 0, 0, 0, 0, 3],
};

async function display(item) {
    let output = "";
    output = '<div class="display-container">'
        + '<img src="EquipIcon/UI_EquipIcon_' + EngName[item] + '.png" width="100px">'
        + '<div class="text-container">'
        + '<div id="chName" style="font-size:20px">' + item + '</div>'
        + '<div>選擇等級</div><div>'
        + '<select name="level-start" id="level-start" style="background-color: #745a95; color: #FAF0E6; border-radius:5px;"'
        + 'onchange="updateLevelOptions(\'start\', \'' + item + '\')">'
        + '<option value="1" selected>1</option>'
        + '<option value="20">20</option>'
        + '<option value="40">40</option>'
        + '<option value="50">50</option>'
        + '<option value="60">60</option>'
        + '<option value="70">70</option>'
        + '<option value="80">80</option></select><span>&nbsp;~&nbsp;</span>'
        + '<select name="level-end" id="level-end" style="background-color: #745a95; color: #FAF0E6; border-radius:5px;"'
        + 'onchange="updateLevelOptions(\'end\', \'' + item + '\')">'
        + '<option value="20">20</option>'
        + '<option value="40">40</option>'
        + '<option value="50">50</option>'
        + '<option value="60">60</option>'
        + '<option value="70">70</option>'
        + '<option value="80">80</option>'
        + '<option value="90" selected>90</option></select></div>'
        + '</div><button onclick="openPop(\'' + item + '\')" style="font-size: 16px; background-color: #af6f2a; color: #FAF0E6; border-radius:8px;">'
        + '&nbsp;推薦角色&nbsp;</button><div id="pop"></div></div>'
        + '<hr><div>計算結果</div>'
        + '<div class="material" id="material">';
    output = await update(1, 90, output, item);
    document.getElementById("display").innerHTML = output;
}

function openPop(item)
{
    let popup = document.getElementById('pop');
        
    popup.innerHTML = '<button class="btn" onclick="closePop()" style="color: #FAF0E6;">X</button>';
    
    if(item === "天空之翼") {
        popup.innerHTML += '弓系輸出角色均可拿，因其為爆率弓';
    }else if(item === "阿莫斯之弓") {
        popup.innerHTML += '<div class="weapons-container"><div class="char"><img title="甘雨" src="AvatarIcon/UI_AvatarIcon_Ganyu.png" '
                        + 'alt="甘雨" style="background-color:#af6f2a;"><div class="charName">甘雨<br>(專武)</div></div>'
                        + '<div class="char"><img title="提納里" src="AvatarIcon/UI_AvatarIcon_Tighnari.png" '
                        + 'alt="提納里" style="background-color:#af6f2a;"><div class="charName">提納里</div></div>'
                        + '<div class="char"><img title="林尼" src="AvatarIcon/UI_AvatarIcon_Liney.png" '
                        + 'alt="林尼" style="background-color:#af6f2a;"><div class="charName">林尼</div></div>'
                        + '<div class="char"><img title="安柏" src="AvatarIcon/UI_AvatarIcon_Ambor.png" '
                        + 'alt="安柏" style="background-color:#745a95;"><div class="charName">安柏</div></div></div>';
    }else if(item === "終末嗟嘆之詩") {
        popup.innerHTML += '<div class="weapons-container"><div class="char"><img title="溫迪" src="AvatarIcon/UI_AvatarIcon_Venti.png" '
                        + 'alt="溫迪" style="background-color:#af6f2a;"><div class="charName">溫迪<br>(專武)</div></div>'
                        + '<div class="char"><img title="夜蘭" src="AvatarIcon/UI_AvatarIcon_Yelan.png" '
                        + 'alt="夜蘭" style="background-color:#af6f2a;"><div class="charName">夜蘭</div></div>'
                        + '<div class="char"><img title="柯萊" src="AvatarIcon/UI_AvatarIcon_Collei.png" '
                        + 'alt="柯萊" style="background-color:#745a95;"><div class="charName">柯萊</div></div>'
                        + '<div class="char"><img title="九條裟羅" src="AvatarIcon/UI_AvatarIcon_Sara.png" '
                        + 'alt="九條裟羅" style="background-color:#745a95;"><div class="charName">九條裟羅</div></div>'
                        + '<div class="char"><img title="五郎" src="AvatarIcon/UI_AvatarIcon_Gorou.png" '
                        + 'alt="五郎" style="background-color:#745a95;"><div class="charName">五郎</div></div></div>';
    }else if(item === "冬極白星") {
        popup.innerHTML += '<div class="weapons-container"><div class="char"><img title="達達利亞" src="AvatarIcon/UI_AvatarIcon_Tartaglia.png" '
                        + 'alt="達達利亞" style="background-color:#af6f2a;"><div class="charName">達達利亞<br>(專武)</div></div>'
                        + '<div class="char"><img title="溫迪" src="AvatarIcon/UI_AvatarIcon_Venti.png" '
                        + 'alt="溫迪" style="background-color:#af6f2a;"><div class="charName">溫迪</div></div>'
                        + '<div class="char"><img title="提納里" src="AvatarIcon/UI_AvatarIcon_Tighnari.png" '
                        + 'alt="提納里" style="background-color:#af6f2a;"><div class="charName">提納里</div></div>'
                        + '<div class="char"><img title="菲謝爾" src="AvatarIcon/UI_AvatarIcon_Fischl.png" '
                        + 'alt="菲謝爾" style="background-color:#745a95;"><div class="charName">菲謝爾</div></div>'
                        + '<div class="char"><img title="琺露珊" src="AvatarIcon/UI_AvatarIcon_Faruzan.png" '
                        + 'alt="琺露珊" style="background-color:#745a95;"><div class="charName">琺露珊</div></div>'
                        + '<div class="char"><img title="九條裟羅" src="AvatarIcon/UI_AvatarIcon_Sara.png" '
                        + 'alt="九條裟羅" style="background-color:#745a95;"><div class="charName">九條裟羅</div></div></div>';
    }else if(item === "若水") {
        popup.innerHTML += '(夜蘭專武)弓系輸出角色均可拿，因其為爆傷弓';
    }else if(item === "飛雷之弦振") {
        popup.innerHTML += '<div class="weapons-container"><div class="char"><img title="宵宮" src="AvatarIcon/UI_AvatarIcon_Yoimiya.png" '
                        + 'alt="宵宮" style="background-color:#af6f2a;"><div class="charName">宵宮<br>(專武)</div></div>'
                        + '<div class="char"><img title="達達利亞" src="AvatarIcon/UI_AvatarIcon_Tartaglia.png" '
                        + 'alt="達達利亞" style="background-color:#af6f2a;"><div class="charName">達達利亞</div></div></div>';
    }else if(item === "獵人之徑") {
        popup.innerHTML += '<div class="weapons-container"><div class="char"><img title="提納里" src="AvatarIcon/UI_AvatarIcon_Tighnari.png" '
                        + 'alt="提納里" style="background-color:#af6f2a;"><div class="charName">提納里<br>(專武)</div></div>'
                        + '<div class="char"><img title="甘雨" src="AvatarIcon/UI_AvatarIcon_Ganyu.png" '
                        + 'alt="甘雨" style="background-color:#af6f2a;"><div class="charName">甘雨</div></div></div>';
    }else if(item === "最初的大魔術") {
        popup.innerHTML += '<div class="weapons-container"><div class="char"><img title="林尼" src="AvatarIcon/UI_AvatarIcon_Liney.png" '
                        + 'alt="林尼" style="background-color:#af6f2a;"><div class="charName">林尼<br>(專武)</div></div>'
                        + '<div class="char"><img title="甘雨" src="AvatarIcon/UI_AvatarIcon_Ganyu.png" '
                        + 'alt="甘雨" style="background-color:#af6f2a;"><div class="charName">甘雨</div></div>'
                        + '<div class="char"><img title="提納里" src="AvatarIcon/UI_AvatarIcon_Tighnari.png" '
                        + 'alt="提納里" style="background-color:#af6f2a;"><div class="charName">提納里</div></div>'
                        + '<div class="char"><img title="夜蘭" src="AvatarIcon/UI_AvatarIcon_Yelan.png" '
                        + 'alt="夜蘭" style="background-color:#af6f2a;"><div class="charName">夜蘭</div></div></div>';
    }else if(item === "") {
        popup.innerHTML += '';
    }

    popup.setAttribute("style", "display: block;");
}

function closePop()
{
    document.getElementById('pop').setAttribute("style", "display: none;");
}

function update(start, end, output, item)
{
    let add = [];
    let x = document.getElementById(item);
    if (x.classList.contains("five")) {
        add = sumValuesBetween(five, start, end);
    } else if (x.classList.contains("four")) {
        add = sumValuesBetween(four, start, end);
    } else if (x.classList.contains("three")) {
        add = sumValuesBetween(three, start, end);
    }
    output += printMaterial("摩拉", "其他/摩拉.png", add[0].sum + 'k');
    output += printMaterial("魔礦", "其他/魔礦.png", add[1].sum);

    const result1 = findArrayIndex(item, gray);
    output = printElement(result1, add, output);
    const result2 = findArrayIndex(item, purple);
    output = printElement(result2, add, output);
    const result3 = findArrayIndex(item, weapon);
    output = printElement(result3, add, output);
    return output;
}

async function updateLevelOptions(type, item) {
    const startSelect = document.getElementById('level-start');
    const endSelect = document.getElementById('level-end');

    const startValue = parseInt(startSelect.value);
    const endValue = parseInt(endSelect.value);

    if (type === 'start') {
        for (let i = 20; i <= 90; i += 10) {
            const option = endSelect.querySelector(`option[value="${i}"]`);
            if (option) {
                option.disabled = i <= startValue;
            }
        }
    } else if (type === 'end') {
        for (let i = 20; i <= 90; i += 10) {
            const option = startSelect.querySelector(`option[value="${i}"]`);
            if (option) {
                option.disabled = i >= endValue;
            }
        }
    }
    let materialContainer = "";
    materialContainer = update(startValue, endValue, materialContainer, item);
    document.getElementById("material").innerHTML = materialContainer;
}

function extractMaterialSection(output) {
    const startIndex = output.indexOf('<div class="material">');
    const endIndex = output.indexOf('</div>', startIndex) + '</div>'.length;

    return output.substring(startIndex, endIndex);
}

function findArrayIndex(word, arrays) {
    for (const arrayName in arrays) {
        const array = arrays[arrayName];
        if (array.indexOf(word) !== -1) {
            return arrayName;
        }
    }
    return null;
}

function printMaterial(name, imgUrl, value) {
    return '<div class="items" title="' + name + '">'
        + '<img src="' + imgUrl + '" style=" background-color: #53799e;">'
        + '<div class="name" style="font-size: 14px">' + value + '</div></div>';
}

function printElement(result, add, output) {
    if (result === "史萊姆") {
        if (add[2].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(灰)史萊姆凝液.png" style=" background-color: #5F5F6C;">'
                + '<div class="name" style="font-size: 14px">' + add[2].sum + '</div></div>';
        }
        if (add[3].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(綠)史萊姆清.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[3].sum + '</div></div>';
        }
        if (add[4].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(藍)史萊姆原漿.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[4].sum + '</div></div>';
        }
    } else if (result === "愚人眾") {
        if (add[2].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(灰)新兵的徽記.png" style=" background-color: #5F5F6C;">'
                + '<div class="name" style="font-size: 14px">' + add[2].sum + '</div></div>';
        }
        if (add[3].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(綠)士官的徽記.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[3].sum + '</div></div>';
        }
        if (add[4].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(藍)尉官的徽記.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[4].sum + '</div></div>';
        }
    } else if (result === "盜寶團") {
        if (add[2].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(灰)尋寶鴉印.png" style=" background-color: #5F5F6C;">'
                + '<div class="name" style="font-size: 14px">' + add[2].sum + '</div></div>';
        }
        if (add[3].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(綠)藏銀鴉印.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[3].sum + '</div></div>';
        }
        if (add[4].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(藍)攫金鴉印.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[4].sum + '</div></div>';
        }
    } else if (result === "丘丘薩滿") {
        if (add[2].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(灰)導能繪卷.png" style=" background-color: #5F5F6C;">'
                + '<div class="name" style="font-size: 14px">' + add[2].sum + '</div></div>';
        }
        if (add[3].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(綠)封魔繪卷.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[3].sum + '</div></div>';
        }
        if (add[4].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(藍)禁咒繪卷.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[4].sum + '</div></div>';
        }
    } else if (result === "丘丘射手") {
        if (add[2].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(灰)牢固的箭鏃.png" style=" background-color: #5F5F6C;">'
                + '<div class="name" style="font-size: 14px">' + add[2].sum + '</div></div>';
        }
        if (add[3].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(綠)銳利的箭鏃.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[3].sum + '</div></div>';
        }
        if (add[4].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(藍)歷戰的箭鏃.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[4].sum + '</div></div>';
        }
    } else if (result === "丘丘") {
        if (add[2].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(灰)破損的面具.png" style=" background-color: #5F5F6C;">'
                + '<div class="name" style="font-size: 14px">' + add[2].sum + '</div></div>';
        }
        if (add[3].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(綠)汙穢的面具.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[3].sum + '</div></div>';
        }
        if (add[4].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(藍)不祥的面具.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[4].sum + '</div></div>';
        }
    } else if (result === "騙騙花") {
        if (add[2].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(灰)騙騙花蜜.png" style=" background-color: #5F5F6C;">'
                + '<div class="name" style="font-size: 14px">' + add[2].sum + '</div></div>';
        }
        if (add[3].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(綠)微光花蜜.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[3].sum + '</div></div>';
        }
        if (add[4].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(藍)原素花蜜.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[4].sum + '</div></div>';
        }
    } else if (result === "野伏眾") {
        if (add[2].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(灰)破舊的刀鐔.png" style=" background-color: #5F5F6C;">'
                + '<div class="name" style="font-size: 14px">' + add[2].sum + '</div></div>';
        }
        if (add[3].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(綠)影打刀鐔.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[3].sum + '</div></div>';
        }
        if (add[4].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(藍)名刀鐔.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[4].sum + '</div></div>';
        }
    } else if (result === "飄浮靈") {
        if (add[2].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(灰)浮游乾核.png" style=" background-color: #5F5F6C;">'
                + '<div class="name" style="font-size: 14px">' + add[2].sum + '</div></div>';
        }
        if (add[3].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(綠)浮游幽核.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[3].sum + '</div></div>';
        }
        if (add[4].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(藍)浮游晶化核.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[4].sum + '</div></div>';
        }
    } else if (result === "蕈獸") {
        if (add[2].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(灰)蕈獸孢子.png" style=" background-color: #5F5F6C;">'
                + '<div class="name" style="font-size: 14px">' + add[2].sum + '</div></div>';
        }
        if (add[3].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(綠)螢光孢粉.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[3].sum + '</div></div>';
        }
        if (add[4].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(藍)孢囊晶塵.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[4].sum + '</div></div>';
        }
    } else if (result === "鍍金旅團") {
        if (add[2].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(灰)褪色紅綢.png" style=" background-color: #5F5F6C;">'
                + '<div class="name" style="font-size: 14px">' + add[2].sum + '</div></div>';
        }
        if (add[3].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(綠)鑲邊紅綢.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[3].sum + '</div></div>';
        }
        if (add[4].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(藍)織金紅綢.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[4].sum + '</div></div>';
        }
    } else if (result === "發條機關") {
        if (add[2].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(灰)齧合齒輪.png" style=" background-color: #5F5F6C;">'
                + '<div class="name" style="font-size: 14px">' + add[2].sum + '</div></div>';
        }
        if (add[3].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(綠)機關正齒輪.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[3].sum + '</div></div>';
        }
        if (add[4].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(藍)奇械機芯齒輪.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[4].sum + '</div></div>';
        }
    } else if (result === "原海異種") {
        if (add[2].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(灰)異海凝珠.png" style=" background-color: #5F5F6C;">'
                + '<div class="name" style="font-size: 14px">' + add[2].sum + '</div></div>';
        }
        if (add[3].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(綠)異海之塊.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[3].sum + '</div></div>';
        }
        if (add[4].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(藍)異色結晶石.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[4].sum + '</div></div>';
        }
    } else if (result === "丘丘王") {
        if (add[5].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(綠)沉重號角.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[5].sum + '</div></div>';
        }
        if (add[6].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(藍)黑銅號角.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[6].sum + '</div></div>';
        }
        if (add[7].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(紫)黑晶號角.png" style=" background-color: #745a95;">'
                + '<div class="name" style="font-size: 14px">' + add[7].sum + '</div></div>';
        }
    } else if (result === "深淵法師") {
        if (add[5].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(綠)地脈的舊枝.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[5].sum + '</div></div>';
        }
        if (add[6].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(藍)地脈的枯葉.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[6].sum + '</div></div>';
        }
        if (add[7].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(紫)地脈的新芽.png" style=" background-color: #745a95;">'
                + '<div class="name" style="font-size: 14px">' + add[7].sum + '</div></div>';
        }
    } else if (result === "遺蹟守衛") {
        if (add[5].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(綠)混沌裝置.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[5].sum + '</div></div>';
        }
        if (add[6].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(藍)混沌迴路.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[6].sum + '</div></div>';
        }
        if (add[7].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(紫)混沌爐心.png" style=" background-color: #745a95;">'
                + '<div class="name" style="font-size: 14px">' + add[7].sum + '</div></div>';
        }
    } else if (result === "螢術士") {
        if (add[5].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(綠)霧虛花粉.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[5].sum + '</div></div>';
        }
        if (add[6].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(藍)霧虛草囊.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[6].sum + '</div></div>';
        }
        if (add[7].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(紫)霧虛燈芯.png" style=" background-color: #745a95;">'
                + '<div class="name" style="font-size: 14px">' + add[7].sum + '</div></div>';
        }
    } else if (result === "債務處理人") {
        if (add[5].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(綠)獵兵祭刀.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[5].sum + '</div></div>';
        }
        if (add[6].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(藍)特工祭刀.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[6].sum + '</div></div>';
        }
        if (add[7].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(紫)督察長祭刀.png" style=" background-color: #745a95;">'
                + '<div class="name" style="font-size: 14px">' + add[7].sum + '</div></div>';
        }
    } else if (result === "龍蜥") {
        if (add[5].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(綠)脆弱的骨片.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[5].sum + '</div></div>';
        }
        if (add[6].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(藍)結實的骨片.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[6].sum + '</div></div>';
        }
        if (add[7].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(紫)石化的骨片.png" style=" background-color: #745a95;">'
                + '<div class="name" style="font-size: 14px">' + add[7].sum + '</div></div>';
        }
    } else if (result === "遺蹟機兵") {
        if (add[5].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(綠)混沌機關.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[5].sum + '</div></div>';
        }
        if (add[6].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(藍)混沌樞紐.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[6].sum + '</div></div>';
        }
        if (add[7].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(紫)混沌真眼.png" style=" background-color: #745a95;">'
                + '<div class="name" style="font-size: 14px">' + add[7].sum + '</div></div>';
        }
    } else if (result === "冬國仕女") {
        if (add[5].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(綠)黯淡稜鏡.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[5].sum + '</div></div>';
        }
        if (add[6].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(藍)水晶稜鏡.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[6].sum + '</div></div>';
        }
        if (add[7].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(紫)偏光稜鏡.png" style=" background-color: #745a95;">'
                + '<div class="name" style="font-size: 14px">' + add[7].sum + '</div></div>';
        }
    } else if (result === "獸境之狼") {
        if (add[5].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(綠)隱獸指爪.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[5].sum + '</div></div>';
        }
        if (add[6].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(藍)隱獸利爪.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[6].sum + '</div></div>';
        }
        if (add[7].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(紫)隱獸鬼爪.png" style=" background-color: #745a95;">'
                + '<div class="name" style="font-size: 14px">' + add[7].sum + '</div></div>';
        }
    } else if (result === "黑蛇眾") {
        if (add[5].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(綠)晦暗刻像.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[5].sum + '</div></div>';
        }
        if (add[6].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(藍)夤夜刻像.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[6].sum + '</div></div>';
        }
        if (add[7].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(紫)幽邃刻像.png" style=" background-color: #745a95;">'
                + '<div class="name" style="font-size: 14px">' + add[7].sum + '</div></div>';
        }
    } else if (result === "活化蕈獸") {
        if (add[5].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(綠)失活菌核.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[5].sum + '</div></div>';
        }
        if (add[6].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(藍)休眠菌核.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[6].sum + '</div></div>';
        }
        if (add[7].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(紫)茁壯菌核.png" style=" background-color: #745a95;">'
                + '<div class="name" style="font-size: 14px">' + add[7].sum + '</div></div>';
        }
    } else if (result === "遺蹟龍獸") {
        if (add[5].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(綠)混沌容器.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[5].sum + '</div></div>';
        }
        if (add[6].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(藍)混沌模組.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[6].sum + '</div></div>';
        }
        if (add[7].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(紫)混沌錨栓.png" style=" background-color: #745a95;">'
                + '<div class="name" style="font-size: 14px">' + add[7].sum + '</div></div>';
        }
    } else if (result === "元能構裝體") {
        if (add[5].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(綠)破缺稜晶.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[5].sum + '</div></div>';
        }
        if (add[6].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(藍)混濁稜晶.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[6].sum + '</div></div>';
        }
        if (add[7].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(紫)輝光稜晶.png" style=" background-color: #745a95;">'
                + '<div class="name" style="font-size: 14px">' + add[7].sum + '</div></div>';
        }
    } else if (result === "聖骸獸") {
        if (add[5].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(綠)殘毀的橫脊.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[5].sum + '</div></div>';
        }
        if (add[6].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(藍)密固的橫脊.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[6].sum + '</div></div>';
        }
        if (add[7].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(紫)鍥紋的橫脊.png" style=" background-color: #745a95;">'
                + '<div class="name" style="font-size: 14px">' + add[7].sum + '</div></div>';
        }
    } else if (result === "丘丘遊俠") {
        if (add[5].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(綠)來自何處的待放之花.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[5].sum + '</div></div>';
        }
        if (add[6].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(藍)何人所珍藏之花.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[6].sum + '</div></div>';
        }
        if (add[7].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(紫)漫遊者的盛放之花.png" style=" background-color: #745a95;">'
                + '<div class="name" style="font-size: 14px">' + add[7].sum + '</div></div>';
        }
    } else if (result === "濁水幻靈") {
        if (add[5].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(綠)濁水的一滴.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[5].sum + '</div></div>';
        }
        if (add[6].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(藍)濁水的一掬.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[6].sum + '</div></div>';
        }
        if (add[7].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(紫)初生的濁水幻靈.png" style=" background-color: #745a95;">'
                + '<div class="name" style="font-size: 14px">' + add[7].sum + '</div></div>';
        }
    } else if (result === "隙境原體") {
        if (add[5].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(綠)隙間之核.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[5].sum + '</div></div>';
        }
        if (add[6].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(藍)外世突觸.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[6].sum + '</div></div>';
        }
        if (add[7].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(紫)異界生命核.png" style=" background-color: #745a95;">'
                + '<div class="name" style="font-size: 14px">' + add[7].sum + '</div></div>';
        }
    } else if (result === "役人") {
        if (add[5].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(綠)老舊的役人懷錶.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[5].sum + '</div></div>';
        }
        if (add[6].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(藍)役人的制式懷錶.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[6].sum + '</div></div>';
        }
        if (add[7].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="怪物掉落/(紫)役人的時時刻刻.png" style=" background-color: #745a95;">'
                + '<div class="name" style="font-size: 14px">' + add[7].sum + '</div></div>';
        }
    } else if (result === "mondstadt_mon") {
        if (add[8].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/mondstadt_mon1.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[8].sum + '</div></div>';
        }
        if (add[9].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/mondstadt_mon2.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[9].sum + '</div></div>';
        }
        if (add[10].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/mondstadt_mon3.png" style=" background-color: #745a95;">'
                + '<div class="name" style="font-size: 14px">' + add[10].sum + '</div></div>';
        } if (add[11].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/mondstadt_mon4.png" style=" background-color: #9E652E;">'
                + '<div class="name" style="font-size: 14px">' + add[11].sum + '</div></div>';
        }
    } else if (result === "mondstadt_tue") {
        if (add[8].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/mondstadt_tue1.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[8].sum + '</div></div>';
        }
        if (add[9].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/mondstadt_tue2.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[9].sum + '</div></div>';
        }
        if (add[10].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/mondstadt_tue3.png" style=" background-color: #745a95;">'
                + '<div class="name" style="font-size: 14px">' + add[10].sum + '</div></div>';
        } if (add[11].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/mondstadt_tue4.png" style=" background-color: #9E652E;">'
                + '<div class="name" style="font-size: 14px">' + add[11].sum + '</div></div>';
        }
    } else if (result === "mondstadt_wed") {
        if (add[8].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/mondstadt_wed1.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[8].sum + '</div></div>';
        }
        if (add[9].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/mondstadt_wed2.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[9].sum + '</div></div>';
        }
        if (add[10].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/mondstadt_wed3.png" style=" background-color: #745a95;">'
                + '<div class="name" style="font-size: 14px">' + add[10].sum + '</div></div>';
        } if (add[11].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/mondstadt_wed4.png" style=" background-color: #9E652E;">'
                + '<div class="name" style="font-size: 14px">' + add[11].sum + '</div></div>';
        }
    } else if (result === "liyue_mon") {
        if (add[8].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/liyue_mon1.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[8].sum + '</div></div>';
        }
        if (add[9].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/liyue_mon2.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[9].sum + '</div></div>';
        }
        if (add[10].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/liyue_mon3.png" style=" background-color: #745a95;">'
                + '<div class="name" style="font-size: 14px">' + add[10].sum + '</div></div>';
        } if (add[11].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/liyue_mon4.png" style=" background-color: #9E652E;">'
                + '<div class="name" style="font-size: 14px">' + add[11].sum + '</div></div>';
        }
    } else if (result === "liyue_tue") {
        if (add[8].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/liyue_tue1.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[8].sum + '</div></div>';
        }
        if (add[9].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/liyue_tue2.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[9].sum + '</div></div>';
        }
        if (add[10].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/liyue_tue3.png" style=" background-color: #745a95;">'
                + '<div class="name" style="font-size: 14px">' + add[10].sum + '</div></div>';
        } if (add[11].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/liyue_tue4.png" style=" background-color: #9E652E;">'
                + '<div class="name" style="font-size: 14px">' + add[11].sum + '</div></div>';
        }
    } else if (result === "liyue_wed") {
        if (add[8].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/liyue_wed1.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[8].sum + '</div></div>';
        }
        if (add[9].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/liyue_wed2.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[9].sum + '</div></div>';
        }
        if (add[10].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/liyue_wed3.png" style=" background-color: #745a95;">'
                + '<div class="name" style="font-size: 14px">' + add[10].sum + '</div></div>';
        } if (add[11].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/liyue_wed4.png" style=" background-color: #9E652E;">'
                + '<div class="name" style="font-size: 14px">' + add[11].sum + '</div></div>';
        }
    } else if (result === "inazuma_mon") {
        if (add[8].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/inazuma_mon1.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[8].sum + '</div></div>';
        }
        if (add[9].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/inazuma_mon2.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[9].sum + '</div></div>';
        }
        if (add[10].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/inazuma_mon3.png" style=" background-color: #745a95;">'
                + '<div class="name" style="font-size: 14px">' + add[10].sum + '</div></div>';
        } if (add[11].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/inazuma_mon4.png" style=" background-color: #9E652E;">'
                + '<div class="name" style="font-size: 14px">' + add[11].sum + '</div></div>';
        }
    } else if (result === "inazuma_tue") {
        if (add[8].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/inazuma_tue1.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[8].sum + '</div></div>';
        }
        if (add[9].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/inazuma_tue2.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[9].sum + '</div></div>';
        }
        if (add[10].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/inazuma_tue3.png" style=" background-color: #745a95;">'
                + '<div class="name" style="font-size: 14px">' + add[10].sum + '</div></div>';
        } if (add[11].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/inazuma_tue4.png" style=" background-color: #9E652E;">'
                + '<div class="name" style="font-size: 14px">' + add[11].sum + '</div></div>';
        }
    } else if (result === "inazuma_wed") {
        if (add[8].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/inazuma_wed1.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[8].sum + '</div></div>';
        }
        if (add[9].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/inazuma_wed2.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[9].sum + '</div></div>';
        }
        if (add[10].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/inazuma_wed3.png" style=" background-color: #745a95;">'
                + '<div class="name" style="font-size: 14px">' + add[10].sum + '</div></div>';
        } if (add[11].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/inazuma_wed4.png" style=" background-color: #9E652E;">'
                + '<div class="name" style="font-size: 14px">' + add[11].sum + '</div></div>';
        }
    } else if (result === "sumeru_mon") {
        if (add[8].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/sumeru_mon1.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[8].sum + '</div></div>';
        }
        if (add[9].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/sumeru_mon2.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[9].sum + '</div></div>';
        }
        if (add[10].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/sumeru_mon3.png" style=" background-color: #745a95;">'
                + '<div class="name" style="font-size: 14px">' + add[10].sum + '</div></div>';
        } if (add[11].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/sumeru_mon4.png" style=" background-color: #9E652E;">'
                + '<div class="name" style="font-size: 14px">' + add[11].sum + '</div></div>';
        }
    } else if (result === "sumeru_tue") {
        if (add[8].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/sumeru_tue1.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[8].sum + '</div></div>';
        }
        if (add[9].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/sumeru_tue2.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[9].sum + '</div></div>';
        }
        if (add[10].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/sumeru_tue3.png" style=" background-color: #745a95;">'
                + '<div class="name" style="font-size: 14px">' + add[10].sum + '</div></div>';
        } if (add[11].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/sumeru_tue4.png" style=" background-color: #9E652E;">'
                + '<div class="name" style="font-size: 14px">' + add[11].sum + '</div></div>';
        }
    } else if (result === "sumeru_wed") {
        if (add[8].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/sumeru_wed1.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[8].sum + '</div></div>';
        }
        if (add[9].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/sumeru_wed2.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[9].sum + '</div></div>';
        }
        if (add[10].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/sumeru_wed3.png" style=" background-color: #745a95;">'
                + '<div class="name" style="font-size: 14px">' + add[10].sum + '</div></div>';
        } if (add[11].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/sumeru_wed4.png" style=" background-color: #9E652E;">'
                + '<div class="name" style="font-size: 14px">' + add[11].sum + '</div></div>';
        }
    } else if (result === "fontaine_mon") {
        if (add[8].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/fontaine_mon1.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[8].sum + '</div></div>';
        }
        if (add[9].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/fontaine_mon2.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[9].sum + '</div></div>';
        }
        if (add[10].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/fontaine_mon3.png" style=" background-color: #745a95;">'
                + '<div class="name" style="font-size: 14px">' + add[10].sum + '</div></div>';
        } if (add[11].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/fontaine_mon4.png" style=" background-color: #9E652E;">'
                + '<div class="name" style="font-size: 14px">' + add[11].sum + '</div></div>';
        }
    } else if (result === "fontaine_tue") {
        if (add[8].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/fontaine_tue1.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[8].sum + '</div></div>';
        }
        if (add[9].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/fontaine_tue2.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[9].sum + '</div></div>';
        }
        if (add[10].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/fontaine_tue3.png" style=" background-color: #745a95;">'
                + '<div class="name" style="font-size: 14px">' + add[10].sum + '</div></div>';
        } if (add[11].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/fontaine_tue4.png" style=" background-color: #9E652E;">'
                + '<div class="name" style="font-size: 14px">' + add[11].sum + '</div></div>';
        }
    } else if (result === "fontaine_wed") {
        if (add[8].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/fontaine_wed1.png" style=" background-color: #496C65;">'
                + '<div class="name" style="font-size: 14px">' + add[8].sum + '</div></div>';
        }
        if (add[9].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/fontaine_wed2.png" style=" background-color: #53799e;">'
                + '<div class="name" style="font-size: 14px">' + add[9].sum + '</div></div>';
        }
        if (add[10].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/fontaine_wed3.png" style=" background-color: #745a95;">'
                + '<div class="name" style="font-size: 14px">' + add[10].sum + '</div></div>';
        } if (add[11].sum > 0) {
            output += '<div class="items" title="">'
                + '<img src="weapon/fontaine_wed4.png" style=" background-color: #9E652E;">'
                + '<div class="name" style="font-size: 14px">' + add[11].sum + '</div></div>';
        }
    }
    return output;
}

function sumValuesBetween(obj, start, end) {
    const result = [];
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const array = obj[key];
            if (start === 1 && end === 20) {
                sum = array[0];
            } else if (start === 1 && end === 40) {
                sum = array.slice(0, 2).reduce((acc, val) => acc + val, 0);
            } else if (start === 1 && end === 50) {
                sum = array.slice(0, 3).reduce((acc, val) => acc + val, 0);
            } else if (start === 1 && end === 60) {
                sum = array.slice(0, 4).reduce((acc, val) => acc + val, 0);
            } else if (start === 1 && end === 70) {
                sum = array.slice(0, 5).reduce((acc, val) => acc + val, 0);
            } else if (start === 1 && end === 80) {
                sum = array.slice(0, 6).reduce((acc, val) => acc + val, 0);
            } else if (start === 1 && end === 90) {
                sum = array.slice(0, 7).reduce((acc, val) => acc + val, 0);
            } else if (start === 20 && end === 40) {
                sum = array[1];
            } else if (start === 20 && end === 50) {
                sum = array.slice(1, 3).reduce((acc, val) => acc + val, 0);
            } else if (start === 20 && end === 60) {
                sum = array.slice(1, 4).reduce((acc, val) => acc + val, 0);
            } else if (start === 20 && end === 70) {
                sum = array.slice(1, 5).reduce((acc, val) => acc + val, 0);
            } else if (start === 20 && end === 80) {
                sum = array.slice(1, 6).reduce((acc, val) => acc + val, 0);
            } else if (start === 20 && end === 90) {
                sum = array.slice(1, 7).reduce((acc, val) => acc + val, 0);
            } else if (start === 40 && end === 50) {
                sum = array[2];
            } else if (start === 40 && end === 60) {
                sum = array.slice(2, 4).reduce((acc, val) => acc + val, 0);
            } else if (start === 40 && end === 70) {
                sum = array.slice(2, 5).reduce((acc, val) => acc + val, 0);
            } else if (start === 40 && end === 80) {
                sum = array.slice(2, 6).reduce((acc, val) => acc + val, 0);
            } else if (start === 40 && end === 90) {
                sum = array.slice(2, 7).reduce((acc, val) => acc + val, 0);
            } else if (start === 50 && end === 60) {
                sum = array[3];
            } else if (start === 50 && end === 70) {
                sum = array.slice(3, 5).reduce((acc, val) => acc + val, 0);
            } else if (start === 50 && end === 80) {
                sum = array.slice(3, 6).reduce((acc, val) => acc + val, 0);
            } else if (start === 50 && end === 90) {
                sum = array.slice(3, 7).reduce((acc, val) => acc + val, 0);
            } else if (start === 60 && end === 70) {
                sum = array[4];
            } else if (start === 60 && end === 80) {
                sum = array.slice(4, 6).reduce((acc, val) => acc + val, 0);
            } else if (start === 60 && end === 90) {
                sum = array.slice(4, 7).reduce((acc, val) => acc + val, 0);
            } else if (start === 70 && end === 80) {
                sum = array[5];
            } else if (start === 70 && end === 90) {
                sum = array.slice(5, 7).reduce((acc, val) => acc + val, 0);
            } else if (start === 80 && end === 90) {
                sum = array[6];
            }else {
                for (let i = start - 1; i < end; i++) {
                    sum += array[i];
                }
            }
            result.push({ arrayName: key, sum: sum });
        }
    }
    return result.length > 0 ? result : [{ arrayName: null, sum: 0 }];
}
