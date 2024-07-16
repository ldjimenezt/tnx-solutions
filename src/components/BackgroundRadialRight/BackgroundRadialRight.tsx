import Image from "next/image";

export function BackgroundRadialRight() {
    return (
        <div className="right-0 absolute -z-50 top-0 hidden md:block">
            <Image src="/assets/background-floated-right.png" width={1000} height={1000} alt="Circle Right" />
        </div>
    )
}
