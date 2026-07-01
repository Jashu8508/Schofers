import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-2xl font-bold text-blue-400">
            🎓 Schofers
          </h2>

          <p className="mt-4 text-slate-400 leading-7">
            Empowering students through career guidance, scholarships,
            digital literacy, and cyber safety.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-4">Platform</h3>

          <ul className="space-y-2 text-slate-400">
            <li>Career Guidance</li>
            <li>Scholarships</li>
            <li>Digital Literacy</li>
            <li>Cyber Safety</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Resources</h3>

          <ul className="space-y-2 text-slate-400">
            <li>Learning Roadmaps</li>
            <li>Student Progress</li>
            <li>AI Assistant</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Follow Us</h3>

          <div className="flex gap-5 text-2xl">
            <FaGithub />
            <FaLinkedin />
            <FaInstagram />
          </div>
        </div>

      </div>

      <div className="text-center mt-10 border-t border-slate-700 pt-6 text-slate-500">
        © 2026 Schofers. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;