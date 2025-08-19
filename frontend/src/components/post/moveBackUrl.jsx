// icon
import { ArrowUpIcon } from "@heroicons/react/24/solid";

// ui
import LinkPage from "ui/link";

export default function MoveBackUrl() {
    return (
        <div className="lg:sticky lg:top-5">
            <div className="w-max active:scale-90 transition-all duration-200 bg-secondary-900 p-1 rounded-md lg:bg-transparent  lg:top-5">
                <LinkPage href="/">
                    <ArrowUpIcon className="size-6 rotate-90 lg:size-8"  />
                </LinkPage>
            </div>
        </div>
    );
}
