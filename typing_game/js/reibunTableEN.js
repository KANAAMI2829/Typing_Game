'use strict';

const EN_REIBUN_TABLE_JUNIOR_1 = [
  ['school','学校'],
  ['class','学級，授業'],
  ['pencil','鉛筆'],
  ['pen','（ボール）ペン'],
  ['desk','机'],
  ['bag','カバン'],
  ['notebook','ノートブック'],
  ['homework','宿題'],
  ['diary','日記'],
  ['window','窓'],
  ['book','本'],
  ['chair','いす'],
  ['door','ドア'],
  ['piano','ピアノ'],
  ['guitar','ギター'],
  ['house','家'],
  ['room','部屋'],
  ['kitchen','台所'],
  ['cup','カップ'],
  ['glass','コップ，ガラス'],
  ['bed','ベッド'],
  ['floor','床，階'],
  ['table','テーブル'],
  ['picture','絵，写真'],
  ['pot','ポット'],
  ['subject','科目，教科'],
  ['English','英語'],
  ['math','数学'],
  ['science','科学'],
  ['body','からだ'],
  ['head','頭'],
  ['eye','目'],
  ['nose','鼻'],
  ['mouth','口'],
  ['hand','手'],
  ['finger','指'],
  ['foot','足'],
  ['sports','スポーツ'],
  ['basketball','バスケットボール'],
  ['baseball','野球'],
  ['tennis','テニス'],
  ['mitt','ミット'],
  ['bat','バット'],
  ['racket','ラケット'],
  ['boat','ボート'],
  ['food','食べ物'],
  ['bread','パン'],
  ['rice','米'],
  ['egg','卵'],
  ['fruit','果物'],
  ['orange','オレンジ'],
  ['apple','りんご'],
  ['lemon','レモン'],
  ['cake','ケーキ'],
  ['milk','牛乳'],
  ['animal','動物'],
  ['dog','犬'],
  ['cat','猫'],
  ['bird','鳥'],
  ['sheep','羊'],
  ['cow','うし'],
  ['monkey','さる'],
  ['bus','バス'],
  ['bicycle','自転車'],
  ['car','自動車'],
  ['train','電車'],
  ['plane','飛行機'],
  ['fish','魚'],
  ['flower','花'],
  ['girl','少女'],
  ['boy','少年'],
  ['father','父'],
  ['mother','母'],
  ['parent','親'],
  ['brother','兄弟'],
  ['sister','姉妹'],
  ['son','息子'],
  ['daughter','娘'],
  ['family','家族'],
  ['friend','友人'],
  ['woman','女の人'],
  ['man','男の人、人'],
  ['aunt','おば'],
  ['uncle','おじ'],
  ['citizen','市民'],
  ['nurse','看護婦'],
  ['doctor','医者'],
  ['pilot','パイロット'],
  ['cook','料理人'],
  ['singer','歌手'],
  ['clerk','店員'],
  ['student','学生'],
  ['teacher','先生'],
  ['player','選手，演奏者'],
  ['way','道，方法'],
  ['right','右'],
  ['left','左'],
  ['north','北'],
  ['south','南'],
  ['east','東'],
  ['west','西'],
  ['country','国'],
  ['Japan','日本'],
  ['America','アメリカ'],
  ['China','中国'],
  ['India','インド'],
  ['city','市，都会'],
  ['church','教会'],
  ['town','街、町'],
  ['village','町、村'],
  ['station','駅'],
  ['place','場所'],
  ['wall','壁'],
  ['gate','門'],
  ['yard','中庭'],
  ['field','野原，競技場'],
  ['bank','銀行'],
  ['library','図書館'],
  ['hospital','病院'],
  ['hotel','ホテル'],
  ['office','事務所'],
  ['store','店'],
  ['garden','庭'],
  ['park','公園'],
  ['box','箱'],
  ['letter','手紙'],
  ['watch','腕時計'],
  ['tape','テープ'],
  ['cap','帽子'],
  ['mail','郵便'],
  ['stamp','切手'],
  ['doll','人形'],
  ['tree','木'],
  ['map','地図'],
  ['camera','カメラ'],
  ['present','プレゼント'],
  ['chance','機会'],
  ['age','年齢'],
  ['half','半分'],
  ['number','数'],
  ['line','線，列'],
  ['danger','危険'],
  ['a␣lot␣of','たくさん'],
  ['meter','メートル'],
  ['thing','こと・物'],
  ['name','名前'],
  ['walk','散歩'],
  ['work','仕事，作品'],
  ['season','季節'],
  ['spring','春'],
  ['summer','夏'],
  ['autumn','秋'],
  ['fall','秋'],
  ['winter','冬'],
  ['January','１月'],
  ['February','２月'],
  ['March','３月'],
  ['April','４月'],
  ['May','５月'],
  ['June','６月'],
  ['July','７月'],
  ['August','８月'],
  ['September','９月'],
  ['October','１０月'],
  ['November','１１月'],
  ['December','１２月'],
  ['Sunday','日曜日'],
  ['Monday','月曜日'],
  ['Tuesday','火曜日'],
  ['Wednesday','水曜日'],
  ['Thursday','木曜日'],
  ['Friday','金曜日'],
  ['Saturday','土曜日'],
  ['minute','分，ちょっとの間'],
  ['hour','時間'],
  ['day','日'],
  ['week','週'],
  ['month','月'],
  ['year','年'],
  ['look','見る，～に見える'],
  ['read','読む'],
  ['drink','飲む'],
  ['walk','歩く'],
  ['wash','洗う'],
  ['run','走る'],
  ['stop','止める，止まる'],
  ['have','持っている'],
  ['wait','待つ'],
  ['collect','集める'],
  ['send','送る'],
  ['come','来る'],
  ['want','欲しい'],
  ['do','する'],
  ['make','作る'],
  ['ride','乗る'],
  ['enjoy','楽しむ'],
  ['play','遊ぶ,スポーツする,演奏する'],
  ['sing','歌う'],
  ['speak','話す'],
  ['cook','料理する'],
  ['swim','泳ぐ'],
  ['write','書く，手紙を書く'],
  ['catch','捕まえる'],
  ['open','開ける'],
  ['move','動く'],
  ['help','助ける'],
  ['buy','買う'],
  ['leave','去る，残す'],
  ['meet','会う'],
  ['live','住む，生きる'],
  ['work','働く'],
  ['go','行く'],
  ['know','知っている'],
  ['study','勉強する'],
  ['eat','食べる'],
  ['learn','学ぶ，覚える'],
  ['stand','立つ'],
  ['dance','おどる'],
  ['sell','売る'],
  ['arrive','到着する'],
  ['get','得る'],
  ['put','置く'],
  ['stay','滞在する'],
  ['try','試す'],
  ['give','与える、あげる'],
  ['use','使う'],
  ['visit','訪問する'],
  ['need','必要とする'],
  ['happy','幸福な，楽しい'],
  ['poor','貧乏な，かわいそうな'],
  ['rich','金持ちの，豊かな'],
  ['kind','親切な'],
  ['honest','正直な'],
  ['easy','やさしい，気楽に'],
  ['good','良い'],
  ['best','一番良い'],
  ['nice','良い'],
  ['bad','悪い'],
  ['clean','きれいな'],
  ['busy','忙しい'],
  ['large','大きい，広い'],
  ['tall','高い,背の高い'],
  ['high','高い'],
  ['fast','速い'],
  ['early','早い'],
  ['slow','遅い'],
  ['long','長い'],
  ['short','短い，背が低い'],
  ['warm','暖かい'],
  ['hot','暑い'],
  ['cool','涼しい、かっこいい'],
  ['cold','冷たい，寒い'],
  ['new','新しい'],
  ['old','年をとった，古い'],
  ['young','若い'],
  ['junior','年下の，下級の'],
  ['little','小さい，幼い,少しの'],
  ['big','大きい'],
  ['small','小さな'],
  ['dark','暗い，黒い'],
  ['careful','注意深い'],
  ['hungry','空腹の'],
  ['ill','病気の'],
  ['sick','病気で(の)'],
  ['white','白い'],
  ['black','黒い'],
  ['blue','青い'],
  ['red','赤い'],
  ['green','緑の'],
  ['strong','強い，じょうぶな'],
  ['fine','元気な，晴れた'],
  ['famous','有名な'],
  ['glad','うれしい'],
  ['beautiful','美しい'],
  ['next','次の，隣の'],
  ['sad','かなしい'],
  ['true','ほんとうの'],
  ['one','1'],
  ['two','2'],
  ['three','3'],
  ['four','4'],
  ['five','5'],
  ['six','6'],
  ['seven','7'],
  ['eight','8'],
  ['nine','9'],
  ['ten','10'],
  ['eleven','11'],
  ['twelve','12'],
  ['thirteen','13'],
  ['fourteen','14'],
  ['fifteen','15'],
  ['sixteen','16'],
  ['seventeen','17'],
  ['eighteen','18'],
  ['nineteen','19'],
  ['twenty','20'],
  ['thirty','30'],
  ['forty','40'],
  ['fifty','50'],
  ['sixty','60'],
  ['seventy','70'],
  ['eighty','80'],
  ['ninety','90'],
  ['hundred','100'],
  ['always','いつも'],
  ['sometimes','時々'],
  ['often','しばしば'],
  ['again','再び'],
  ['far','遠くに，はるかに'],
  ['here','ここに'],
  ['very','非常に'],
  ['how','どのくらい'],
  ['too','～もまた，～すぎる'],
  ['no','いいえ'],
  ['who','だれ'],
  ['what','何'],
  ['which','どちら'],
  ['whose','だれの(もの)'],
  ['later','後で'],
  ['soon','すぐに'],
  ['yesterday','昨日'],
  ['already','すでに'],
  ['up','上へ'],
  ['there','そこに'],
  ['well','よく，じょうずに'],
  ['so','とても、だから'],
  ['slowly','ゆっくりと'],
  ['yet','まだ'],
  ['why','なぜ'],
  ['much','多量の'],
  ['every','毎～'],
  ['many','多くの'],
  ['sorry','ごめんなさい、残念な'],
  ['be␣able␣to','～できる'],
  ['usually','ふつう'],
  ['today','今日，現在'],
  ['fast','速く'],
  ['now','今'],
  ['ago','前'],
  ['where','どこに'],
  ['home','家を(へ)'],
  ['much','ずっと，たいへん'],
  ['yes','はい'],
  ['also','もまた'],
  ['not','～でない'],
  ['together','一緒に'],
  ['some','いくつかの'],
  ['early','早い'],
  ['both','両方'],
  ['all','みんな'],
  ['most','ほとんど'],
  ['I','私は(が)'],
  ['my','私の'],
  ['me','私を'],
  ['mine','私のもの'],
  ['you','あなたは，あなた達は'],
  ['your','あなたの，あなた達の'],
  ['you','あなたに(を),あなた達に(を)'],
  ['yours','あなたのもの，あなた達のもの'],
  ['he','彼は'],
  ['his','彼の'],
  ['him','彼を(に)'],
  ['his','彼のもの'],
  ['she','彼女は'],
  ['her','彼女の'],
  ['her','彼女を（に）'],
  ['hers','彼女のもの'],
  ['it','それは'],
  ['its','それの'],
  ['it','それを(に)'],
  ['we','私たちは'],
  ['our','私たちの'],
  ['us','私たちを(に)'],
  ['ours','私たちのもの'],
  ['they','彼(女)らは，それらは，'],
  ['their','彼(女)らの,それらの'],
  ['them','彼(女)らを(に)それらを(に)'],
  ['theirs','彼(女)らのものそれらのもの'],
  ['myself','私自身'],
  ['yourself','あなた自身'],
  ['himself','彼自身'],
  ['herself','彼女自身'],
  ['itself','それ自身'],
  ['ourselves','私たち自身'],
  ['themselves','彼(女)ら自身'],
  ['this','これ'],
  ['that','あれ'],
  ['these','これら'],
  ['those','あれら'],
  ['everyone','みんな'],
  ['someone','だれか'],
  ['something','何か'],
  ['nobody','だれも～ない'],
  ['none','何も(だれも)～ない'],
  ['everything','すべてのもの'],
  ['everybody','だれでもみな'],
  ['nothing','何も～ない']
]
