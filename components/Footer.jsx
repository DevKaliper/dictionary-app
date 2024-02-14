import Link from "next/link";

export const Footer = () => {
  return <>
            <footer>
    <div className="flex justify-center items-center  ">
        <span className="text-lg md:text-xl lg:text-2xl">
            Made with ❤️ by{" "}
            <Link
                href="https://devkaliper.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
            >
                DevKaliper
            </Link>
        </span>
    </div>
            </footer>
  
  </>;
};
