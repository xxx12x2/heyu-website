export default function HeyuWebsite() {
  const products = [
    {
      title: '智能控制模块',
      desc: '稳定、高效、适用于多种工业与智能设备场景。',
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: '工业电子设备',
      desc: '现代工业制造标准，兼顾性能与长期可靠性。',
      image:
        'https://images.unsplash.com/photo-1581092160607-ee22731d8a08?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: '精密电子组件',
      desc: '高品质元器件方案，满足全球客户多元需求。',
      image:
        'https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  return (
    <div className="min-h-screen bg-[#f5f3ef] text-[#2b2b2b] overflow-hidden">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/70 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-wide">合宇电子</h1>
            <p className="text-xs text-neutral-500 tracking-[3px]">
              HEYU ELECTRONICS
            </p>
          </div>

          <nav className="hidden lg:flex items-center gap-10 text-sm text-neutral-700">
            <a href="#home" className="hover:text-black transition">
              首页
            </a>
            <a href="#about" className="hover:text-black transition">
              关于我们
            </a>
            <a href="#products" className="hover:text-black transition">
              产品中心
            </a>
            <a href="#factory" className="hover:text-black transition">
              工厂实力
            </a>
            <a href="#contact" className="hover:text-black transition">
              联系我们
            </a>
          </nav>

          <button className="px-6 py-3 rounded-full bg-[#4e3b31] text-white text-sm hover:scale-105 transition">
            获取报价
          </button>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative h-screen flex items-center"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2200&auto=format&fit=crop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white w-full">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[8px] text-sm text-white/60 mb-6">
              Modern Electronics Manufacturer
            </p>

            <h2 className="text-5xl md:text-7xl leading-tight font-semibold mb-8">
              打造现代化
              <br />
              高品质电子品牌
            </h2>

            <p className="text-lg leading-8 text-white/80 mb-10 max-w-2xl">
              合宇电子专注于电子产品研发、制造与全球化服务，
              以现代工艺、稳定品质与简约设计语言，
              为客户提供值得长期信赖的产品解决方案。
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-full bg-[#4e3b31] hover:scale-105 transition">
                产品中心
              </button>

              <button className="px-8 py-4 rounded-full border border-white/30 hover:bg-white hover:text-black transition">
                联系我们
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 px-6 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="tracking-[5px] uppercase text-sm text-[#8b6f5e] mb-5">
              About Us
            </p>

            <h3 className="text-4xl md:text-6xl font-semibold leading-tight mb-8">
              简约设计
              <br />
              与制造品质并重
            </h3>

            <p className="text-neutral-600 text-lg leading-8 mb-6">
              合宇电子致力于电子产品研发与现代化制造，
              拥有稳定的供应链体系与专业技术团队，
              为客户提供高品质、长期稳定的产品支持。
            </p>

            <button className="px-8 py-4 rounded-full bg-[#4e3b31] text-white hover:scale-105 transition">
              了解更多
            </button>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1563770660941-10a63607639d?q=80&w=1600&auto=format&fit=crop"
              className="rounded-[36px] shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="tracking-[5px] uppercase text-sm text-[#8b6f5e] mb-5">
              Products
            </p>

            <h3 className="text-4xl md:text-5xl font-semibold">
              产品中心
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((item, index) => (
              <div
                key={index}
                className="group rounded-[32px] overflow-hidden bg-[#f5f3ef] hover:shadow-2xl transition duration-500"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-8">
                  <h4 className="text-2xl font-semibold mb-4">{item.title}</h4>

                  <p className="text-neutral-600 leading-7 mb-6">
                    {item.desc}
                  </p>

                  <button className="text-[#8b6f5e] hover:translate-x-2 transition">
                    查看详情 →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 px-6 bg-[#2d241f] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-4xl md:text-6xl font-semibold leading-tight mb-8">
            联系合宇电子
          </h3>

          <p className="text-white/70 text-lg leading-8 mb-10 max-w-2xl mx-auto">
            欢迎联系我们获取产品资料、报价方案与合作支持。
          </p>

          <button className="px-10 py-5 rounded-full bg-white text-black hover:scale-105 transition">
            立即咨询
          </button>
        </div>
      </section>
    </div>
  )
}