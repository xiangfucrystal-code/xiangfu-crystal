import expanded from './products-expanded.json';

const L = (zh, en) => ({ zh, en });

const categoryCopy = {
  'crystal-wand-point': L('天然水晶晶柱、晶尖与冥想魔杖，适合疗愈、家居陈列和礼品渠道。', 'Natural crystal points, towers and meditation wands for healing, decor and gift channels.'),
  'crystal-ball-sphere': L('多种天然矿石抛光水晶球，可搭配底座用于家居、办公与礼品陈列。', 'Polished natural-stone spheres for home, office and gift displays, with optional stands.'),
  'crystal-bracelet': L('天然水晶圆珠、切面和编织手链，支持尺寸、配珠与包装定制。', 'Natural crystal bead, faceted and woven bracelets with custom sizing, combinations and packaging.'),
  'crystal-pendant': L('水晶吊坠、项链与 DIY 配件，覆盖天然石、925 银与复古金属配件。', 'Crystal pendants, necklaces and DIY charms in natural stone, sterling silver and vintage fittings.'),
  'crystal-ring': L('天然石戒指与可调节款式，适合珠宝零售和礼品项目。', 'Natural-stone and adjustable rings for jewelry retail and gift programs.'),
  'crystal-earring': L('紫水晶、碧玺、月光石等天然宝石耳饰。', 'Natural gemstone earrings in amethyst, tourmaline, moonstone and more.'),
  'tumbled-stone-gravel': L('天然水晶碎石、滚石与散装原料，起订量 1KG。', 'Natural crystal chips, tumbled stones and bulk material with MOQ 1KG.'),
  'crystal-keychain': L('水晶钥匙扣、包挂和车饰，可用于礼品、DIY 和品牌定制。', 'Crystal keychains, bag charms and car accessories for gifts, DIY and private label.'),
  'wind-chime-suncatcher': L('水晶风铃、阳光吊饰和车载挂件，为家居与礼品渠道提供多样选择。', 'Crystal wind chimes, suncatchers and hanging charms for decor and gift channels.'),
  'healing-gift-box-set': L('七脉轮、原石与能量主题水晶礼盒，支持包装与内容组合定制。', 'Chakra, raw-stone and energy-themed crystal gift sets with customizable contents and packaging.'),
  'crystal-bottle': L('天然水晶香水瓶、精油瓶与滚珠瓶，可用于美容与礼品项目。', 'Natural crystal perfume, essential-oil and roller bottles for beauty and gift programs.'),
  'crystal-tree': L('水晶树、招财树与干花盆栽摆件，适合桌面、家居和节庆礼品。', 'Crystal bonsai, money trees and dried-flower arrangements for desk, decor and seasonal gifts.'),
  'crystal-carving-figurine': L('天然水晶与宝石雕刻摆件，覆盖动物、节日和微景观主题。', 'Natural crystal and gemstone carvings across animal, seasonal and miniature-garden themes.'),
  'crystal-accessories-display': L('水晶球木座、首饰展示架等配套陈列用品。', 'Wooden sphere stands, jewelry displays and supporting presentation accessories.'),
  'crystal-beads': L('天然石圆珠、切面珠与 DIY 首饰散珠。', 'Natural-stone round, faceted and DIY jewelry beads.'),
  'crystal-daily-necessities': L('将天然水晶融入文具、桌面与日常使用场景。', 'Natural crystal adapted into stationery, desktop and everyday-use products.'),
  'crystal-necklace': L('天然水晶项链与不规则宝石首饰，支持配件和包装定制。', 'Natural crystal necklaces and irregular gemstone jewelry with custom fittings and packaging.'),
  'mineral-specimen-rough-stone': L('天然矿物标本、共生矿和水晶原石，适合收藏、陈列与批量加工。', 'Natural mineral specimens, symbiotic stones and rough crystal for collections, display and processing.'),
  'crystal-slice-coaster': L('水晶切片、杯垫与桌面装饰用品。', 'Crystal slices, coasters and tabletop decor.'),
  'crystal-heart-carving': L('爱心、蛋形、骷髅、手掌等主题水晶雕刻与配饰。', 'Heart, egg, skull, palm and themed crystal carvings and accessories.'),
  'crystal-cluster-geode': L('天然水晶簇、幽灵水晶簇与晶洞类矿物陈列品。', 'Natural crystal clusters, phantom quartz clusters and geode display pieces.'),
};

export const CATEGORIES = expanded.categories.map((c, index) => ({
  slug: c.key,
  no: String(index + 1).padStart(2, '0'),
  name: { zh: c.zh, en: c.en },
  short: categoryCopy[c.key],
  sourceCategory: c.sourceCategory,
  intro: categoryCopy[c.key],
  image: expanded.products.find((p) => p.categoryKey === c.key)?.image || '/assets/images/hero-01.jpg',
  count: expanded.products.filter((p) => p.categoryKey === c.key).length,
  seoTitle: {
    zh: `${c.zh}批发与定制 | Xiangfu Crystal 祥福水晶`,
    en: `Wholesale ${c.en} | Xiangfu Crystal`,
  },
  metaDesc: {
    zh: `${c.zh}批发供应，MOQ 1KG，支持 OEM/ODM 定制与全球询盘。`,
    en: `Wholesale ${c.en.toLowerCase()} with MOQ 1KG, OEM/ODM customization and global inquiry support.`,
  },
}));

export const PRODUCTS = expanded.products.map((p, index) => ({
  slug: p.slug,
  plate: p.sourceId ? `XF-${p.sourceId.slice(-6)}` : `XF-${String(index + 1).padStart(4, '0')}`,
  sourceId: p.sourceId,
  cat: p.categoryKey,
  category: { zh: p.categoryZh, en: p.categoryEn },
  name: { zh: p.titleZh, en: p.titleEn },
  material: {
    zh: p.material?.zh || '以产品详情与实物确认为准',
    en: p.material?.en || 'Confirm from product details and sample',
  },
  img: p.image,
  images: [p.image],
  sourceUrl: p.detailUrl,
  sourceCategory: p.sourceCategory,
  size: L('按产品款式确认', 'Confirm by product'),
  moq: '1KG',
  leadTime: L('根据数量与定制要求确认', 'Confirm by quantity and customization'),
  customization: L('支持 OEM/ODM、标签、包装与组合定制', 'OEM/ODM, labeling, packaging and assortment options'),
  packaging: L('防护包装与出口纸箱，可定制零售包装', 'Protective packing and export cartons; retail packaging available'),
  blurb: {
    zh: `${p.titleZh}，归属${p.categoryZh}分类。支持批量采购与 OEM/ODM 定制，具体材质、尺寸、交期和报价请提交询盘确认。`,
    en: `${p.titleEn}. Listed under ${p.categoryEn}. Wholesale and OEM/ODM available; confirm material, size, lead time and quotation by inquiry.`,
  },
  titleZh: p.titleZh,
  titleEn: p.titleEn,
}));

export const STORE_SOURCE = expanded.sourceUrl;
export const bySlug = (list, slug) => list.find((item) => item.slug === slug);
export const byCat = (list, cat) => list.filter((item) => item.cat === cat);
export const catBySlug = (slug) => CATEGORIES.find((category) => category.slug === slug);
