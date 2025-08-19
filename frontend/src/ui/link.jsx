import Link from "next/link";

export default function LinkPage({ href = "", children="" , className }) {
    return (
        <Link className={`${className}`} href={href}>
            {children}
        </Link>
    );
}
