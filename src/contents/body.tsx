import React from "react";
import "./body.css";
import Info from "../info.json";
interface Diff {
    diff: number;
    lang: string;
}
function Form(){
    return (
        <form
            action="https://formspree.io/f/mnqklwzn"
            method="POST"
            className="contact"
        >
            <input className="first" type="text" name="name" placeholder="Name" id="" />
            <input type="text" name="subject" placeholder="Subject" id="" />
            <input type="email" name="email" placeholder="email@mail.com" id="" />
            <div className="message-container">
                <h3>Message</h3>
                <textarea
                    name="content"
                    id="textarea-email-form"
                    cols={30}
                    rows={10}
                    defaultValue={""}
                />
            </div>
            <button className="last" type="submit">Send</button>
        </form>
    )
}
function Body() {
    let date = new Date();
    let diffs: Diff[] = [
        { diff: date.getFullYear() - 2017, lang: "HTML/CSS" },
        { diff: date.getFullYear() - 2017, lang: "Python" },
        { diff: date.getFullYear() - 2019, lang: "JavaScript" },
        { diff: date.getFullYear() - 2020, lang: "TypeScript" },
        { diff: date.getFullYear() - 2019, lang: "Java/Kotlin" },
        { diff: date.getFullYear() - 2020, lang: "C/C++" },
        { diff: date.getFullYear() - 2021, lang: "React" },
        { diff: date.getFullYear() - 2021, lang: "Rust" },
        { diff: date.getFullYear() - 2021, lang: "Swift" },
        { diff: date.getFullYear() - 2022, lang: "Electron" },
        { diff: date.getFullYear() - 2022, lang: "SwiftUI" },
        { diff: date.getFullYear() - 2018, lang: "Python Pandas" },
        { diff: date.getFullYear() - 2020, lang: "Js Express" },
        { diff: date.getFullYear() - 2020, lang: "Python Flask" },
        { diff: date.getFullYear() - 2020, lang: "Requests" },
        { diff: date.getFullYear() - 2022, lang: "C++ Qt" },
    ]
    return (
        <section className="body">
            <section className="fraction" id="about">
                <h2 className="fraction-header-text">{Info.about.title}</h2>
                <p className="fraction-body-text" id="about">{Info.about.content}</p>
                <h2 className="fraction-header-text odd">{Info.about.title2}</h2>
                <p className="fraction-body-text odd" id="about">{Info.about.content2}</p>
                <h2 className="fraction-header-text">{Info.about.title3}</h2>
                <p className="fraction-body-text" id="about">{Info.about.content3}</p>
                <h2 className="fraction-header-text odd">{Info.about.title4}</h2>
                <p className="fraction-body-text odd" id="about">{Info.about.content4}</p>
                <h2 className="fraction-header-text">Experience</h2>
                <p className="fraction-body-text" id="about">Here's a short list of all the languages/frameworks and packages I'm using and the years of usage I have, note that there are many more frameworks and packages, here are just the most in-demand ones.</p>
            </section>
            <section className="lang-diffs" id="experience">
                {
                    diffs.map((diff) => (
                        <div className="lang-diff" key={diff.lang}>
                            <h3>{diff.diff} {diff.diff === 1 ? "Year" : "Years"}</h3>
                            <h6>Of {diff.lang}</h6>
                        </div>
                    ))
                }
            </section>
            <section className="fraction">
                <p className="fraction-body-text" id="about">As you can clearly see I know a thing or two, and even if I don't know the framework you need, my ability to learn fast will help me understand the entire framework or language in as little as a few days.</p>
            </section>
            <section className="awards">
                <h2 className="awards-h2">My awards</h2>
                <div className="card-award ai">
                    <div className="content">
                        <h3>AI developer</h3>
                        <p>Through Google courses.</p>
                    </div>
                </div>
                <div className="card-award frontend">
                    <div className="content">
                        <h3>Front-End expertise</h3>
                        <p>With Meta.</p>
                    </div>
                </div>
                <h2 className="awards-h2">My projects</h2>
                <div className="card-award project ipg">
                    <div className="content">
                        <h3>IPG</h3>
                        <p>A C++ AI for image generation and detection. Efficient and versatile, it enhances computer vision and graphics with fast processing. Enables real-time applications in gaming, AR, robotics, and more. Leveraging advanced algorithms and deep learning, IGP delivers powerful image manipulation and accurate object detection.</p>
                    </div>
                </div>
                <div className="card-award project imger">
                    <div className="content">
                        <h3>InstaManager</h3>
                        <p>A robust software designed to automate multiple Instagram accounts. From posting, liking, and commenting to following and unfollowing, InstaManager empowers you to streamline your Instagram activities and boost engagement.</p>
                    </div>
                </div>
                <div className="card-award project reactkit">
                    <div className="content">
                        <h3>ReactKit</h3>
                        <p>A lightweight JavaScript library designed for effortlessly creating simple and elegant user interfaces with React. Simplify your UI development process and achieve seamless integration with ReactKit's intuitive API and comprehensive component library. Boost productivity and build stunning UIs with ease.</p>
                    </div>
                </div>
                <div className="card-award project reactkit">
                    <div className="content">
                        <h3>TToolkit</h3>
                        <p>An advanced text manipulation toolkit. Detect text content, sentiments, emotions, and more. Empower your applications with powerful text analysis capabilities. Streamline text processing tasks with ease and unlock valuable insights from textual data. Boost your text-based applications with TToolKit's comprehensive features.</p>
                    </div>
                </div>
            </section>
            <section className="form">
                <h2 className="title">Contact me</h2>
                <Form />
            </section>
        </section>
    );
}

export default Body;
