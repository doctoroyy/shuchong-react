import { connect } from 'dva';
import { history, withRouter } from 'umi';
import BaseHeader from '@/components/BaseHeader';
import BookList from '@/components/Book/List';
import './index.less';

const Category = (props) => {
  const {
    dispatch,
    match,
  } = props;

  const data = [{ "name": "完美世界", "description": "一粒尘可填海，一根草斩尽日月星辰，弹指间天翻地覆。 群雄并起，万族林立，诸圣争霸，乱天动地。问苍茫大地，谁主沉浮？！ 一个少年从大荒中走出，一切从这里开始…… 各位书友要是觉得《完美世界》还不错的话请不要忘记向您QQ群和微博里的朋友推荐哦！", "author": "辰东", "imgSrc": "https://www.xbiquge6.com/cover/0/36/36s.jpg", "latestChapter": "我的新书《圣墟》已上传", "updateTime": "2016-11-01 14:05:52", "biqugePath": "0_36", "tags": null }, { "name": "圣墟（圣虚）", "description": "在破败中崛起，在寂灭中复苏。    沧海成尘，雷电枯竭，那一缕幽雾又一次临近大地，世间的枷锁被打开了，一个全新的世界就此揭开神秘的一角……", "author": "辰东", "imgSrc": "https://www.xbiquge6.com/cover/74/74821/74821s.jpg", "latestChapter": "第1551章 诸天万古只是一场梦", "updateTime": "2020-05-08 01:10:43", "biqugePath": "74_74821", "tags": null }, { "name": "苏厨", "description": "治大国如烹小鲜，因此，这是一个吃货治国的故事，从北宋皇佑四年开始……", "author": "二子从周", "imgSrc": "https://www.xbiquge6.com/cover/85/85379/85379s.jpg", "latestChapter": "第一千零二十八章 丑话", "updateTime": "2020-05-10 09:30:48", "biqugePath": "85_85379", "tags": null }, { "name": "伏天氏", "description": "东方神州，有人皇立道统，有圣贤宗门传道，有诸侯雄踞一方王国，诸强林立，神州动乱千万载，执此之时，一代天骄叶青帝及东凰大帝横空出世，斩人皇，驭圣贤，诸侯臣服，东方神州一统！然，叶青帝忽然暴毙，世间雕像尽皆被毁，于世间除名，沦为禁忌；从此神州唯东凰大帝独尊！十五年后，东海青州城，一名为叶伏天的少年，开启了他的传奇之路…", "author": "净无痕", "imgSrc": "https://www.xbiquge6.com/cover/9/9208/9208s.jpg", "latestChapter": "第1785章 帝乌的自信", "updateTime": "2020-04-17 23:54:39", "biqugePath": "9_9208", "tags": null }, { "name": "凡人修仙之仙界篇（凡人修仙传仙界篇）", "description": "忘语新书，凡人修仙之仙界篇，忘语新书，凡人修仙之仙界篇，忘语新书，凡人修仙之仙界篇，忘语新书，凡人修仙之仙界篇，", "author": "忘语", "imgSrc": "https://www.xbiquge6.com/cover/1/1203/1203s.jpg", "latestChapter": "仙界篇完本感言（仙界篇的完本，并不代表的凡人修仙故事的结束^^）", "updateTime": "2020-03-02 14:03:36", "biqugePath": "1_1203", "tags": null }, { "name": "盗墓笔记", "description": "50年前由长沙土夫子（盗墓贼）出土的战国帛书，记载了一个奇特战国古墓的位置，50年后，其中一个土夫子的孙子在他的笔记中发现这个秘密，纠集了一批经验丰富的盗墓贼前去寻宝，谁也没有想到，这个古墓竟然有着这么多诡异的事情：七星疑棺，青眼狐尸，九头蛇柏。这神秘的墓主人到底是谁，他们到底能不能找到真正的棺椁？故事悬念重重，情节跌荡，值得一看。", "author": "南派三叔", "imgSrc": "https://www.xxbiquge.com/cover/10/10037/10037s.jpg", "latestChapter": "《后记》下", "updateTime": "2015-07-12 04:19:25", "biqugePath": "10_10037", "tags": null }, { "name": "斗破苍穹", "description": "这里是属于斗气的世界，没有花俏艳丽的魔法，有的，仅仅是繁衍到巅峰的斗气！ 新书刚开，请各位兄弟多多支持，用推荐票和收藏，砸烂偶吧.^_^ 新书等级制度：斗者，斗师，大斗师，斗灵，斗王，斗皇，斗宗，斗尊，斗圣，斗帝。 各位书友要是觉得《斗破苍穹》还不错的话请不要忘记向您QQ群和微博里的朋友推荐哦！", "author": "天蚕土豆", "imgSrc": "https://www.xbiquge6.com/cover/1/1413/1413s.jpg", "latestChapter": "《斗破苍穹：斗帝之路》手游·角色传记（下）", "updateTime": "2020-03-06 17:34:37", "biqugePath": "1_1413", "tags": null }, { "name": "第一序列", "description": "诸位，我是会说话的肘子，我回来了。　　这是一个新的故事。", "author": "会说话的肘子", "imgSrc": "https://www.xbiquge6.com/cover/87/87249/87249s.jpg", "latestChapter": "1112、好箭法！", "updateTime": "2020-05-09 23:44:52", "biqugePath": "87_87249", "tags": null }, { "name": "全球高武", "description": "今日头条——　　“大马宗师突破九品，征战全球！”　　“小马宗师问鼎至高，横扫欧亚！”　　“乔帮主再次出手，疑似九品大宗师境！”　　“股神宝刀未老，全球宗师榜再入前十！”　　“……”　　看着一条条新闻闪现，方平心好累，这剧本不对啊！", "author": "老鹰吃小鸡", "imgSrc": "https://www.xbiquge6.com/cover/81/81336/81336s.jpg", "latestChapter": "新书发布，求收藏推荐！", "updateTime": "2020-02-06 14:03:10", "biqugePath": "81_81336", "tags": null }, { "name": "元尊", "description": "天地为炉，万物为铜，阴阳为炭，造化为工。 气运之争，蟒雀吞龙。 究竟是蟒雀为尊，还是圣龙崛起，凌驾众生？ 这是气掌乾坤的世界，磅礴宏伟，一气可搬山，可倒海，可翻天，可掌阴阳乾坤。 世间源气分九品，三品称玄，六品成天，九品号圣。 吾有一口玄黄气，可吞天地日月星。", "author": "天蚕土豆", "imgSrc": "https://www.xbiquge6.com/cover/78/78513/78513s.jpg", "latestChapter": "第一千两百三十章 金擎天", "updateTime": "2020-05-09 20:32:27", "biqugePath": "78_78513", "tags": null }, { "name": "遮天", "description": "冰冷与黑暗并存的宇宙深处，九具庞大的龙尸拉着一口青铜古棺，亘古长存。 这是太空探测器在枯寂的宇宙中捕捉到的一幅极其震撼的画面。 九龙拉棺，究竟是回到了上古，还是来到了星空的彼岸？ 一个浩大的仙侠世界，光怪陆离，神秘无尽。热血似火山沸腾，激情若瀚海汹涌，欲望如深渊无止境…… 登天路，踏歌行，弹指遮天。", "author": "辰东", "imgSrc": "https://www.xbiquge6.com/cover/1/1365/1365s.jpg", "latestChapter": "我的新书《完美世界》已上传,请兄弟姐妹来观看", "updateTime": "2015-06-02 08:47:59", "biqugePath": "1_1365", "tags": null }, { "name": "点道为止", "description": "功夫究竟是什么？\r\r花架子还是杀人技？\r\r三千年冷兵器战争和无数民间私斗酝酿出来的把式，究竟是不是骗局？\r\r国术流开创者，功夫小说第一人梦入神机，在本书中为您揭秘。\r\r止戈为武，点到为止。\r\r“你若无敌，将会如何？”\r\r“得饶人处且饶人。”", "author": "梦入神机", "imgSrc": "https://www.xbiquge6.com/cover/33/33175/33175s.jpg", "latestChapter": "955 一念一生 大结局", "updateTime": "2020-02-01 19:28:24", "biqugePath": "33_33175", "tags": null }, { "name": "武逆乾坤", "description": "九州大陆，风云变幻。\n 一个只以武元论英雄的世界(其实武元就和真元，斗气差不多的存在）\n 一个籍籍无名的小子，一段不为人知的穿越，一个非常倒霉的奇遇。\n 从此少年的命运在不知不觉之后发生偏转，偏离了原来的轨迹。\n 各式各样的历练，纵横百合；流连与众多美女之间，暧昧叠加。\n 最后当一切风平浪静的时候，某个穿越男已经踩着众多的尸体与骨骸，踏上了极点，无人与之争锋。\n ", "author": "属龙语", "imgSrc": "https://www.xxbiquge.com/cover/4/4035/4035s.jpg", "latestChapter": "第两千三百一十二章 吾之雷霆", "updateTime": "2015-07-10 13:10:58", "biqugePath": "4_4035", "tags": null }, { "name": "都市阴阳师（都市灵剑仙）", "description": "【免费新书】都市灯红酒绿，但是妖魔食人。阴影之下，几乎每日有人消失。正如当年震惊全国的僵尸事件以及猫老太太……然而人乃万灵之长，妖魔食人，自然也有降妖佛魔者出世。全真、正一、高僧、世家、门派……白天，他们各司其职；夜晚，他们斩妖除魔！且看偶得阴阳师传承的林凡如何驾驭飞剑，震慑三界！", "author": "巫九", "imgSrc": "https://www.xbiquge6.com/cover/80/80257/80257s.jpg", "latestChapter": "第2178章 番外-重返昆仑（上）", "updateTime": "2020-01-12 19:47:56", "biqugePath": "80_80257", "tags": null }, { "name": "阴阳鬼术", "description": "玄术分阴阳，阳为道术，阴为鬼术。    林晓峰学鬼术，抓邪祟，可却陷入一个又一个阴谋诡计之中。    神秘的抓妖局，诡异的神农架，恐怖的昆仑山。    且看林晓峰如何斩妖魔，破阴邪！", "author": "巫九", "imgSrc": "https://www.xbiquge6.com/cover/66/66231/66231s.jpg", "latestChapter": "第2288章 番外-邪去真", "updateTime": "2018-05-30 02:16:24", "biqugePath": "66_66231", "tags": null }, { "name": "最后一个阴阳先生", "description": "大家在这个世界上读书，工作，谈恋爱的时候，有没有察觉到，这个世界其实有一点不对劲？    大家有没有想过    你的同桌，或许是一只活了千年的僵尸。    你的老师，或许是一只生活在人类社会的狐狸精。    那些传说中的灵异事件或许并不是传说，而是真实存在的。", "author": "巫九", "imgSrc": "https://www.xbiquge6.com/cover/12/12056/12056s.jpg", "latestChapter": "第八百一十二章 大结局!", "updateTime": "2016-11-12 17:39:48", "biqugePath": "12_12056", "tags": null }, { "name": "莫路诛仙", "description": "“至宝，至宝，这是绝世至宝啊，你看这紫瞳，如此震慑心神，直撼神魄，若是得到了这双紫瞳，试问在这天地间，千界之内还有谁之幻法能与我之幻殷魔功相比肩，可同日而论，你看这这洁白无暇的肌肤......”    我...生来只为杀戮？", "author": "梦曲绮歌", "imgSrc": "https://www.xbiquge6.com/cover/54/54320/54320s.jpg", "latestChapter": "第四百三十一章 嗯......", "updateTime": "2016-09-21 21:13:07", "biqugePath": "54_54320", "tags": null }, { "name": "飞剑问道（飞剑问到）", "description": "在这个世界，有狐仙、河神、水怪、大妖，也有求长生的修行者。　　修行者们，　　开法眼，可看妖魔鬼怪。　　炼一口飞剑，可千里杀敌。　　千里眼、顺风耳，更可探查四方。　　……　　秦府二公子‘秦云’，便是一位修行者……", "author": "我吃西红柿", "imgSrc": "https://www.xbiquge6.com/cover/3/3197/3197s.jpg", "latestChapter": "番茄的新书《沧元图》已经正式上传！新书需要大家的支持~~~", "updateTime": "2019-08-21 10:32:40", "biqugePath": "3_3197", "tags": null }, { "name": "一等家丁", "description": "见过比贵族还猖狂的家丁吗？见过比纨绔还嚣张的家丁吗？见过比帝王还霸气的家丁吗？见过勾搭自家小姐的家丁吗？见过坐拥倾城祸水的家丁吗？许枫作为现代男人，一向醉情风月，声色犬马。却因为意外重生异界，混迹异界成为家丁的他玩纨绔，斗贵族，杀强者。调戏调戏萧家小姐，勾搭勾搭豪门淑女，祸害万千。成就一代家丁！ 各位书友要是觉得《一等家丁》还不错的话请不要忘记向您QQ群和微博里的朋友推荐哦！", "author": "纯情犀利哥", "imgSrc": "https://www.xbiquge6.com/cover/0/434/434s.jpg", "latestChapter": "第2257章 轮回", "updateTime": "2015-05-29 02:49:11", "biqugePath": "0_434", "tags": null }, { "name": "绝世邪神（邪御天娇）", "description": "重生异世，放荡不羁的叶楚面对众多绝世天才，倾世红颜。他如何踏破苍穹，让或冷艳或性感的佳人随他一起涨姿势？！", "author": "纯情犀利哥", "imgSrc": "https://www.xbiquge6.com/cover/2/2232/2232s.jpg", "latestChapter": "第五千八百二十三章 沉入水底", "updateTime": "2019-10-05 09:45:43", "biqugePath": "2_2232", "tags": null }]

  const { params } = match;
  const { tagName } = params;
  return (
    <div className='page-category'>
      <BaseHeader />
      <section className='section-category'>
        <div className="category">
          <i className="iconfont icon-liebiao" />   <a href='/'>作品分类</a> / {tagName}
        </div>
        <BookList dataSource={data} />
      </section>
    </div>
  )
}

export default withRouter(Category);