export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f1eb] text-black">
      <section className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold mb-6">合宇电子</h1>
        <p className="text-xl text-gray-600">
          专注高品质电子产品解决方案
        </p>
      </section>

      <section className="py-24 px-8 bg-white text-center">
        <h2 className="text-4xl font-bold mb-8">关于我们</h2>
        <p className="max-w-3xl mx-auto text-gray-600 leading-8">
          合宇电子致力于为全球客户提供高品质电子产品与创新解决方案，
          拥有专业研发团队与现代化生产体系。
        </p>
      </section>

      <section className="py-24 px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">联系我们</h2>
        <p className="text-gray-600">官网：www.cnheyu.com</p>
      </section>
    </main>
  );
}