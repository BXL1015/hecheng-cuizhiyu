/**
 * 澹版槑锛屾湰椤圭洰浠呭府鍔╁ぇ瀹跺涔犳妧鏈強濞变箰锛屽垏鍕垮皢淇敼鍚庣殑缃戠珯澶ц妯′紶鎾強鍟嗙敤锛屼互閬垮厤渚垫潈锛?
 */

// 棰濆鍒嗘暟锛氫慨鏀规暟瀛?
let extraScore = 1;

// 鏃犳晫妯″紡锛歵rue 鏀逛负 false
let wuDi = true;

// 绗竴涓按鏋滐細淇敼鏁板瓧涓?0-10, 0 涓鸿憽钀勶紝9 涓哄崐涓タ鐡?
let firstFruit = 2;

// 姘存灉鍚堟垚鍙嶈浆锛歠alse 鏀逛负 true
let reverseLevelUp = false;

// 鎸囧畾鐢熸垚鐨勬按鏋滐細榛樿鍊? 涓嶅紑鍚弽杞?0-5 寮€鍚弽杞?6-11锛屼慨鏀瑰搴旀暟瀛楀嵆鍙帶鍒堕殢鏈虹敓鎴愮殑姘存灉鑼冨洿
const minRandomFruitNum = reverseLevelUp ? 6 : 2; // 鐢熸垚闅忔満姘存灉鏈€灏忓€硷紙0-10锛? 涓鸿憽钀勶紝9 涓哄崐涓タ鐡?const maxRandomFruitNum = reverseLevelUp ? 11 : 6; // 鐢熸垚闅忔満姘存灉鏈€澶у€硷紙1-11锛? 涓鸿憽钀勶紝9 涓哄崐涓タ鐡?let setFruits = {
  // 鎸囧畾鍓嶅嚑娆＄敓鎴愮殑姘存灉锛屽彲濉叆浠绘剰鏁伴噺鐨勬暟瀛楋紝0 涓鸿憽钀勶紝9 涓哄崐涓タ鐡?  startFruits: reverseLevelUp ? [10, 10, 8, 7, 7, 6] : [2, 2, 3, 4, 4, 5],
  randomFunction: () => {
    return minRandomFruitNum + Math.floor(Math.random() * (maxRandomFruitNum - minRandomFruitNum));
  }
}

// 璁╂按鏋滄洿 Q 寮癸細false 鏀逛负澶т簬 0 灏忎簬 1 鐨勪换鎰忓皬鏁帮紙鎺ㄨ崘 0.9锛?
let fruitQTan = false;

// 璁╂按鏋滀笅钀界紦鎱細false 鏀逛负澶т簬 0 鐨勪换鎰忔暟锛屽€艰秺澶ч樆鍔涜秺澶э紝涓嬭惤瓒婃參锛堟帹鑽?5锛?
let fruitSlowDown = false;

// 鐐瑰嚮鍙充笂鏂瑰浘鏍囨洿鎹㈡按鏋滐細false 鏀逛负 true 鍗冲彲
let clickChangeFruit = false;

// 骞垮憡閾炬帴锛歠alse 鎴栦负绌哄瓧绗︿覆琛ㄧず涓嶄細璺宠浆鍒板箍鍛?
let adLink = 'https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/yupi_wechat.png';

// 淇敼缃戦〉鏍囬锛氬皢 "鍚堟垚澶цタ鐡? 杩涜鏇挎崲
document.getElementsByTagName("title")[0].innerText = '合成崔志宇';

// 寮€鍚€夊垎寮圭獥锛氬皢 false 鏀逛负 true
let selectModal = false;


