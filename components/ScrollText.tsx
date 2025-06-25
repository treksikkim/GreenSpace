function ScrollText() {
  const texts = ["BEST INTERIOR DESIGNER IN KOLKATA"];

  return (
    <div className="w-full h-96 relative sm:mt-7 md:mt-4">
      <div className="pimg w-full h-full"></div>
      <div className="absolute top-0 bottom-0 size-full bg-[#0000006e] overflow-hidden flex items-center justify-center">
        <section className="marquee relative w-full h-full flex overflow-x-scroll items-center">
          <section className="left-to-right">
            {texts.map((item, index) => (
              <h1 key={index} className="scrollEachText sm:text-[3rem]">
                {item}
              </h1>
            ))}
          </section>
          <section className="left-to-right">
            {texts.map((item) => (
              <p key={item} className="scrollEachText sm:text-[3rem]">
                {item}
              </p>
            ))}
          </section>
          <section className="left-to-right">
            {texts.map((item) => (
              <p key={item} className="scrollEachText sm:text-[3rem]">
                {item}
              </p>
            ))}
          </section>
        </section>
      </div>
    </div>
  );
}

export default ScrollText;
