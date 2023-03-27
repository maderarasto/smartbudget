import AppHead from "./AppHead";

export default function Layout({children, title, bsColClass}) {
    return (
        <>
            <AppHead title={title} />
            <div className="row justify-content-center">
                <div className={`${bsColClass}`}>
                    {children}
                </div>
            </div>
        </>
    )
}
