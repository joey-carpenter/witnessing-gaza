import Image from "next/image";

// Journalist and media-worker deaths during the Gaza war, by month.
// Compiled from Wikipedia's "List of journalists killed in the Gaza war"
// (drawing on CPJ, Al Jazeera, IFJ, RSF, and the Palestinian Journalists Syndicate).
// Includes deaths across Gaza, the West Bank, Lebanon, Israel, and Iran.
const DEATHS_BY_MONTH: Array<[string, number]> = [
    ["2023-10", 36],
    ["2023-11", 29],
    ["2023-12", 32],
    ["2024-01", 14],
    ["2024-02", 9],
    ["2024-03", 5],
    ["2024-04", 5],
    ["2024-05", 6],
    ["2024-06", 6],
    ["2024-07", 13],
    ["2024-08", 9],
    ["2024-09", 4],
    ["2024-10", 12],
    ["2024-11", 15],
    ["2024-12", 13],
    ["2025-01", 9],
    ["2025-02", 1],
    ["2025-03", 8],
    ["2025-04", 5],
    ["2025-05", 15],
    ["2025-06", 9],
    ["2025-07", 7],
    ["2025-08", 16],
    ["2025-09", 8],
    ["2025-10", 4],
    ["2025-11", 0],
    ["2025-12", 1],
];

