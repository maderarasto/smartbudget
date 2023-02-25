export default function Layout({children, colWidth}) {
    return (
        <div className="row justify-content-center">
            <div className={`col-${colWidth}`}>
                {children}
            </div>
        </div>
    )
}
