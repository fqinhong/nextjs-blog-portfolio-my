import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <div className="container mx-auto p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="relative">
        <div className="opacity-10">
          <div className="absolute top-0 right-0 sm:w-[600px] sm:h-[600px] w-[300px] h-[300px] bg-primary/50 rounded-full blur-3xl"></div>
          <div className="absolute top-4 right-4 sm:w-[400px] sm:h-[400px] w-[150px] h-[150px] bg-primary/60 rounded-full blur-2xl"></div>
          <div className="absolute top-8 right-8 sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] bg-primary/70 rounded-full blur-xl"></div>
        </div>

        <h1 className="text-balance text-4xl font-bold tracking-light">
          Software Engineer and
          <span className="block text-purple-600">UI/UX Designer</span>
        </h1>
        <p className="mt-6 text-xl text-gray-300 leading-8">
          Crafting Responsive Websites for Real Estate Professionals |
          Innovating with AI Solutions Crafting Responsive Websites for Real
        </p>
        <div className="flex mt-10 gap-4">
          <button className="px-8 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-500">
            About Me
          </button>
          <button className="px-8 py-3 rounded-lg border border-gray-600 hover:border-purple-500 font-medium">
            Contact Me
          </button>
        </div>
      </div>

      <h2>Hello Company</h2>
      <button className="bg-brand text-white px-4 py-2 rounded-lg">
        品牌按钮
      </button>
      <p className="text-success">提交成功</p>
      <p className="text-error">操作失败</p>
      <ProjectSection />
    </div>
  );
}
