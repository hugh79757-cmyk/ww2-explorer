export const timeline = [
  { date: '1940年7月10日', title: '不列颠空战开始', desc: '德国空军开始对英国沿海目标和船队发动攻击，拉开了不列颠空战的序幕。', phase: '海峡战斗阶段' },
  { date: '1940年8月13日', title: '鹰日 (Adlertag)', desc: '德国空军发动"鹰日"大规模空袭，目标是摧毁英国皇家空军。这一天德军出动了1,485架次飞机。', phase: '主要进攻阶段' },
  { date: '1940年8月15日', title: '最激烈的一天', desc: '德国空军从丹麦、挪威和法国同时发动进攻，出动近2,000架次。英国空军全力迎战，击落75架德机。', phase: '主要进攻阶段' },
  { date: '1940年9月7日', title: '闪电战开始', desc: '德国空军转而轰炸伦敦，348架轰炸机在617架战斗机护航下空袭伦敦东区。这给了英国空军喘息的机会。', phase: '闪电战阶段' },
  { date: '1940年9月15日', title: '不列颠空战日', desc: '德军发动最后的大规模日间空袭。英国空军击落56架德机，彻底粉碎了德国夺取制空权的希望。现定为"不列颠空战日"。', phase: '转折点' },
  { date: '1940年10月31日', title: '空战结束', desc: '德国放弃了夺取英国制空权的计划。英国皇家空军以2,550人的代价，成功保卫了英国，挫败了希特勒的入侵计划。', phase: '胜利' },
]

export const planes = [
  {
    name: '喷火式战斗机', nameEn: 'Supermarine Spitfire', country: '🇬🇧 英国', role: '战斗机',
    specs: { speed: 594, range: 756, ceiling: 11300, armament: '8挺7.7mm机枪' },
    desc: '英国最著名的战斗机，优雅的椭圆形机翼设计使其拥有卓越的机动性。在不列颠空战中与飓风式并肩作战，成为英国抵抗的象征。',
    stats: { speed: 8, agility: 9, firepower: 7, durability: 6 }
  },
  {
    name: '飓风式战斗机', nameEn: 'Hawker Hurricane', country: '🇬🇧 英国', role: '战斗机',
    specs: { speed: 547, range: 965, ceiling: 10970, armament: '8挺7.7mm机枪' },
    desc: '不列颠空战中击落敌机数量最多的英国战斗机。虽然不如喷火式出名，但飓风式承担了更多的战斗任务。',
    stats: { speed: 7, agility: 7, firepower: 7, durability: 8 }
  },
  {
    name: 'Bf 109战斗机', nameEn: 'Messerschmitt Bf 109', country: '🇩🇪 德国', role: '战斗机',
    specs: { speed: 560, range: 660, ceiling: 10500, armament: '2门20mm机炮+2挺7.92mm机枪' },
    desc: '德国空军的主力战斗机，二战中产量最大的战斗机之一。速度快、火力强，但航程有限是其在不列颠空战中的致命弱点。',
    stats: { speed: 8, agility: 7, firepower: 8, durability: 7 }
  },
  {
    name: 'Bf 110战斗机', nameEn: 'Messerschmitt Bf 110', country: '🇩🇪 德国', role: '重型战斗机',
    specs: { speed: 560, range: 1094, ceiling: 10500, armament: '2门20mm机炮+5挺7.92mm机枪' },
    desc: '德国双发重型战斗机，原本被寄予厚望作为远程护航战斗机。但在面对灵活的喷火式和飓风式时表现不佳，反而需要Bf 109来保护。',
    stats: { speed: 7, agility: 4, firepower: 9, durability: 7 }
  },
  {
    name: 'He 111轰炸机', nameEn: 'Heinkel He 111', country: '🇩🇪 德国', role: '中型轰炸机',
    specs: { speed: 440, range: 2300, ceiling: 8500, armament: '7挺7.92mm机枪 + 2000kg炸弹' },
    desc: '德国空军的主力轰炸机，对伦敦和英国各城市实施了大规模轰炸。但缺乏足够的自卫火力，在没有战斗机护航时损失惨重。',
    stats: { speed: 5, agility: 3, firepower: 6, durability: 6 }
  },
]

export const didYouKnow = [
  '🎖️ 丘吉尔的名言："在人类战争的历史上，从未有过这么多人亏欠这么少的人这么多。"——致敬英国皇家空军飞行员。',
  '📡 英国的秘密武器——雷达！英国是世界上第一个建立完整雷达防空网的国家。雷达让英国能提前发现来袭德机，这是取胜的关键。',
  '🛩️ 不列颠空战中最年轻的王牌飞行员只有18岁！',
  '🇵🇱 在不列颠空战中，波兰飞行员组成的第303中队击落敌机数量超过了任何一个英国中队！',
  '🏭 喷火式战斗机的椭圆形机翼设计不仅美观，还能在高速飞行时减少阻力，提高机动性。',
  '💡 德军将轰炸目标从英国机场转向伦敦，是不列颠空战的转折点。这给了英国空军修复机场和恢复战斗力的时间。',
]
