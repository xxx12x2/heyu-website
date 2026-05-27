export default function Home() {
  const products = [
    {
      title: '智能控制模块',
      desc: '稳定、高效、适用于现代工业与智能设备。',
      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: '工业电子设备',
      desc: '现代制造工艺与长期可靠性并重。',
      image:
        'https://images.unsplash.com/photo-1581092160607-ee22731d8a08?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: '精密电子组件',
      desc: '高品质电子方案，满足全球客户需求。',
      image:
        'https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=1600&auto=format&fit=crop',
    },
  ]

  return (
    <main className="bg-[#0d0d0d] text-white overflow-hidden">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-[4px]">
              HEYU
            </h1>
            <p className="text-xs tracking-[6px] text-white/40 mt-1">
              ELECTRONICS
            </p>
          </div>

          <nav className="hidden md:flex items-center gap-10 text-sm text-white/70">
            <a href="#home" className="hover:text-white transition">
              首页
            </a>
            <a href="#about" className="hover:text-white transition">
              关于我们
            </a>
            <a href="#products" className="hover:text-white transition">
              产品中心
            </a>
            <a href="#contact" className="hover:text-white transition">
              联系我们
            </a>
          </nav>

          <button className="px-6 py-3 rounded-full bg-[#c6a77b] text-black font-medium hover:scale-105 transition duration-300">
            获取报价
          </button>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative min-h-screen flex items-center"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2200&auto=format&fit=crop"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/70" />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[10px] text-sm text-[#c6a77b] mb-8">
              Modern Electronics Manufacturer
            </p>

            <h2 className="text-6xl md:text-8xl font-semibold leading-[1.05] mb-10">
              打造全球化
              <br />
              电子品牌
            </h2>

            <p className="text-lg md:text-xl text-white/70 leading-9 max-w-2xl mb-12">
              合宇电子专注于现代电子产品研发、制造与全球服务，
              以高品质制造标准与现代化设计语言，
              为全球客户提供长期可靠的产品解决方案。
            </p>

            <div className="flex flex-wrap gap-5">
              <button className="px-8 py-4 rounded-full bg-[#c6a77b] text-black font-medium hover:scale-105 transition duration-300">
                产品中心
              </button>

              <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition duration-300">
                联系我们
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-32 bg-[#111111]"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="uppercase tracking-[8px] text-sm text-[#c6a77b] mb-6">
              About Us
            </p>

            <h3 className="text-5xl md:text-6xl leading-tight font-semibold mb-10">
              极简科技美学
              <br />
              与制造品质结合
            </h3>

            <p className="text-white/60 leading-9 text-lg mb-8">
              合宇电子拥有现代化制造体系与专业研发团队，
              专注于电子产品创新、工业制造与全球客户服务，
              为客户提供长期稳定、值得信赖的电子解决方案。
            </p>

            <button className="px-8 py-4 rounded-full bg-white text-black hover:scale-105 transition duration-300">
              了解更多
            </button>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1563770660941-10a63607639d?q=80&w=1800&auto=format&fit=crop"
              className="rounded-[40px] shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-black border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <h4 className="text-5xl font-semibold text-[#c6a77b] mb-4">
              15+
            </h4>
            <p className="text-white/60 tracking-[3px] text-sm">
              YEARS EXPERIENCE
            </p>
          </div>

          <div>
            <h4 className="text-5xl font-semibold text-[#c6a77b] mb-4">
              100+
            </h4>
            <p className="text-white/60 tracking-[3px] text-sm">
              GLOBAL CLIENTS
            </p>
          </div>

          <div>
            <h4 className="text-5xl font-semibold text-[#c6a77b] mb-4">
              50+
            </h4>
            <p className="text-white/60 tracking-[3px] text-sm">
              PRODUCT TYPES
            </p>
          </div>

          <div>
            <h4 className="text-5xl font-semibold text-[#c6a77b] mb-4">
              24H
            </h4>
            <p className="text-white/60 tracking-[3px] text-sm">
              FAST RESPONSE
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section
        id="products"
        className="py-32 bg-[#0d0d0d]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <p className="uppercase tracking-[8px] text-sm text-[#c6a77b] mb-6">
              Products
            </p>

            <h3 className="text-5xl md:text-6xl font-semibold">
              产品中心
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((item, index) => (
              <div
                key={index}
                className="group rounded-[36px] overflow-hidden bg-[#161616] border border-white/5 hover:border-[#c6a77b]/40 hover:-translate-y-3 transition duration-500"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    className="w-full h-[420px] object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-8">
                  <h4 className="text-3xl font-semibold mb-5">
                    {item.title}
                  </h4>

                  <p className="text-white/60 leading-8 mb-8">
                    {item.desc}
                  </p>

                  <button className="text-[#c6a77b] hover:translate-x-2 transition duration-300">
                    查看详情 →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="py-32 bg-gradient-to-b from-[#111111] to-black text-center"
      >
        <div className="max-w-4xl mx-auto px-6">
          <p className="uppercase tracking-[8px] text-sm text-[#c6a77b] mb-6">
            Contact Us
          </p>

          <h3 className="text-5xl md:text-7xl font-semibold leading-tight mb-10">
            与合宇电子
            <br />
            开启长期合作
          </h3>

          <p className="text-white/60 text-lg leading-9 max-w-2xl mx-auto mb-12">
            欢迎联系我们获取产品资料、合作方案与报价支持。
          </p>

          <div className="flex justify-center gap-5 flex-wrap">
            <button className="px-10 py-5 rounded-full bg-[#c6a77b] text-black font-medium hover:scale-105 transition duration-300">
              立即咨询
            </button>

            <button className="px-10 py-5 rounded-full border border-white/20 hover:bg-white hover:text-black transition duration-300">
              WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 bg-black text-center text-white/40 text-sm tracking-[2px]">
        © 2026 HEYU ELECTRONICS · ALL RIGHTS RESERVED
      </footer>
    </main>
  )
}