import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="flex bg-slate-50 flex-col items-center gap-5 justify-center p-10">
        <p>Copyright &copy; {new Date().getFullYear()}</p>
        <p>
          Made with 💖 by{" "}
          <Link
            className="btn-link text-purple-700 hover:text-purple-600 font-bold italic"
            target="_blank"
            href="https://naushadraien.com.np"
          >
            Naushad Raien
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
