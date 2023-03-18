export default function Layout({children, bsColClass}) {
    return (
        <div className="row justify-content-center">
            <div className={`${bsColClass}`}>
                {children}
            </div>
        </div>
    )
}
