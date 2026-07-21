import Image from "next/image";
import {
  Bike,
  Building2,
  Leaf,
  MapPin,
  PackageCheck,
  Phone,
  ReceiptText,
  ShieldCheck,
  Utensils,
  PlayCircle
} from "lucide-react";
import { createConsultationAction } from "@/actions/consultation";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { HeroSection } from "@/components/hero-section";

const values = [
  {
    icon: Utensils,
    title: "Thực đơn đa dạng, xoay vòng liên tục",
    text: "Menu thay đổi mỗi ngày với đủ món mặn, chay, món nước và tráng miệng để hạn chế cảm giác ngán cơm.",
  },
  {
    icon: Leaf,
    title: "Nguyên liệu tươi sạch",
    text: "Nguyên liệu nhập mới hằng ngày, nguồn gốc rõ ràng, ưu tiên quy trình chế biến gọn gàng, an toàn vệ sinh.",
  },
  {
    icon: Bike,
    title: "Freeship 100%, giao nóng",
    text: "Giao đúng giờ, đủ số lượng, giữ nóng trong thùng chuyên dụng đến tận cổng công ty.",
  },
  {
    icon: PackageCheck,
    title: "Đóng gói linh hoạt",
    text: "Hỗ trợ khay bento chia ngăn hoặc khay inox truyền thống tùy quy trình của doanh nghiệp.",
  },
  {
    icon: ReceiptText,
    title: "VAT và Công nợ",
    text: "Pháp nhân minh bạch, hỗ trợ xuất hóa đơn VAT và chốt công nợ theo tuần/tháng rõ ràng.",
  },
];

const steps = [
  [
    "Tư vấn và chọn khẩu phần",
    "Tiếp nhận số lượng 50-200 phần, ngân sách từ 35.000đ và đặc thù ngành nghề để tư vấn thực đơn.",
  ],
  [
    "Menu mẫu & Ký hợp đồng",
    "Hỗ trợ suất ăn mẫu, thống nhất menu tuần, chính sách giao hàng và điều khoản thanh toán.",
  ],
  [
    "Phục vụ hằng ngày",
    "HR/Admin chốt số lượng trước 15h00 hôm trước. Bếp nấu và giao nóng đúng giờ mỗi ngày.",
  ],
  [
    "Đối soát & Thanh toán",
    "Hệ thống tự động xuất bảng kê chi tiết. Khách hàng kiểm tra, Bếp xuất hóa đơn nhanh gọn.",
  ],
];

