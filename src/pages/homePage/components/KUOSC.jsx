export default function KUOSC() {
  return (
    <section className="flex-col py-8 p-6 h-full bg-[#00baa321]">
      <h1 className="text-[#00baa3] text-lg sm:text-2xl md:text-3xl font-bold text-center">
        Kathmandu University Open Source Community
      </h1>

      <div className="flex flex-col-reverse md:flex-row max-w-screen-xl mx-auto md:gap-8 place-items-center justify-center">
        <p className="text-center md:text-justify max-w-[80ch]">
          <a href="https://kuosc.org.np" target="_blank" rel="noreferrer">
            Kathmandu University Open Source Community (KUOSC)
          </a>{' '}
          is the Open Source related wing of KUCC. It is a vibrant historic community from Kathmandu
          University which provides a common platform for all FOSS enthusiasts to discuss, share,
          and learn about free and open source softwares. KUOSC is specifically focused on all the
          Open Source related activities ranging from training programs like Linux Talks, Useful
          Network Training to advocacy activities like Software Freedom Day celebration and
          organizing different community level workshops and events.
        </p>
        <img src="/kuosc.png" alt="KUOSC" className="object-contain max-w-[200px]" />
      </div>
    </section>
  )
}
