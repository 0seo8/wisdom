"use client";

export function ProgramDivider() {
  return (
    <section className="relative overflow-hidden px-5 pb-5 pt-10 md:px-0 md:py-[60px] lg:bg-fixed">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundColor: "#3A3735",
          backgroundImage:
            "url('https://artswisdom.com/wp-content/uploads/2025/04/harmony-5154766_1280.jpg')",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-10 bg-black/50" aria-hidden="true" />

      <div className="relative z-20 text-center">
        <h2 className="font-['Times_New_Roman',Times,serif] text-[38px] font-semibold tracking-[-1px] text-white lg:text-[70px]">
          PROGRAM
        </h2>
      </div>
    </section>
  );
}
