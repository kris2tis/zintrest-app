import React from "react";
import LinkPage from "ui/link";

export default function SwitchingAuthentication({ mainText, linkText, url }) {
    return (
        <div>
            <span className="flex gap-x-1  text-[#666666]">
                <span>{mainText}</span>
                <LinkPage href={url} className="text-secondary-100 font-medium">
                    {linkText}
                </LinkPage>
            </span>
        </div>
    );
}