export default function Home() {
    return (
        <div className="flex flex-1 flex-col items-center bg-[#faf3ec] font-serif text-stone-900">
            <article className="flex w-full max-w-5xl flex-col items-start">
                {/* Full-bleed hero image */}
                <figure className="mx-auto mt-16 mb-12 w-full max-w-6xl px-6">
                    <div className="relative aspect-video w-full overflow-hidden bg-stone-200">
                        <Image
                            src="/images/anas.jxl"
                            alt="Anas Al-Sharif reporting from Gaza"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <figcaption className="mt-3 max-w-3xl font-sans text-sm text-stone-500">
                        Anas Al-Sharif, reporting for Al Jazeera from northern
                        Gaza, in the weeks before his killing.{" "}
                        <span className="italic">From AFP/Getty</span>
                    </figcaption>
                </figure>

                {/* Hero */}
                <header className="flex max-w-5xl flex-col items-start gap-8 px-6 font-serif">
                    <h1 className="font-serif text-xl leading-[1.05] font-bold tracking-tight md:text-xl">
                        Witnessing Gaza
                    </h1>
                    <div className="flex flex-col justify-center gap-8 border-b border-stone-300 pb-8 font-serif text-sm text-stone-500">
                        <span className="tracking-wider">joey carpenter</span>
                    </div>
                </header>

                {/* Body — opener */}
                <section className="max-w-3xl px-6 py-12">
                    <p className="text-justify text-xl leading-relaxed">
                        On August 10, 2025, an Israeli airstrike hit a tent set
                        aside for journalists near the gates of Al-Shifa
                        hospital in Gaza City. Anas Al-Sharif was twenty-eight
                        when he and four of his Al Jazeera colleagues were
                        killed. In the tent with him was Anas's nephew, who was
                        studying to become a journalist like his uncle. By then,
                        Anas and his colleagues were some of the last
                        journalists working in Gaza, amidst rising violence
                        against journalism.
                    </p>
                </section>

                <section className="flex max-w-3xl flex-col gap-6 px-6 py-12">
                    <p className="text-justify text-xl leading-relaxed">
                        For the months and years leading up to Anas's death,
                        journalist deaths in Gaza had been rising despite{" "}
                        <a
                            href="https://www.globalsecurity.org/military/library/news/2025/08/mil-250826-presstv01.htm"
                            className="underline"
                        >
                            concern from the UN
                        </a>{" "}
                        and sharp advocacy from the Committee to Protect
                        Journalists (CPJ) and Reporters Without Borders (RSF).{" "}
                        <a
                            href="https://cpj.org/2026/02/record-number-of-journalists-killed-in-2025-israel-responsible-for-two-thirds-of-deaths/"
                            className="underline"
                        >
                            129 journalists and media workers were killed
                            worldwide in 2025
                        </a>
                        , more than any year since CPJ began collecting data in
                        1992 — and that was the second consecutive record year.
                    </p>
                </section>

                {/* Stats — journalist deaths across wars, one dot per person */}
                <figure className="w-full max-w-3xl px-6 py-12">
                    <p className="mb-2 font-sans text-sm font-bold text-stone-500">
                        Journalist deaths by conflict
                    </p>
                    <p className="mb-10 font-sans text-sm text-stone-500">
                        One dot represents one journalist or media worker
                        killed.
                    </p>
                    <div className="flex flex-col gap-12">
                        {[
                            {
                                name: "Gaza war",
                                dates: "Oct 7, 2023 – end of 2025",
                                count: 252,
                            },
                            {
                                name: "Iraq War",
                                dates: "March 2003 – December 2011",
                                count: 204,
                            },
                            {
                                name: "Syrian civil war",
                                dates: "2011 – 2024",
                                count: 141,
                            },
                            {
                                name: "Vietnam War",
                                dates: "1955 – 1975",
                                count: 66,
                            },
                            {
                                name: "World War II",
                                dates: "1939 – 1945",
                                count: 68,
                            },
                        ].map((war) => (
                            <div key={war.name}>
                                <div className="mb-4 flex items-baseline justify-between gap-4">
                                    <div>
                                        <p className="font-sans text-base font-medium text-stone-900">
                                            {war.name}
                                        </p>
                                        <p className="font-sans text-xs text-stone-500">
                                            {war.dates}
                                        </p>
                                    </div>
                                    <p className="font-sans text-xl text-stone-900 tabular-nums">
                                        {war.count}
                                    </p>
                                </div>
                                <div
                                    className="grid w-fit gap-[6px]"
                                    style={{
                                        gridTemplateColumns: "repeat(30, 8px)",
                                    }}
                                    aria-label={`${war.count} dots, one per journalist killed in the ${war.name}`}
                                    role="img"
                                >
                                    {Array.from({ length: war.count }).map(
                                        (_, i) => (
                                            <span
                                                key={i}
                                                className="block h-2 w-2 rounded-full bg-stone-800"
                                            />
                                        ),
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </figure>

                <section className="flex max-w-3xl flex-col gap-6 px-6 py-12">
                    <p className="text-justify text-xl leading-relaxed">
                        But even the pure statistics fail to tell the full story
                        — the most haunting aspect of this trend is what comes
                        after the deaths. Media members are actively labeled as
                        soldiers and members of Hamas following or preceding
                        their death, to justify extermination.{" "}
                        <a
                            href="https://www.deccanherald.com/amp/story/world/idf-confirms-killing-al-jazeera-journalist-says-he-was-hamas-operative-3133866"
                            className="underline"
                        >
                            The Israeli military confirmed killing Ismail
                            al-Ghoul,
                        </a>{" "}
                        another Al Jazeera journalist, in an airstrike in July
                        of 2024, claiming that he was a Hamas operative who
                        participated in the October 7 attacks. They offered no
                        proof. In January of 2024,{" "}
                        <a
                            href="https://www.malaymail.com/news/world/2024/01/12/al-jazeera-rejects-israel-army-claims-against-slain-journalists/111974"
                            className="underline"
                        >
                            Hamza Wael Dahdouh was killed in an airstrike
                        </a>{" "}
                        under the pretense that he and his colleagues were
                        "terror operatives." Once again, the Israeli military
                        offered no proof.
                    </p>
                </section>

                <section className="flex max-w-3xl flex-col gap-6 px-6 py-12">
                    <p className="text-justify text-xl leading-relaxed">
                        As a result, the journalists in Gaza have formed an
                        acute awareness of the inherent danger associated with
                        their work. This awareness is its own kind of literacy.
                        To be a journalist in Gaza is to be fluent in this
                        discourse of witnessing, to pick up a pen or camera and
                        understand the cost of making your surroundings visible
                        to the world. Often, it means continuing to record after
                        colleagues or family are buried, being away from your
                        children for months in fear of their safety, or bearing
                        the weight of direct threats on your life. In exchange
                        for this sacrifice, journalists are given the authority
                        to broadcast what they witness. This authority binds
                        them into a community: colleagues who share the work,
                        families studying to inherit it, and an audience that
                        knows Gaza only through witnesses. Now, that authority
                        is being revoked by institutional power. When a
                        journalist is relabeled as a soldier, the witnessing is
                        denied, threatening not only the journalist but a world
                        that depends on witnesses to know what is true.
                    </p>
                </section>

                {/* Part I — Plestia */}
                <div className="mt-16 mb-8 w-full max-w-3xl px-6">
                    <p className="font-sans text-xs tracking-[0.3em] text-stone-500 uppercase">
                        Part I
                    </p>
                    <h2 className="mt-2 font-sans text-4xl leading-tight font-bold tracking-tight md:text-5xl">
                        Plestia
                    </h2>
                </div>

                <section className="flex max-w-3xl flex-col gap-6 px-6 py-12">
                    <p className="text-justify text-xl leading-relaxed">
                        Plestia Alaqad is a Palestinian author and journalist
                        who grew up in Gaza City, before the war made it a
                        headline. The city had been under a long-standing
                        blockade that created a great economic burden, but it
                        stubbornly thrived as a cultural center: beautiful
                        Mediterranean beaches dotted a coastline of cafes and
                        markets, highrise apartments, universities, and ancient
                        historical sites which the city was known for.{" "}
                        <a
                            href="https://lab.imedd.org/en/gazan-journalist-plestia-alaqad-on-covering-the-war-on-instagram-i-want-the-world-to-see-us-as-humans/"
                            className="underline"
                        >
                            Plestia herself would later say
                        </a>{" "}
                        that "I hate how they never knew how beautiful Gaza is
                        because now there's nothing left in Gaza. Everything got
                        bombed… how pretty Gaza was and will always be."
                    </p>
                </section>

                <section className="flex max-w-3xl flex-col gap-6 px-6 py-12">
                    <p className="text-justify text-xl leading-relaxed">
                        In 2022, Plestia came home to Gaza to be a journalist.
                        She had just finished a degree in new media and
                        journalism in Cyprus, and at twenty-one she was doing
                        the ordinary work of starting out, building a small
                        following and doing modest reporting. By every measure
                        that mattered, she was a credentialed member of the
                        press.
                    </p>
                </section>

                <section className="flex max-w-3xl flex-col gap-6 px-6 py-12">
                    <p className="text-justify text-xl leading-relaxed">
                        Then, three days after the October 7 attacks, a series
                        of airstrikes hit Plestia's building. She decided to
                        pick up her camera and record, documenting the effects
                        of the Israeli bombardment campaign on her social media.
                        Due to the total blockade imposed on Gaza, international
                        reporters were unable to enter the area, so there was
                        almost no one else to follow. By November, she had
                        climbed from just 3,000 followers to over 2,000,000,
                        and, for millions, her videos were the sole depiction of
                        the war's effect on ordinary people in Gaza.
                    </p>
                </section>

                {/* Map — Gaza airstrikes */}
                <figure className="mx-auto my-12 w-full max-w-6xl px-6">
                    <div className="relative mr-auto aspect-video w-full overflow-hidden bg-[#faf3ec]">
                        <Image
                            src="/images/gaza-map.png"
                            alt="Map of Israeli airstrikes across Gaza"
                            fill
                            className="object-contain object-left"
                        />
                    </div>
                    <figcaption className="mt-3 max-w-3xl font-sans text-sm text-stone-500">
                        Recorded Israeli airstrikes across Gaza, October 2023
                        onward.{" "}
                        <span className="italic">
                            Source:{" "}
                            <a
                                href="https://airwars.org/conflict/israel-and-gaza-2023/"
                                className="underline"
                            >
                                Airwars
                            </a>
                            .
                        </span>
                    </figcaption>
                </figure>

                <section className="flex max-w-3xl flex-col gap-6 px-6 py-12">
                    <p className="text-justify text-xl leading-relaxed">
                        Plestia used her platform not only to document, but to
                        advocate against the bombardment, and for her fellow
                        journalists. She serves as a powerful example of what it
                        means to be a journalist in Gaza, and laid the
                        foundation for a fight against dehumanizing language.
                    </p>
                </section>

                {/* Pull quote — Plestia */}
                <aside className="max-w-2xl px-6 py-16">
                    <blockquote className="border-l-2 border-stone-900 pl-8">
                        <p className="text-xl leading-snug italic">
                            "Journalists are not 'dying,' they are being
                            'killed.' Language is enabling this genocide."
                        </p>
                        <footer className="mt-4 font-sans text-sm text-stone-500 not-italic">
                            — Plestia Alaqad
                        </footer>
                    </blockquote>
                </aside>

                <aside className="max-w-2xl px-6 py-16">
                    <blockquote className="border-l-2 border-stone-900 pl-8">
                        <p className="text-xl leading-snug italic">
                            "When journalists avoid the right language under the
                            guise of neutrality, it has real consequences: it's
                            costing Palestinians their lives."
                        </p>
                        <footer className="mt-4 font-sans text-sm text-stone-500 not-italic">
                            — Plestia Alaqad
                        </footer>
                    </blockquote>
                </aside>

                <section className="flex max-w-3xl flex-col gap-6 px-6 py-12">
                    <p className="text-justify text-xl leading-relaxed">
                        In late 2023, after roughly forty-five days, Plestia
                        evacuated with her family. At that time, the door to
                        leave was still open.
                    </p>
                </section>

                {/* Part II — Hossam */}
                <div className="mt-16 mb-8 w-full max-w-3xl px-6">
                    <p className="font-sans text-xs tracking-[0.3em] text-stone-500 uppercase">
                        Part II
                    </p>
                    <h2 className="mt-2 font-sans text-4xl leading-tight font-bold tracking-tight md:text-5xl">
                        Hossam
                    </h2>
                </div>

                <section className="flex max-w-3xl flex-col gap-6 px-6 py-12">
                    <p className="text-justify text-xl leading-relaxed">
                        Hossam Shabat decided to pick up journalism like Plestia
                        did, at the ripe age of 21. When the bombardment began,
                        he began reporting from Northern Gaza just as it was
                        being cut off from the rest of the strip, even when
                        staying meant risking your life. Work found Hossam
                        quickly — Drop Site News, a small investigative
                        journalism outlet based in the United States, reached
                        out to Hossam about hiring him.
                    </p>
                </section>

                <aside className="max-w-2xl px-6 py-16">
                    <blockquote className="border-l-2 border-stone-900 pl-8">
                        <p className="text-xl leading-snug italic">
                            "Greetings habibi. May God keep you. I am very happy
                            to have this opportunity. There are so many ideas,
                            scenes, stories."
                        </p>
                        <footer className="mt-4 font-sans text-sm text-stone-500 not-italic">
                            — Hossam Shabat, to Drop Site News
                        </footer>
                    </blockquote>
                </aside>

                <section className="flex max-w-3xl flex-col gap-6 px-6 py-12">
                    <p className="text-justify text-xl leading-relaxed">
                        Quickly, Hossam made waves as a writer known for{" "}
                        <a
                            href="https://www.dropsitenews.com/p/hossam-shabat-journalist-killed-gaza-last-article"
                            className="underline"
                        >
                            "lyrical and arresting"
                        </a>{" "}
                        reporting. Around him the press corps rapidly thinned:
                        journalists died or evacuated, but Hossam continued to
                        pick up the camera and pen. He remained in Northern Gaza
                        despite numerous threats to his life and being{" "}
                        <a
                            href="https://www.dropsitenews.com/p/death-march-from-beit-lahia"
                            className="underline"
                        >
                            displaced
                        </a>{" "}
                        over 20 times throughout Israel's escalating genocide.
                    </p>
                </section>

                {/* Graph — journalist deaths over time, one dot per person */}
                <figure className="w-full max-w-3xl px-6 py-12">
                    <p className="mb-2 font-sans text-sm font-bold text-stone-500">
                        Journalist deaths in the Gaza war, monthly
                    </p>
                    <p className="mb-10 font-sans text-sm text-stone-500">
                        October 2023 – December 2025. One dot represents one
                        journalist or media worker killed.
                    </p>
                    <div
                        className="flex items-end gap-[6px]"
                        role="img"
                        aria-label="Monthly journalist deaths from October 2023 to December 2025, stacked dots per month"
                    >
                        {DEATHS_BY_MONTH.map(([month, count]) => (
                            <div
                                key={month}
                                className="flex w-1.5 flex-col-reverse gap-[2px]"
                                title={`${month}: ${count} killed`}
                            >
                                {Array.from({ length: count }).map((_, i) => (
                                    <span
                                        key={i}
                                        className="block h-1.5 w-1.5 rounded-full bg-stone-800"
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="mt-3 flex gap-[6px] font-sans text-[10px] tracking-wider text-stone-500 uppercase">
                        {DEATHS_BY_MONTH.map(([month], i) => {
                            const showYear =
                                month.endsWith("-01") || i === 0;
                            return (
                                <div
                                    key={month}
                                    className="relative w-1.5"
                                >
                                    {showYear && (
                                        <span className="absolute top-0 left-0 whitespace-nowrap">
                                            {month.slice(0, 4)}
                                        </span>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </figure>

                <section className="flex max-w-3xl flex-col gap-6 px-6 py-12">
                    <p className="text-justify text-xl leading-relaxed">
                        By October of 2024, Hossam was among the few remaining
                        active journalists. It was at this time that the{" "}
                        <a
                            href="https://www.ifj.org/media-centre/news/detail/article/israel-idf-accuses-six-al-jazeera-journalists-in-gaza-of-being-terrorists"
                            className="underline"
                        >
                            IDF accused six Palestinian journalists working for
                            Al Jazeera in Gaza
                        </a>
                        , among them Shabat, of being fighters in Hamas and
                        Palestinian Islamic Jihad. Effectively a death sentence
                        under the Israeli occupation. Despite this, Hossam still
                        continued his work.
                    </p>
                </section>

                <aside className="max-w-2xl px-6 py-16">
                    <blockquote className="border-l-2 border-stone-900 pl-8">
                        <p className="text-xl leading-snug italic">
                            "Despite the dangerous and untrue threats made
                            against us from the Israeli occupation, we remain
                            committed to our profession and will continue to
                            report on this genocide."
                        </p>
                        <footer className="mt-4 font-sans text-sm text-stone-500 not-italic">
                            — Hossam Shabat
                        </footer>
                    </blockquote>
                </aside>

                <section className="flex max-w-3xl flex-col gap-6 px-6 py-12">
                    <p className="text-justify text-xl leading-relaxed">
                        It was not long after this accusation that Hossam
                        experienced direct attacks on his life. That November,
                        Hossam was injured by an Israeli airstrike while inside
                        a home in Gaza. Hossam believed the airstrike had been
                        meant for him following the public accusations. He was
                        very afraid, but still refused to leave.
                    </p>
                </section>

                {/* Pictures of Hossam — carousel */}
                <div className="my-24 w-full px-6">
                    <div className="h-128 w-full">
                        <div className="absolute left-0 flex h-128 w-screen scrollbar-none gap-8 overflow-x-scroll px-[max(1.5rem,calc((100vw-64rem)/2+1.5rem))]">
                            <Image
                                src="/images/hossam-1.webp"
                                alt="Hossam Shabat reporting"
                                height={1080}
                                width={960}
                                className="h-full w-auto bg-stone-200 object-cover"
                            />
                            <Image
                                src="/images/hossam-2.webp"
                                alt="Hossam Shabat reporting"
                                height={1080}
                                width={960}
                                className="h-full w-auto bg-stone-200 object-cover"
                            />
                            <Image
                                src="/images/hossam-3.webp"
                                alt="Aftermath of airstrike near Hossam"
                                height={1080}
                                width={960}
                                className="h-full w-auto bg-stone-200 object-cover"
                            />
                            <Image
                                src="/images/hossam-4.jpeg"
                                alt="Hossam Shabat in the field"
                                height={1080}
                                width={960}
                                className="h-full w-auto bg-stone-200 object-cover"
                            />
                        </div>
                    </div>
                    <figcaption className="mt-3 max-w-3xl font-sans text-sm text-stone-500">
                        Hossam Shabat and the aftermath of the November
                        airstrike.{" "}
                        <span className="italic">
                            Via{" "}
                            <a
                                href="https://www.aljazeera.com/news/2025/3/24/al-jazeera-journalist-killed-in-israeli-strikes-in-northern-gaza"
                                className="underline"
                            >
                                Al Jazeera
                            </a>{" "}
                            and{" "}
                            <a
                                href="https://www.gettyimages.com/photos/hossam-shabat"
                                className="underline"
                            >
                                Getty Images
                            </a>
                            .
                        </span>
                    </figcaption>
                </div>

                <section className="flex max-w-3xl flex-col gap-6 px-6 py-12">
                    <p className="text-justify text-xl leading-relaxed">
                        Instead, Hossam prepared, living with the certainty that
                        he was to be continually persecuted. He wrote a letter
                        to be released following his own death, understanding
                        that his end was a foregone conclusion. In this way,
                        Hossam reflects the sentiments of all the journalists
                        across Gaza that undertook reporting with the knowledge
                        that death was a real possibility, a sacrifice
                        unfathomable to many.
                    </p>
                </section>

                <aside className="max-w-2xl px-6 py-16">
                    <blockquote className="border-l-2 border-stone-900 pl-8">
                        <p className="text-xl leading-snug italic">
                            "Our job is only to die."
                        </p>
                        <footer className="mt-4 font-sans text-sm text-stone-500 not-italic">
                            — Hossam Shabat
                        </footer>
                    </blockquote>
                </aside>

                <section className="flex max-w-3xl flex-col gap-6 px-6 py-12">
                    <p className="text-justify text-xl leading-relaxed">
                        On March 24, 2025, in Beit Lahia, Northern Gaza, a
                        targeted Israeli strike killed Hossam Shabat. Hossam's
                        best friend Mohammad Nidal was killed alongside him,
                        shortly after Hossam had reunited with his mother. The
                        Israeli military confirmed responsibility for
                        "eliminating" Shabat, claiming his role in Hamas had
                        been exposed. Al Jazeera has formally rejected these
                        claims, and the CPJ has characterized the IDF
                        accusations as unsupported and the labeling as a pattern
                        to "manufacture consent" for killings.
                    </p>
                </section>

                {/* Part III — Anas */}
                <div className="mt-16 mb-8 w-full max-w-3xl px-6">
                    <p className="font-sans text-xs tracking-[0.3em] text-stone-500 uppercase">
                        Part III
                    </p>
                    <h2 className="mt-2 font-sans text-4xl leading-tight font-bold tracking-tight md:text-5xl">
                        Anas
                    </h2>
                </div>

                <section className="flex max-w-3xl flex-col gap-6 px-6 py-12">
                    <p className="text-justify text-xl leading-relaxed">
                        By the summer of 2025, Anas Al-Sharif was one of the
                        last major voices still broadcasting from northern Gaza.
                        He had been reporting since the first weeks of the war,
                        and for nearly a year the Israeli military had been
                        saying he was not a journalist at all, but a Hamas
                        operative wearing a press vest. He had watched the same
                        accusation precede the deaths of colleagues. He knew
                        what it meant when it was aimed at you.
                    </p>
                </section>

                <section className="flex max-w-3xl flex-col gap-6 px-6 py-12">
                    <p className="text-justify text-xl leading-relaxed">
                        In July of 2025, he sat down to{" "}
                        <a
                            href="https://x.com/AnasAlSharif0/status/1948118003934982362"
                            className="underline"
                        >
                            insist on his lack of affiliation
                        </a>
                        . The accusations had sharpened that month, after he
                        broke down crying on air covering Gaza's hunger and a
                        military spokesman dismissed the tears as a performance.
                    </p>
                </section>

                <aside className="max-w-2xl px-6 py-16">
                    <blockquote className="border-l-2 border-stone-900 pl-8">
                        <p className="text-xl leading-snug italic">
                            "I reaffirm: I, Anas Al-Sharif, am a journalist with
                            no political affiliations. My only mission is to
                            report the truth from the ground — as it is, without
                            bias."
                        </p>
                        <footer className="mt-4 font-sans text-sm text-stone-500 not-italic">
                            — Anas Al-Sharif, July 2025
                        </footer>
                    </blockquote>
                </aside>

                <section className="flex max-w-3xl flex-col gap-6 px-6 py-12">
                    <p className="text-justify text-xl leading-relaxed">
                        Around the same time, in a message he did not publish,
                        he wrote something else: "I live with the feeling that I
                        could be bombed and martyred at any moment." Anas spent
                        his last weeks publicly refusing the labels and
                        privately certain he would be killed.
                    </p>
                </section>

                <section className="flex max-w-3xl flex-col gap-6 px-6 py-12">
                    <p className="text-justify text-xl leading-relaxed">
                        On August 10,{" "}
                        <a
                            href="https://www.aljazeera.com/news/2025/8/10/al-jazeera-journalist-anas-al-sharif-killed-in-israeli-attack-in-gaza-city"
                            className="underline"
                        >
                            the strike came
                        </a>
                        . It hit the journalists' tent near the gates of
                        Al-Shifa, killing Anas, four of his colleagues, and the
                        nephew who had wanted to follow him into the work. And
                        then, exactly as he had predicted, the machine completed
                        its second motion: the military announced it had killed
                        the head of a Hamas terrorist cell who had been "posing
                        as an Al Jazeera journalist" — without providing
                        evidence.
                    </p>
                </section>

                <section className="flex max-w-3xl flex-col gap-6 px-6 py-12">
                    <p className="text-justify text-xl leading-relaxed">
                        This is what is hidden from statistics and mainstream
                        reporting: the game of labels and language that slowly
                        weaves itself into public sentiment. Plestia had spoken
                        up, stating that language decides who is mourned. Hossam
                        had understood the ramifications, reporting under the
                        assumption that they would try to relabel him. But Anas
                        had tried to fight, vehemently denying political
                        affiliations and calling for action.
                    </p>
                </section>

                <section className="flex max-w-3xl flex-col gap-6 px-6 py-12">
                    <p className="text-justify text-xl leading-relaxed">
                        These journalists are getting their message through.
                        Plestia carried her diary out of Gaza and turned it into
                        a book, "The Eyes of Gaza," which was globally
                        acclaimed.{" "}
                        <a
                            href="https://www.aljazeera.com/news/2025/3/24/al-jazeera-journalist-killed-in-israeli-strikes-in-northern-gaza"
                            className="underline"
                        >
                            Hossam's letter
                        </a>{" "}
                        was published the day he was killed, and reached people
                        around the world. Anas's fervent advocacy and the
                        failure of the IDF to provide evidence of his
                        affiliation has brought massive attention to the issue.
                    </p>
                </section>

                <section className="flex max-w-3xl flex-col gap-6 px-6 py-12">
                    <p className="text-justify text-xl leading-relaxed">
                        Israel has killed more journalists in Gaza than have
                        died in most wars on record, and not one of those
                        killings has produced accountability. But these
                        journalists have redefined reporting the whole way
                        through, speaking out in the face of direct threats to
                        broadcast their witnessing. What they showed the world
                        cannot be taken back.
                    </p>
                </section>

                {/* Resource links */}
                <section className="flex max-w-3xl flex-wrap gap-x-6 gap-y-3 px-6 py-12">
                    <a href="https://cpj.org/" className="underline">
                        committee to protect journalists
                    </a>
                    <a href="https://rsf.org/en" className="underline">
                        reporters without borders
                    </a>
                    <a
                        href="https://www.dropsitenews.com/"
                        className="underline"
                    >
                        drop site news
                    </a>
                    <a href="https://www.pcrf.net/" className="underline">
                        palestinian children's relief fund
                    </a>
                </section>

                {/* Footer spacing */}
                <div className="h-32" />
            </article>
        </div>
    );
}