export function MotionLanding({ consulted }: { consulted?: string }) {
  return (
    <main className="bg-offwhite text-slate-900">
      <HeroSection />

      {/* SECTION: GIỚI THIỆU */}
      <section id="gioi-thieu" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Badge tone="coral">Về Bếp Cô Chủ Nhỏ</Badge>
            <h2 className="mt-6 text-3xl font-black leading-[1.2] text-slate-950 sm:text-4xl lg:text-5xl">
              Nơi khởi nguồn năng lượng cho ngày dài làm việc
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                Chúng tôi thấu hiểu rằng một bữa trưa ngon miệng, nóng hổi và đầy đủ dinh dưỡng là chìa khóa quan trọng nhất để tái tạo năng lượng và nâng cao hiệu suất làm việc của cán bộ nhân viên.
              </p>
              <p>
                Là đối tác cung cấp suất ăn tin cậy cho xí nghiệp, nhà máy và khối văn phòng tại TP.HCM. Không chỉ là một khay cơm, Bếp Cô Chủ Nhỏ gửi gắm sự chăm chút từ khâu chọn nguyên liệu sạch đến khi trao tận tay người lao động.
              </p>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-[2.5rem] bg-slate-200 shadow-2xl">
            <Image 
              src="/optimized/hero_alt.webp" 
              alt="Giới thiệu Bếp Cô Chủ Nhỏ" 
              fill 
              sizes="(min-width: 1024px) 50vw, 100vw" 
              className="object-cover" 
            />
          </div>
        </div>
      </section>

      {/* SECTION: VIDEO THỰC TẾ (Kích thích vị giác) */}
      <section className="bg-slate-950 py-16 lg:py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge tone="teal">Mắt Thấy - Tai Nghe</Badge>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">Trải nghiệm thực tế món ăn</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">Những khay thức ăn nóng hổi, màu sắc bắt mắt vừa ra lò, sẵn sàng đóng gói giao đến công ty của bạn.</p>
          </div>
          
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "/videos/video_1.mov",
              "/videos/video_2.mov",
              "/videos/video_3.mov"
            ].map((src, idx) => (
              <div key={idx} className="group relative aspect-[9/16] overflow-hidden rounded-2xl bg-slate-900 shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-bep-orange/20">
                <video src={src} autoPlay muted loop playsInline className="h-full w-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
                  <PlayCircle className="text-bep-orange" size={28} />
                  <span className="font-bold text-white shadow-black drop-shadow-md">Nóng hổi vừa thổi vừa ăn</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: BENTO GRID THỰC ĐƠN */}
      <section id="thuc-don" className="bg-offwhite py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Badge tone="coral">Thực đơn nổi bật</Badge>
              <h2 className="mt-4 text-3xl font-black text-slate-950 sm:text-4xl">Đa dạng món, tròn vị nhà</h2>
            </div>
            <ButtonLink href="#menu-tuan" variant="secondary" className="bg-white hover:bg-slate-50 border-slate-200">
              Xem chi tiết menu tuần
            </ButtonLink>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
            {/* Món mặn chính (To nhất) */}
            <div className="group relative overflow-hidden rounded-2xl bg-slate-200 md:col-span-2 md:row-span-2 shadow-sm min-h-[300px] md:min-h-[500px]">
              <Image src="/optimized/menu_man_1.webp" alt="Cơm mặn đưa cơm" fill sizes="(min-width: 768px) 66vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10">
                <span className="inline-block rounded-full bg-bep-orange px-3 py-1 text-xs font-bold uppercase tracking-wider text-white mb-3">Món Mặn Trọng Tâm</span>
                <h3 className="text-2xl font-black text-white sm:text-4xl">Cơm mặn đưa cơm</h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">Sườn nướng mật ong, đùi gà sốt mắm tỏi, thịt kho trứng cút, cá chiên giòn, xíu mại sốt cà... đổi vị liên tục mỗi ngày.</p>
              </div>
            </div>

            {/* Đổi vị (Nước) */}
            <div className="group relative overflow-hidden rounded-2xl bg-slate-200 shadow-sm min-h-[250px]">
              <Image src="/optimized/14.webp" alt="Ngày đổi vị" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="text-xl font-bold text-white">Ngày đổi vị món nước</h3>
                <p className="mt-2 text-sm text-white/80 line-clamp-2">Bún bò, hủ tiếu tôm thịt, mì Quảng, phở lèo ngọt thanh.</p>
              </div>
            </div>

            {/* Món Chay */}
            <div className="group relative overflow-hidden rounded-2xl bg-slate-200 shadow-sm min-h-[250px]">
              <Image src="/optimized/menu_chay.webp" alt="Menu chay thanh tịnh" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="text-xl font-bold text-white">Chay thanh tịnh</h3>
                <p className="mt-2 text-sm text-white/80 line-clamp-2">Đậu hũ kho sả, nấm đùi gà, sườn non chay rim đậm đà.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: VẬN HÀNH THỰC TẾ (Galleryọc) */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge tone="teal">Đội ngũ vận hành</Badge>
            <h2 className="mt-4 text-3xl font-black text-slate-950 sm:text-4xl">Những chuyến xe giao cơm nóng hổi</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">Cam kết giao hàng đúng giờ, thùng giữ nhiệt chuyên nghiệp đảm bảo cơm canh luôn nóng khi đến tay nhân viên.</p>
          </div>
          
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              "/optimized/giao_com_1.webp",
              "/optimized/giao_com_2.webp",
              "/optimized/giao_com_3.webp",
            ].map((src, idx) => (
              <div key={idx} className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-slate-100 shadow-md">
                <Image src={src} alt="Shipper giao cơm" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: TẠI SAO CHỌN BẾP (Grid Icon) */}
      <section id="dich-vu" className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Badge tone="coral">Năng lực phục vụ</Badge>
          <h2 className="mt-4 text-3xl font-black text-slate-950 sm:text-4xl">Vì sao doanh nghiệp chọn Bếp Cô Chủ Nhỏ?</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="group rounded-3xl bg-white p-8 shadow-sm transition-shadow hover:shadow-xl hover:shadow-fresh-teal/10 border border-slate-100">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-fresh-teal/10 text-fresh-teal transition-transform group-hover:scale-110 group-hover:bg-fresh-teal group-hover:text-white">
                    <Icon size={28} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION: QUY TRÌNH */}
      <section id="quy-trinh" className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge tone="teal">Quy trình đơn giản</Badge>
          <h2 className="mt-4 text-3xl font-black text-slate-950 sm:text-4xl">4 bước để bắt đầu hợp tác</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-left">
            {steps.map(([title, text], index) => (
              <div key={title} className="relative rounded-3xl bg-offwhite p-6 border border-slate-100">
                <div className="absolute -top-5 -left-2 text-[6rem] font-black text-slate-100/50 -z-10 select-none">
                  0{index + 1}
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bep-orange text-lg font-black text-white shadow-lg shadow-bep-orange/30">
                  {index + 1}
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: LIÊN HỆ TƯ VẤN (CTA) */}
      <section id="lien-he" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="overflow-hidden rounded-[2.5rem] bg-slate-950 shadow-2xl">
          <div className="grid lg:grid-cols-[1fr_450px]">
            {/* Info */}
            <div className="p-8 sm:p-12 lg:p-16 text-white relative">
              <div className="absolute -top-40 -left-40 w-96 h-96 bg-bep-orange/20 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <Badge tone="coral" className="bg-white/10 text-bep-orange border-none">Liên hệ ngay</Badge>
                <h2 className="mt-6 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                  Đừng để nhân viên phải lo lắng bữa trưa.
                </h2>
                <p className="mt-6 text-lg text-slate-300 max-w-xl">
                  Hãy để Bếp Cô Chủ Nhỏ lo. Để lại thông tin, Bếp sẽ gửi ngay Menu mẫu và Báo giá cực kỳ chi tiết cho công ty của bạn.
                </p>
                <div className="mt-10 grid gap-4 text-base text-slate-300">
                  <div className="flex items-center gap-3"><Phone className="text-fresh-teal" size={22} /><strong className="text-white">Hotline/Zalo: 0337 998 639</strong></div>
                  <div className="flex gap-3"><MapPin className="text-fresh-teal shrink-0 mt-1" size={22} /><span>14/9/5 Lê Thúc Hoạch, P. Phú Thọ Hòa, Q. Tân Phú, TP.HCM</span></div>
                  <div className="flex items-center gap-3"><Building2 className="text-fresh-teal" size={22} /><span>Công ty TNHH Bếp Cô Chủ Nhỏ</span></div>
                  <div className="flex items-center gap-3"><ShieldCheck className="text-fresh-teal" size={22} /><span>Hợp đồng, VAT, Công nợ đầy đủ</span></div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              <h3 className="text-2xl font-black text-slate-900 mb-6">Nhận tư vấn suất ăn</h3>
              <form action={createConsultationAction} className="grid gap-5">
                {consulted === "1" ? (
                  <div className="rounded-xl bg-fresh-teal/10 px-4 py-3 text-sm font-semibold text-fresh-teal-dark border border-fresh-teal/20">
                    🎉 Đã gửi thông tin! Bếp sẽ liên hệ Zalo cho bạn sớm nhất.
                  </div>
                ) : null}
                {consulted === "invalid" ? (
                  <div className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700 border border-red-100">
                    Vui lòng nhập đủ thông tin hợp lệ.
                  </div>
                ) : null}
                
                <div className="grid gap-2">
                  <label className="text-sm font-bold text-slate-700">Tên công ty</label>
                  <input name="companyName" className="h-14 rounded-xl border border-slate-200 bg-slate-50 px-4 outline-none transition-all focus:border-fresh-teal focus:bg-white focus:ring-4 focus:ring-fresh-teal/10" placeholder="VD: Công ty TNHH ABC" required />
                </div>
                
                <div className="grid gap-2">
                  <label className="text-sm font-bold text-slate-700">Số lượng dự kiến</label>
                  <input name="expectedQuantity" className="h-14 rounded-xl border border-slate-200 bg-slate-50 px-4 outline-none transition-all focus:border-fresh-teal focus:bg-white focus:ring-4 focus:ring-fresh-teal/10" placeholder="VD: 80 phần/ngày" required />
                </div>
                
                <div className="grid gap-2">
                  <label className="text-sm font-bold text-slate-700">Số điện thoại / Zalo</label>
                  <input name="phone" className="h-14 rounded-xl border border-slate-200 bg-slate-50 px-4 outline-none transition-all focus:border-fresh-teal focus:bg-white focus:ring-4 focus:ring-fresh-teal/10" placeholder="VD: 0337 998 639" required />
                </div>
                
                <button
                  type="submit"
                  className="mt-2 flex h-14 w-full items-center justify-center rounded-xl bg-bep-orange text-lg font-bold text-white shadow-lg shadow-bep-orange/30 transition-all hover:scale-[1.02] hover:bg-bep-orange-dark hover:shadow-xl hover:shadow-bep-orange/40"
                >
                  Yêu cầu Báo Giá
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
