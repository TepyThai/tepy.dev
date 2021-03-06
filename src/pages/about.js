import Layout from '../components/Layout';
import Logo from '../components/SVG/Logo';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaGithub, FaTwitter } from 'react-icons/fa';

function About() {
  const [loading, setLoading] = useState(true);
  // hacking the animation's loading (will refactor)
  //couldn't figure out the onAnimationEnded from motion yet
  useEffect(() => {
    if (loading) {
      setTimeout(() => setLoading(false), 1500);
    }
  }, [loading]);

  return (
    <Layout>
      <div className="pt-10 flex max-w-post mx-auto justify-center items-center">
        {loading && <Logo className="h-64 w-32" />}
        {!loading && (
          <div className="leading-10 transition duration-300 ease-in-out">
            <div>Hi, thanks for checking me out.</div>
            <div>
              I'm{' '}
              <span className="font-bold text-primary text-xl underline">
                Tepy
              </span>
              . I'm from Cambodia.
            </div>
            <div>I speak Khmer 🇰🇭, English 🇬🇧󠁧󠁢, Japanese 🇯🇵.</div>
            <div>I call myself a Web Developer who focus on Frontend. </div>
            <div>
              I work mostly with <span className="text-primary">React</span> as
              my Frontend framework and{' '}
              <span className="text-primary">Node</span> as my Backend.
            </div>
            <div>
              I'm currently finding my first job as a Frontend Developer after
              my graduation in 2021.
            </div>
            <div>
              If you are looking for a developer who is passionate about
              <span className="text-primary"> Frontend</span> and eager to learn
              about <span className="text-primary">New Technologies</span>, I'm
              more than happy if you would consider me.
            </div>
            <div>You can contact me via the following options:</div>
            <div className="w-64 mx-auto">
              <a
                href="https://github.com/tepythai"
                target="_blank"
                rel="noopener"
                className="my-4 flex justify-center items-center bg-github text-center text-white rounded-full max-w-xs cursor-pointer hover:bg-gray-200 hover:text-github transform hover:-translate-y-1 transition duration-200 ease-in-out"
              >
                <span className="mr-2">GitHub</span>
                <FaGithub />
              </a>
              <a
                href="https://twitter.com/TepyThai"
                target="_blank"
                rel="noopener"
                className="my-4 flex justify-center items-center bg-twitter text-center text-white rounded-full max-w-xs cursor-pointer hover:bg-gray-200 hover:text-twitter transform hover:-translate-y-1 transition duration-200 ease-in-out"
              >
                <span className="mr-2">Twitter</span>
                <FaTwitter />
              </a>
              <a
                href="https://dev.to/tepythai"
                target="_blank"
                rel="noopener"
                className="flex justify-center items-center bg-dev text-center text-black rounded-full max-w-xs cursor-pointer hover:bg-gray-200 transform hover:-translate-y-1 transition duration-200 ease-in-out"
              >
                <span className="mr-2">Dev</span>
                <img
                  src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
                  alt="Tepy Thai's DEV Profile"
                  height="30"
                  width="30"
                />
              </a>
            </div>
            <div className="mt-4">Also, you can read more about me here:</div>
            <Link href="/writing/my-journey-to-the-programming-world">
              <div className="border-2 border-primary hover:text-white hover:bg-primary bg-white px-4 py-2 mx-auto rounded-md mt-8 text-primary max-w-xs text-center cursor-pointer transform hover:-translate-y-1 transition duration-200 ease-in-out">
                Read About My Journey Here
              </div>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default About;
