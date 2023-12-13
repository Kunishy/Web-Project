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

let 史萊姆 = ["護摩之杖", "阿莫斯之弓", "天空之傲", "天空之刃", "四風原典", "聊聊棒", "風信之鋒", "銜珠海皇",
            "暗巷獵手", "雪葬的星銀", "西風長槍", "黑劍", "笛劍", "祭禮弓", "宗室大劍", "萬國諸海圖譜",
            "神射手之誓", "魔導緒論", "白鐵大劍", "黎明神劍"];

let 愚人眾 = ["終末嗟嘆之弓", "和璞鳶", "貫月矢", "龍脊長槍", "腐殖之劍", "宗室獵槍", "黑岩斬刀", "鋼輪弓",
            "黑岩刺槍", "試作斬岩", "西風大劍", "宗室祕法錄", "甲級寶玨", "白纓槍", "飛天禦劍"];

let 盜寶團 = ["磐岩結綠", "無工之劍", "貫虹之槊", "無垠蔚藍之歌", "瑪海菈的水色", "喜多院十文字", "幽夜華爾滋", "暗巷的酒與詩",
            "降臨之劍", "匣裡龍吟", "試作澹月", "流月針", "白影劍", "祭禮殘章", "信使", "翡玉法球",
            "飛天大御劍", "吃虎魚刀"];

let 丘丘薩滿 = ["蒼古自由之誓", "天空之脊", "狼的末路", "遺祀玉瓏", "落霞", "白辰之環", "暗巷閃光", "匣裡滅辰",
            "祭禮劍", "宗室長弓", "雨裁", "西風秘典", "黑岩緋玉", "反曲弓", "討龍英傑譚", "旅行劍"];

let 丘丘射手 = ["飛雷之弦振", "天空之翼", "天空之卷", "風鷹劍", "靜謐之曲", "王下近侍", "掠食者", "破魔之弓",
            "千岩古劍", "千岩長槍", "蒼翠獵弓", "試作金珀", "黑岩長槍", "祭禮大劍", "西風劍", "絕弦",
            "鴉羽弓", "黑纓槍", "沐浴龍血的劍", "冷刃"];

let 丘丘 = ["松籟響起之時", "斫峰之刃", "塵世之鎖", "狼牙", "辰砂之紡錘", "嘟嘟可故事集", "昭心", "弓藏",
            "試作星鐮", "宗室長劍", "試作古華", "流浪樂章", "彈弓", "異世界行記", "暗鐵劍", "以理服人"];

function display(item) {
    let output = "";
    let commonPart = '<div class="display-container">'
        + '<img src="EquipIcon/UI_EquipIcon_Bow_Dvalin.png" width="100px">'
        + '<div class="text-container">'
        + '<div id="chName">' + item + '</div>'
        + '<div>選擇等級</div>'
        + '<div>'
        + '<select name="level-start" id="level-start">'
        + '<option value="1">1</option>'
        + '<option value="20">20</option>'
        + '<option value="40">40</option>'
        + '<option value="50">50</option>'
        + '<option value="60">60</option>'
        + '<option value="70">70</option>'
        + '<option value="80">80</option>'
        + '</select>'
        + '<span>~</span>'
        + '<select name="level-end" id="level-end">'
        + '<option value="20">20</option>'
        + '<option value="40">40</option>'
        + '<option value="50">50</option>'
        + '<option value="60">60</option>'
        + '<option value="70">70</option>'
        + '<option value="80">80</option>'
        + '<option value="90">90</option>'
        + '</select>'
        + '</div>'
        + '</div>'
        + '</div>'
        + '<hr>'
        + '<div>計算結果</div>'

    // 根據點擊的武器名稱生成相應的 HTML 內容
    if (item === "天空之翼") {
        output = commonPart;
    }
    document.getElementById("display").innerHTML = output;
}
