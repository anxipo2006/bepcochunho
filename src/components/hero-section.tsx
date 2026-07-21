"use client";

import Image from "next/image";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { ArrowRight, CheckCircle2, Play, Flame } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";

const headline = "Suất ăn doanh nghiệp chuẩn vị cơm nhà tại TP.HCM";
const words = headline.split(" ");

export function HeroSection() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="relative isolate flex min-h-[90vh] items-center justify-center overflow-hidden bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        {/* Background Image full width với overlay đen */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/optimized/hero_main.webp"
            alt="Bếp Cô Chủ Nhỏ - Suất ăn công nghiệp"
            fill
            priority
            className="object-cover opacity-60"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950" />
        </div>

        {/* Nội dung căn giữa */}
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <m.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold shadow-2xl backdrop-blur-md"
          >
            <Flame size={18} className="text-bep-orange" />
            <span className="text-white/90">Phục vụ công ty 50 - 200 phần/ngày</span>
          </m.div>

          <h1 className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-[clamp(2.5rem,6vw,5.5rem)] font-black leading-[1.1] tracking-tight text-white drop-shadow-xl">
            {words.map((word, index) => (
              <m.span
                key={`${word}-${index}`}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: 0.1 + index * 0.05,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={index >= 5 ? "bg-gradient-to-r from-bep-orange to-amber-300 bg-clip-text text-transparent drop-shadow-none" : ""}
              >
                {word}
              </m.span>
            ))}
          </h1>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/80 drop-shadow-md sm:text-xl"
          >
            Trọn vị cơm nhà, đậm đà tình thân. Bếp lo menu đa dạng, giao nóng đúng giờ, đóng gói sạch sẽ và thanh toán công nợ linh hoạt cho đội ngũ của bạn.
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <ButtonLink
              href="/register"
              className="group relative flex h-14 items-center gap-2 overflow-hidden rounded-full bg-bep-orange px-8 text-base font-bold text-white shadow-[0_0_40px_rgba(255,90,54,0.4)] transition-all hover:scale-105 hover:bg-bep-orange-dark hover:shadow-[0_0_60px_rgba(255,90,54,0.6)]"
            >
              Đăng ký nhận menu
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </ButtonLink>
            
            <ButtonLink
              href="#lien-he"
              variant="secondary"
              className="flex h-14 items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 text-base font-bold text-white backdrop-blur-md transition-all hover:bg-white/20"
            >
              <Play size={18} className="fill-white" />
              Xem Video Thực Tế
            </ButtonLink>
          </m.div>

          {/* Cụm huy hiệu bảo chứng (Trust Badges) */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mx-auto mt-14 flex max-w-4xl flex-wrap justify-center gap-x-8 gap-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            {[
              "Từ 35.000đ/phần",
              "Thực đơn tuần phong phú",
              "Freeship & Giao đúng giờ",
              "Xuất hóa đơn VAT 8%",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-semibold text-white/90 sm:text-base">
                <CheckCircle2 size={20} className="text-fresh-teal" />
                {item}
              </div>
            ))}
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
