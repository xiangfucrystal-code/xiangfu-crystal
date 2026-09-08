const L = (zh, en) => ({ zh, en });

export const POSTS = [
  {
    slug: 'how-to-buy-wholesale-crystal-products',
    title: L('批发采购天然水晶产品：如何判断材质与做工', 'How to Source Wholesale Crystal Products: Material & Finish'),
    category: L('采购指南', 'Sourcing Guide'),
    date: '2026-08-18',
    image: '/assets/catalog/images/green-phantom-quartz-point-1601253901885.jpg',
    excerpt: L('从材质、打磨、样品、包装与检验五个方面，降低天然水晶批发采购风险。', 'Reduce sourcing risk by checking material, polish, samples, packing and inspection.'),
    body: [
      { h: L('先确认材质，再比较外观', 'Confirm material before comparing appearance') },
      { p: L('天然水晶存在颜色、纹理和通透度差异。采购前应明确石种、是否天然、是否经过处理，以及批次内允许的差异范围。', 'Natural crystal varies in color, pattern and clarity. Confirm stone type, natural or treated status, and acceptable batch variation before ordering.') },
      { h: L('样品必须对应量产标准', 'Samples must represent production') },
      { p: L('样品不仅用于看款式，也用于确认打磨、边角、配件与包装标准。量产应以确认样为依据。', 'Samples should confirm polish, edges, fittings and packaging—not just appearance. Production should follow the approved sample.') },
      { h: L('把包装和检验写进订单要求', 'Include packing and inspection in the order') },
      { p: L('易碎的水晶雕刻和水晶球需要防护包装。出货前应核对数量、外观和包装，避免到货后产生不必要的损耗。', 'Fragile carvings and spheres require protective packing. Check quantity, appearance and packing before shipment to reduce damage.') },
    ],
  },
  {
    slug: 'crystal-supplier-checklist',
    title: L('选择水晶供应商前应确认的 7 个问题', '7 Questions to Ask a Crystal Supplier'),
    category: L('供应商核查', 'Supplier Checklist'),
    date: '2026-08-04',
    image: '/assets/images/company/craft-workshop.jpg',
    excerpt: L('从生产能力、MOQ、样品、定制、质检、包装和沟通效率判断供应商是否适合长期合作。', 'Evaluate production, MOQ, samples, customization, QC, packing and communication.'),
    body: [
      { h: L('是否有真实生产与加工能力？', 'Do they have real production capability?') },
      { p: L('了解供应商是否具备原石处理、切割、打磨、组装或稳定的加工协作能力，并要求提供真实现场图片。', 'Confirm whether the supplier has rough-stone handling, cutting, polishing, assembly or stable production partners, supported by real facility images.') },
      { h: L('MOQ 和定制边界是否清楚？', 'Are MOQ and customization boundaries clear?') },
      { p: L('祥福水晶的常规起订量为 1KG。不同产品与定制项目可能需要进一步确认，采购时应同时说明品类、数量和包装要求。', 'Xiangfu Crystal’s standard MOQ is 1KG. Product and custom programs may require confirmation, so specify category, quantity and packaging needs.') },
      { h: L('能否高效沟通订单细节？', 'Can they communicate order details efficiently?') },
      { p: L('将产品编号、目标数量、目的地和定制要求一次性提供，有助于更快获得准确报价和交期。', 'Share product references, target quantity, destination and customization in one message for faster, more accurate quotations.') },
    ],
  },
  {
    slug: 'moq-customization-crystal-products',
    title: L('水晶产品 MOQ 1KG 与 OEM/ODM 定制说明', 'Crystal MOQ 1KG & OEM/ODM Guide'),
    category: L('订单说明', 'Order Guide'),
    date: '2026-07-21',
    image: '/assets/images/company/production-process.jpg',
    excerpt: L('了解 1KG 起订量如何应用于碎石、滚石、晶柱、水晶球、饰品和礼盒等不同品类。', 'How MOQ 1KG applies across chips, tumbled stones, points, spheres, jewelry and gift sets.'),
    body: [
      { h: L('常规起订量为 1KG', 'Standard MOQ is 1KG') },
      { p: L('1KG 起订量适用于常规批发沟通。对于成套礼盒、特殊配件或深度定制，最终 MOQ 需结合具体方案确认。', 'MOQ 1KG applies to standard wholesale inquiries. Gift sets, special fittings and deeper customization may require confirmation.') },
      { h: L('定制从明确规格开始', 'Customization starts with a clear specification') },
      { p: L('请提供参考图片、产品编号、目标尺寸、数量、标签和包装要求。我们会据此确认可行性、交期和报价。', 'Provide a reference image or product ID, target size, quantity, label and packaging requirements for feasibility, lead time and quotation.') },
      { h: L('先样品，后批量', 'Sample first, then scale') },
      { p: L('定制项目建议先确认样品，以锁定材质、颜色、打磨和包装标准，再进入批量生产。', 'For custom programs, approve a sample to lock material, color, polish and packaging before volume production.') },
    ],
  },
];

export const postBySlug = (slug) => POSTS.find((post) => post.slug === slug);
