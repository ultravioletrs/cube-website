import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Architecture from "@/components/sections/Architecture";
import Gateway from "@/components/sections/Gateway";
import UseCases from "@/components/sections/UseCases";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <Architecture />
      <Gateway />
      <UseCases />

      {/* Newsletter Section placeholder to match legacy */}
      <section className="py-24 bg-white border-t border-neutral-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-black mb-4 uppercase tracking-tight">Subscribe to Our Newsletter</h2>
          <p className="text-neutral-500 mb-10 max-w-md mx-auto">
            Stay updated with the latest news, updates, and announcements.
          </p>
          <form
            action="https://ultraviolet.us20.list-manage.com/subscribe/post?u=b35e6bdc7b2adf06c56da2265&amp;id=88ed6c4af0&amp;f_id=004f06eaf0"
            method="post"
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            target="_blank"
          >
            <input
              type="email"
              name="EMAIL"
              placeholder="Enter your email"
              className="flex-grow px-6 py-4 rounded-full border border-neutral-200 focus:outline-none focus:border-black transition-colors"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-neutral-800 transition-colors shadow-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
